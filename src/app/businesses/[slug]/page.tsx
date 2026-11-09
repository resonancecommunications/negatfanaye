import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CredentialList } from "@/components/CredentialList";
import { CtaBand } from "@/components/CtaBand";
import { IconCard } from "@/components/IconCard";
import { ProjectTable } from "@/components/ProjectTable";
import { businesses, credentials, getBusiness, projects } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const business = getBusiness((await params).slug);
  if (!business) return {};
  return {
    title: business.name,
    description: business.summary,
    alternates: { canonical: `/businesses/${business.slug}` },
  };
}

export default async function BusinessPage({ params }: Props) {
  const business = getBusiness((await params).slug);
  if (!business) notFound();

  const contactHref = `/contact?topic=${business.slug}`;
  const related = credentials.filter((c) => c.business === business.slug);
  const others = businesses.filter((b) => b.slug !== business.slug);
  const isConstruction = business.slug === "construction-contracting";

  return (
    <>
      <section className="wrap grid gap-8 pb-12 pt-10 md:pt-14 lg:grid-cols-2 lg:items-stretch lg:gap-14">
        <div className="flex flex-col justify-center py-4 lg:py-12">
          <span className="grid size-14 place-items-center rounded-2xl bg-brand-tint text-brand-deep"><business.icon aria-hidden className="size-7" /></span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">{business.name}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">{business.intro}</p>
          <div className="mt-8"><Link href={contactHref} className="btn btn-primary">{business.cta} <ArrowRight aria-hidden className="size-4" /></Link></div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-auto lg:min-h-[32rem]">
          <Image src={business.image} alt={business.imageAlt} fill preload sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" style={{ objectPosition: business.imagePosition }} />
        </div>
      </section>

      <section className="wrap py-12 md:py-16">
        <h2 className="mb-8 text-4xl font-semibold md:text-5xl">{business.offersTitle}</h2>
        <div className={`grid gap-4 sm:grid-cols-2 ${business.offers.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {business.offers.map((o) => <IconCard key={o.title} item={o} />)}
        </div>
      </section>

      <section className="wrap py-12 md:py-16">
        <h2 className="mb-8 text-4xl font-semibold md:text-5xl">Licences and authorizations</h2>
        <CredentialList items={related} />
      </section>

      {isConstruction && (
        <section className="wrap py-12 md:py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold md:text-5xl">Track record</h2>
            <Link href="/projects" className="flex items-center gap-2 font-semibold">All projects <ArrowRight aria-hidden className="size-4" /></Link>
          </div>
          <ProjectTable items={projects.filter((p) => p.status !== "upcoming")} />
        </section>
      )}

      <section className="wrap py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-semibold">Our other businesses</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((o) => (
            <Link key={o.slug} href={`/businesses/${o.slug}`} className="flex items-center gap-4 rounded-2xl border border-line p-5 transition-colors hover:border-ink">
              <o.icon aria-hidden className="size-6 shrink-0 text-brand-deep" />
              <span className="flex-1 font-display text-xl font-medium tracking-tight">{o.name}</span>
              <ArrowUpRight aria-hidden className="size-5" />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title={`Let’s talk about ${business.shortName.toLowerCase()}.`} href={contactHref} label={business.cta} />
    </>
  );
}
