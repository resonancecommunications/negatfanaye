import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { businesses } from "@/content/site";

export const metadata: Metadata = {
  title: "Businesses",
  description: "Construction and contracting, electric and hybrid vehicles, and Ethiopian agricultural exports.",
  alternates: { canonical: "/businesses" },
};

export default function BusinessesPage() {
  return (
    <>
      <PageIntro eyebrow="Our businesses" title="One partner. Three strong sectors." text="Each business has its own specialist team and licences, connected by one idea: make every transaction, project and partnership count." />
      <div className="wrap space-y-5 pb-16 md:pb-24">
        {businesses.map((b) => (
          <Link key={b.slug} href={`/businesses/${b.slug}`} className="group grid overflow-hidden rounded-3xl border border-line md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-96">
              <Image src={b.image} alt={b.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="zoom-img object-cover" style={{ objectPosition: b.imagePosition }} />
            </div>
            <div className="flex flex-col justify-between gap-10 p-6 md:p-10">
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-tint text-brand-deep"><b.icon aria-hidden className="size-7" /></span>
                <ArrowUpRight aria-hidden className="size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div>
                <h2 className="text-4xl font-semibold leading-tight">{b.name}</h2>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-ink-soft">{b.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {b.highlights.map((h) => (
                    <li key={h.label} className="flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-sm font-medium">
                      <h.icon aria-hidden className="size-4 text-brand-deep" /> {h.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
