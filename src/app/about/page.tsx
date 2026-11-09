import { Compass, Target } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { CredentialList } from "@/components/CredentialList";
import { CtaBand } from "@/components/CtaBand";
import { IconCard } from "@/components/IconCard";
import { PageIntro } from "@/components/PageIntro";
import { company, credentials, divisions, leaders, mission, reasons, values, vision } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Mission, vision, values, leadership and licences of Nigat Fanawi Trading PLC, a multi-sector Ethiopian company based in Addis Ababa.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow={`About us · Established ${company.established}`} title="A diversified Ethiopian company, building sustainable growth." text="Our Addis Ababa foundation connects construction, sustainable mobility, agricultural exports and investment with a long-term international outlook." />

      <section className="wrap grid gap-4 pb-16 md:grid-cols-2 md:pb-24">
        <div className="rounded-3xl bg-ink p-8 text-white md:p-12">
          <Compass aria-hidden className="size-8 text-brand" />
          <h2 className="mt-6 text-3xl font-semibold">Our mission</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/85">{mission}</p>
        </div>
        <div className="rounded-3xl bg-paper p-8 md:p-12">
          <Target aria-hidden className="size-8 text-brand-deep" />
          <h2 className="mt-6 text-3xl font-semibold">Our vision</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{vision}</p>
        </div>
      </section>

      <section className="wrap pb-16 md:pb-24">
        <h2 className="mb-8 max-w-3xl text-4xl font-semibold leading-[1.05] md:text-5xl">Professional execution with a long-term outlook</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => <IconCard key={r.title} item={r} />)}
        </div>
      </section>

      <section id="leadership" className="bg-paper py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <h2 className="mb-8 text-4xl font-semibold md:text-5xl">Leadership</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {leaders.map((l) => (
                <figure key={l.name} className="overflow-hidden rounded-3xl bg-white">
                  <div className="relative aspect-[4/5]">
                    <Image src={l.image} alt={`Portrait of ${l.name}`} fill sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
                  </div>
                  <figcaption className="p-5">
                    <p className="font-display text-2xl font-semibold tracking-tight">{l.name}</p>
                    <p className="mt-1 text-ink-soft">{l.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Operating divisions</h3>
            <ul className="mt-4">
              {divisions.map((d) => <li key={d} className="border-t border-line py-3 font-medium">{d}</li>)}
            </ul>
            <h3 className="mt-10 text-2xl font-semibold">Growing the team</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Led by our General Manager, we have a core team of 11 dedicated professionals and a strategic target of 20+, with recruitment support from New Paradigm Consultancy.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <h2 className="mb-8 text-4xl font-semibold md:text-5xl">How we work</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title}>
              <v.icon aria-hidden className="size-7 text-brand-deep" />
              <h3 className="mt-4 text-xl font-semibold">{v.title}</h3>
              <p className="mt-1 leading-relaxed text-ink-soft">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="licences" className="wrap pb-16 md:pb-24">
        <h2 className="mb-8 text-4xl font-semibold md:text-5xl">Licences and certifications</h2>
        <CredentialList items={credentials} />
      </section>

      <CtaBand />
    </>
  );
}
