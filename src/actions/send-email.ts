import type { APIRoute } from "astro";
import { sendEmail } from "../utils/email";

export const prerender = false;

// Clave secreta de reCAPTCHA - Se recomienda usar variables de entorno para esto
const RECAPTCHA_SECRET_KEY = import.meta.env.RECAPTCHA_SECRET_KEY;

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    // Get the form data submitted by the user on the home page
    const formData = await request.formData();
    const name = formData.get("name") as string | null;
    const to = formData.get("recipient") as string | null;
    const subject = formData.get("subject") as string | null;
    const message = formData.get("message") as string | null;
    const recaptchaToken = formData.get("g-recaptcha-response") as string | null;

    console.log({ name, to, subject, message });

    // Throw an error if we're missing any of the needed fields.
    if (!name || !to || !subject || !message) {
      throw new Error("Missing required fields");
    }

    // Verificar el token de reCAPTCHA
    if (!recaptchaToken) {
      throw new Error("reCAPTCHA verification required");
    }

    // Verificar el token con la API de Google
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }).toString(),
    });

    const recaptchaResult = await recaptchaResponse.json();

    // Si el score es demasiado bajo o la verificación falla, rechazar el envío
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.error("reCAPTCHA failed", recaptchaResult);
      return new Response(JSON.stringify({
        message: "La verificación de seguridad falló. Por favor, inténtalo de nuevo."
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    // Try to send the email using the `sendEmail` function. Throw
    // an error if it fails.
    try {
      const html = `<div>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${to}</p>
        <p><strong>Mensaje:</strong></p>
        <div>${message}</div>
      </div>`;
      
      await sendEmail({ name, to, subject, html });
    } catch (error) {
      console.error("Email sending error:", error);
      throw new Error("Failed to send email");
    }

    // Redirect the user to a success page after the email is sent.
    return redirect("/success");
  } catch (error) {
    console.error("Error in email submission:", error);
    return new Response(JSON.stringify({
      message: `Error: ${error instanceof Error ? error.message : "Unknown error"}`
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};