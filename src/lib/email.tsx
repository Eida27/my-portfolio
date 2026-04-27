import "server-only";

import { ContactNotificationEmail } from "@/emails/contact-notification";
import type { ContactPayload } from "@/lib/contact";
import { getResend } from "@/lib/resend";

export async function sendContactEmail(payload: ContactPayload) {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!to || !from) {
    throw new Error("Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
  }

  const resend = getResend();
  const companyLabel = payload.company ? ` from ${payload.company}` : "";

  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: `Portfolio inquiry: ${payload.name}${companyLabel}`,
    react: <ContactNotificationEmail payload={payload} />,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
