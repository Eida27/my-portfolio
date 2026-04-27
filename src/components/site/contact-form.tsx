"use client";

import { useActionState, useEffect, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { submitContactForm } from "@/app/actions";
import {
  ContactActionState,
  ContactField,
  initialContactState,
} from "@/lib/contact";
import { serviceOptions, timelineOptions } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function fieldError(state: ContactActionState, field: ContactField) {
  return state.fieldErrors?.[field]?.[0];
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState,
  );
  const [service, setService] = useState(state.values?.service ?? "");
  const [timeline, setTimeline] = useState(state.values?.timeline ?? "");

  useEffect(() => {
    if (!state.submittedAt) {
      return;
    }

    if (state.status === "success") {
      toast.success(state.message);
    }

    if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state.message, state.status, state.submittedAt]);

  return (
    <form action={formAction} className="grid gap-5" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          error={fieldError(state, "name")}
          required
        >
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            defaultValue={state.values?.name ?? ""}
            aria-invalid={Boolean(fieldError(state, "name"))}
            required
          />
        </Field>

        <Field
          id="email"
          label="Email"
          error={fieldError(state, "email")}
          required
        >
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            defaultValue={state.values?.email ?? ""}
            aria-invalid={Boolean(fieldError(state, "email"))}
            required
          />
        </Field>
      </div>

      <Field id="company" label="Company" error={fieldError(state, "company")}>
        <Input
          id="company"
          name="company"
          placeholder="Company or project name"
          defaultValue={state.values?.company ?? ""}
          aria-invalid={Boolean(fieldError(state, "company"))}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="service"
          label="Service"
          error={fieldError(state, "service")}
          required
        >
          <input type="hidden" name="service" value={service} />
          <Select value={service} onValueChange={setService} required>
            <SelectTrigger
              id="service"
              className="h-11 w-full"
              aria-invalid={Boolean(fieldError(state, "service"))}
            >
              <SelectValue placeholder="Choose a focus area" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field
          id="timeline"
          label="Timeline"
          error={fieldError(state, "timeline")}
          required
        >
          <input type="hidden" name="timeline" value={timeline} />
          <Select value={timeline} onValueChange={setTimeline} required>
            <SelectTrigger
              id="timeline"
              className="h-11 w-full"
              aria-invalid={Boolean(fieldError(state, "timeline"))}
            >
              <SelectValue placeholder="When should we start?" />
            </SelectTrigger>
            <SelectContent>
              {timelineOptions.map((timeline) => (
                <SelectItem key={timeline} value={timeline}>
                  {timeline}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field
        id="message"
        label="What needs support?"
        error={fieldError(state, "message")}
        required
      >
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me what is currently taking too much time, what needs to stay organized, and what a useful first win would look like."
          defaultValue={state.values?.message ?? ""}
          aria-invalid={Boolean(fieldError(state, "message"))}
          className="min-h-36 resize-y"
          required
        />
      </Field>

      <div aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
        {state.message}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="w-full justify-center gap-2 sm:w-fit"
      >
        <Send className="size-4" />
        {pending ? "Sending..." : "Send project brief"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>
        {label}
        {required ? <span className="text-signal"> *</span> : null}
      </Label>
      {children}
      <p className="min-h-5 text-xs text-destructive">{error ?? ""}</p>
    </div>
  );
}
