import { ArrowRight, ArrowUpRight, Target } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CredentialList } from "@/components/CredentialList";
import { CtaBand } from "@/components/CtaBand";
import { ProjectTable } from "@/components/ProjectTable";
import { businesses, company, credentials, partners, projectCount, projects, vision } from "@/content/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const stats = [
  { value: "3", label: "Businesses under one company" },
  { value: String(projectCount("completed")), label: "Construction projects completed" },
  { value: String(projectCount("underway") + projectCount("upcoming")), label: "Under execution or upcoming" },
  { value: "30+", label: "Car showroom capacity" },
];

export default function Home() {
  return (
    <>
      <section className="wrap pb-6 pt-8 md:pt-10">
        <div className="grid items-end gap-6 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <h1 className="text-[clamp(2.75rem,6.1vw,5.75rem)] font-semibold leading-[1]">
            <span className="block">Building today.</span>
            <span className="block">
              <span className="text-brand">Driving</span> tomorrow.
            </span>
          </h1>
          <p className="pb-1 text-lg leading-relaxed text-ink-soft">
            An Ethiopian company with three businesses: we build commercial spaces, import electric and hybrid vehicles, and export agricultural products.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 lg:h-[calc(100dvh-21rem)] lg:max-h-[42rem] lg:min-h-[24rem] lg:flex-row">
          {businesses.map((b, i) => (
            <Link
              key={b.slug}
              href={`/businesses/${b.slug}`}
              className="hero-panel group relative flex h-72 min-w-0 flex-col justify-between overflow-hidden rounded-3xl bg-ink p-6 text-white lg:h-auto"
            >
              <Image
                src={b.image}
                alt={b.imageAlt}
                fill
                preload={i < 2}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="zoom-img object-cover"
                style={{ objectPosition: b.imagePosition }}
              />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
              <span className="relative flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-full bg-white text-ink">
                  <b.icon aria-hidden className="size-6" />
                </span>
                <span className="grid size-12 place-items-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-brand group-hover:text-ink">
                  <ArrowUpRight aria-hidden className="size-5" />
                </span>
              </span>
              <span className="relative">
                <span className="block font-display text-3xl font-semibold leading-tight tracking-tight">{b.name}</span>
                <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/85">
                  {b.highlights.map((h) => (
                    <span key={h.label} className="flex items-center gap-1.5 whitespace-nowrap">
                      <h.icon aria-hidden className="size-4 text-brand" /> {h.label}
                    </span>
                  ))}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="Company at a glance" className="wrap py-10 md:py-14">
        <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-line pl-5 pr-3">
              <dd className="font-display text-5xl font-semibold tracking-tight md:text-6xl">{s.value}</dd>
              <dt className="mt-2 text-ink-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap py-16 md:py-24">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] md:text-6xl">One partner. Three strong sectors.</h2>
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {businesses.map((b) => (
            <article key={b.slug} className="flex flex-col border-t border-ink pt-6">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-tint text-brand-deep">
                <b.icon aria-hidden className="size-7" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold">{b.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{b.summary}</p>
              <Link href={`/businesses/${b.slug}`} aria-label={`Learn more about ${b.name}`} className="mt-5 flex items-center gap-2 font-semibold">
                Learn more <ArrowRight aria-hidden className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <div className="mb-10 grid gap-4 md:mb-14 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-6xl">Spaces that make business happen.</h2>
          </div>
          <Link href="/projects" className="flex items-center gap-2 font-semibold md:justify-self-end">
            All {projects.length} projects <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
        <ProjectTable items={projects.filter((p) => p.status !== "upcoming")} />
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-brand">Licensed and authorized</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.05] md:text-5xl">Recognized by the authorities that matter.</h2>
            <Link href="/about#licences" className="mt-6 flex items-center gap-2 font-semibold">
              About our company <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <CredentialList items={credentials} tone="dark" />
        </div>
      </section>

      <section className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image src="/images/interior-office.jpg" alt="Open-plan office with a meeting table and full-height windows" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow flex items-center gap-2"><Target aria-hidden className="size-4" /> Vision 2030</p>
          <p className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight md:text-[2.75rem]">{vision}</p>
          <p className="mt-8 text-ink-soft">
            Established in {company.established}, based in {company.address.city}. Working with {partners.map((p) => p.title).join(", ").replace(/, ([^,]*)$/, " and $1")}.
          </p>
          <Link href="/about" className="btn btn-ghost mt-6">Our company <ArrowRight aria-hidden className="size-4" /></Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
