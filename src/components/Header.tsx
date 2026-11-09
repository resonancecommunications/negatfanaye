"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { businesses } from "@/content/site";
import { Logo } from "./Logo";

const company = [
  { href: "/about", label: "About" },
  { href: "/about#leadership", label: "Leadership" },
  { href: "/about#licences", label: "Licences" },
  { href: "/partners", label: "Partners" },
];

const linkClass = "rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors hover:bg-paper";

function Dropdown({ label, width, children }: { label: string; width: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <button type="button" aria-haspopup="true" className={`${linkClass} flex items-center gap-1`}>
        {label}
        <ChevronDown aria-hidden className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className={`${width} rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/5`}>{children}</div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Logo onClick={close} />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Dropdown label="Businesses" width="w-[23rem]">
            {businesses.map((b) => (
              <Link key={b.slug} href={`/businesses/${b.slug}`} className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-paper">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-tint text-brand-deep">
                  <b.icon aria-hidden className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold">{b.name}</span>
                  <span className="block text-sm text-ink-soft">{b.highlights.map((h) => h.label).slice(0, 2).join(" · ")}</span>
                </span>
              </Link>
            ))}
          </Dropdown>
          <Link href="/projects" className={linkClass}>Projects</Link>
          <Dropdown label="Company" width="w-52">
            {company.map((c) => (
              <Link key={c.href} href={c.href} className="block rounded-xl px-3 py-2.5 font-medium transition-colors hover:bg-paper">
                {c.label}
              </Link>
            ))}
          </Dropdown>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" onClick={close} className="btn btn-dark hidden min-h-11 py-2 sm:inline-flex">Contact us</Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <div className="wrap flex flex-col py-4">
            <p className="pb-1 pt-2 text-sm text-ink-faint">Businesses</p>
            {businesses.map((b) => (
              <Link key={b.slug} href={`/businesses/${b.slug}`} onClick={close} className="flex items-center gap-3 py-3 font-medium">
                <b.icon aria-hidden className="size-5 text-brand-deep" />
                {b.name}
              </Link>
            ))}
            <p className="pb-1 pt-4 text-sm text-ink-faint">Explore</p>
            <Link href="/projects" onClick={close} className="py-3 font-medium">Projects</Link>
            {company.map((c) => (
              <Link key={c.href} href={c.href} onClick={close} className="py-3 font-medium">{c.label}</Link>
            ))}
            <Link href="/contact" onClick={close} className="btn btn-dark mt-4">Contact us</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
