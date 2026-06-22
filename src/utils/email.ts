import { createTransport, type Transporter } from "nodemailer";
import type { SentMessageInfo } from "nodemailer";

export const prerender = false;

type SendEmailOptions = {
  /** Email address of the recipient (the site owner) */
  to: string;
  /** Subject line of the email */
  subject: string;
  /** Message used for the body of the email */
  html: string;
  /** Optional reply-to address (the visitor that filled the form) */
  replyTo?: string;
};

export async function sendEmail(options: SendEmailOptions): Promise<SentMessageInfo> {
  const transporter = await getEmailTransporter();
  const { to, subject, html, replyTo } = options;
  const from = import.meta.env.SEND_EMAIL_FROM;
  const message = { to, subject, html, from, replyTo };

  return transporter.sendMail(message);
}

async function getEmailTransporter(): Promise<Transporter> {
  if (!import.meta.env.RESEND_API_KEY) {
    throw new Error("Missing Resend configuration");
  }
  return createTransport({
    host: "smtp.resend.com",
    secure: true,
    port: 465,
    auth: { user: "resend", pass: import.meta.env.RESEND_API_KEY },
  });
}
