"use client";

import { Check, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { company, enquiryTopics } from "@/content/site";

type State = "idle" | "sending" | "sent" | "failed";

const field =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none transition-colors focus:border-ink";
const label = "block text-sm font-medium";

export function ContactFormFromUrl() {
  const topic = useSearchParams().get("topic") ?? "";
  // Remount when the topic changes so the select's default value updates.
  return <ContactForm key={topic} initialTopic={topic} />;
}

export function ContactForm({ initialTopic = "" }: { initialTopic?: string }) {
  const [state, setState] = useState<State>("idle");
  const [mailto, setMailto] = useState(`mailto:${company.email}`);
  const topic = enquiryTopics.some((t) => t.value === initialTopic) ? initialTopic : "";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const topicLabel = enquiryTopics.find((t) => t.value === data.topic)?.label ?? "General";
    // If sending fails, the visitor can still send the same message by email.
    setMailto(
      `mailto:${company.email}?subject=${encodeURIComponent(`Website enquiry: ${topicLabel}`)}&body=${encodeURIComponent(data.message ?? "")}`,
    );
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("sent");
    } catch {
      setState("failed");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-paper p-8 md:p-10">
        <span className="grid size-12 place-items-center rounded-full bg-ink text-white">
          <Check aria-hidden className="size-6" />
        </span>
        <h2 className="mt-5 text-3xl font-semibold">Thanks, your message was sent.</h2>
        <p className="mt-3 text-ink-soft">We’ll reply to the email address you gave us.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-paper p-6 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" required maxLength={120} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone <span className="font-normal text-ink-soft">(optional)</span></label>
          <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="topic" className={label}>What is this about?</label>
          <select id="topic" name="topic" required defaultValue={topic} className={field}>
            <option value="" disabled>Choose a business</option>
            {enquiryTopics.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" required rows={6} maxLength={5000} className={field} />
      </div>
      {/* Honeypot: hidden from people, tempting for bots. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {state === "failed" && (
        <p role="alert" className="rounded-xl border border-brand-deep bg-white p-4">
          We couldn’t send your message from here. Please{" "}
          <a href={mailto} className="font-semibold underline">email it to {company.email}</a> instead.
        </p>
      )}
      <button type="submit" disabled={state === "sending"} className="btn btn-dark disabled:opacity-60">
        {state === "sending" ? "Sending…" : "Send message"} <Send aria-hidden className="size-4" />
      </button>
    </form>
  );
}
