import { z } from "zod";

import { serviceOptions, timelineOptions } from "@/lib/content";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(120, "Company must be 120 characters or fewer.")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .trim()
    .refine((value) => serviceOptions.includes(value), {
      message: "Please choose a service area.",
    }),
  timeline: z
    .string()
    .trim()
    .refine((value) => timelineOptions.includes(value), {
      message: "Please choose a timeline.",
    }),
  message: z
    .string()
    .trim()
    .min(20, "Please share at least 20 characters.")
    .max(1600, "Message must be 1600 characters or fewer."),
  website: z.string().trim().max(0).optional().or(z.literal("")),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export type ContactField = keyof ContactPayload;

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<ContactField, string[]>>;
  values?: Partial<ContactPayload>;
  submittedAt: number;
};

export const initialContactState: ContactActionState = {
  status: "idle",
  message: "",
  submittedAt: 0,
};

export function formDataToContactPayload(formData: FormData) {
  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    service: String(formData.get("service") ?? ""),
    timeline: String(formData.get("timeline") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };
}
