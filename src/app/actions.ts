"use server";

import {
  ContactActionState,
  contactSchema,
  formDataToContactPayload,
} from "@/lib/contact";
import { sendContactEmail } from "@/lib/email";

export async function submitContactForm(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const values = formDataToContactPayload(formData);
  const submittedAt = Date.now();

  if (values.website) {
    return {
      status: "success",
      message: "Thanks. Your message has been received.",
      submittedAt,
    };
  }

  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
      values,
      submittedAt,
    };
  }

  try {
    await sendContactEmail(parsed.data);

    return {
      status: "success",
      message:
        "Thanks. Your message is in my queue, and I will reply within 1 business day.",
      submittedAt,
    };
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return {
      status: "error",
      message:
        "The form is working, but email delivery is not configured yet. Please add the Resend environment variables in Vercel.",
      values: parsed.data,
      submittedAt,
    };
  }
}
