import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { investments, partnerRoles, partners } from "@/content/site";

export const metadata: Metadata = {
  title: "Partners",
  description: "The strategic, equity and technology partners behind Nigat Fanawi, and our equity investments.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <PageIntro eyebrow="Partners & investments" title="Relationships that create value." text="Our strategic partnerships form the backbone of how we deliver value, combining expertise, capital and networks to drive growth." />
      <section className="wrap grid gap-4 pb-16 md:grid-cols-3 md:pb-24">
        {partners.map((p, i) => (
          <article key={p.title} className="flex flex-col rounded-3xl border border-line p-6 md:p-8">
            <span className="grid size-14 place-items-center rounded-2xl bg-brand-tint text-brand-deep"><p.icon aria-hidden className="size-7" /></span>
            <p className="mt-8 text-sm font-medium text-brand-deep">{partnerRoles[i]}</p>
            <h2 className="mt-1 text-3xl font-semibold leading-tight">{p.title}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
          </article>
        ))}
      </section>
      <section className="bg-paper py-16 md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl">Strategic investments</h2>
          <ul>
            {investments.map((i) => (
              <li key={i.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-5">
                <span className="font-display text-2xl font-medium tracking-tight">{i.name}</span>
                <span className="text-ink-soft">{i.sector}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="pt-16 md:pt-24">
        <CtaBand title="Interested in partnering with us?" text="We’re open to new partnerships across construction, mobility and trade." label="Get in touch" href="/contact?topic=trading-investment" />
      </div>
    </>
  );
}
