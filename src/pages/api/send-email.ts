import type { APIRoute } from "astro";
import { sendEmail } from "../../utils/email";

export const prerender = false;

// Dirección donde se reciben los mensajes del formulario de contacto.
const CONTACT_EMAIL = import.meta.env.CONTACT_EMAIL ?? "sergioexpositodev@gmail.com";
const RECAPTCHA_SECRET_KEY = import.meta.env.RECAPTCHA_SECRET_KEY;

/** Escapa caracteres HTML para evitar inyección en el cuerpo del email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Verifica el token de reCAPTCHA v3. Es tolerante a fallos: solo rechaza
 * cuando Google devuelve explícitamente un score bajo (probable bot).
 * Si no hay token, no hay secret configurado, o falla la red, se permite
 * el envío para no perder mensajes legítimos.
 */
async function isRecaptchaValid(token: string | null): Promise<boolean> {
  if (!token || !RECAPTCHA_SECRET_KEY) return true;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }).toString(),
    });
    const result = await res.json();
    if (result.success && typeof result.score === "number") {
      return result.score >= 0.5;
    }
    // success === false suele indicar key mal configurada o token caducado:
    // no bloqueamos al usuario por un problema de configuración.
    return true;
  } catch {
    return true;
  }
}

const LOCALES = ["es", "en", "fr", "it"];

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("nameOf") as string | null;
  const replyTo = formData.get("recipient") as string | null;
  const subject = formData.get("subject") as string | null;
  const message = formData.get("message") as string | null;
  const recaptchaToken = formData.get("g-recaptcha-response") as string | null;

  // Idioma del formulario: prefijo de ruta para redirigir al locale correcto.
  const localeRaw = (formData.get("locale") as string | null) ?? "es";
  const locale = LOCALES.includes(localeRaw) ? localeRaw : "es";
  const prefix = locale === "es" ? "" : `/${locale}`;

  // Throw an error if we're missing any of the needed fields.
  if (!name || !replyTo || !subject || !message) {
    return redirect(`${prefix}/?error=campos#contact`);
  }

  if (!(await isRecaptchaValid(recaptchaToken))) {
    return new Response(
      JSON.stringify({
        message: "La verificación de seguridad falló. Por favor, inténtalo de nuevo.",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    const html = `<div>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(replyTo)}</p>
      <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Mensaje:</strong></p>
      <div>${escapeHtml(message)}</div>
    </div>`;

    await sendEmail({
      to: CONTACT_EMAIL,
      subject: `[Contacto web] ${subject}`,
      html,
      replyTo,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return redirect(`${prefix}/?error=envio#contact`);
  }

  // Redirect the user to a success page after the email is sent.
  return redirect(`${prefix}/success`);
};
