import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactFormFromUrl } from "@/components/ContactForm";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Nigat Fanawi head office in Addis Ababa about construction, vehicles, agricultural exports or investment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="wrap grid gap-12 pb-16 pt-14 md:pb-24 md:pt-24 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-5xl font-semibold leading-[1.02] md:text-7xl">Start a conversation.</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          Contact our Addis Ababa head office about construction, mobility, agricultural exports or investment.
        </p>
        <ul className="mt-10">
          <li className="flex gap-4 border-t border-line py-5">
            <Mail aria-hidden className="mt-0.5 size-6 shrink-0 text-brand-deep" />
            <div>
              <p className="text-sm text-ink-soft">Email</p>
              <a href={`mailto:${company.email}`} className="break-all font-semibold hover:underline">{company.email}</a>
            </div>
          </li>
          <li className="flex gap-4 border-y border-line py-5">
            <MapPin aria-hidden className="mt-0.5 size-6 shrink-0 text-brand-deep" />
            <div>
              <p className="text-sm text-ink-soft">Head office</p>
              <address className="font-semibold not-italic leading-relaxed">
                {company.address.line1}<br />{company.address.line2}<br />{company.address.city}, {company.address.country}
              </address>
              <a href={company.mapUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-medium underline">
                Open in Maps <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Suspense fallback={<ContactForm />}>
        <ContactFormFromUrl />
      </Suspense>
    </section>
  );
}
