import { company, enquiryTopics } from "@/content/site";

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Pretend success for bots that filled the hidden field.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 5000);
  const topic = enquiryTopics.find((t) => t.value === body.topic);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || !topic) {
    return Response.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !from) {
    // Not configured: the form shows the visitor an email fallback, so nothing is silently lost.
    return Response.json({ error: "Email is not configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: process.env.CONTACT_TO ?? company.email,
      reply_to: email,
      subject: `Website enquiry: ${topic.label}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not given"}\nTopic: ${topic.label}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Contact email failed", res.status);
    return Response.json({ error: "Could not send" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
