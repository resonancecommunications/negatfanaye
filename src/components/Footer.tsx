import Link from "next/link";
import { businesses, company } from "@/content/site";
import { Logo } from "./Logo";

const heading = "mb-4 text-sm text-white/60";
const link = "text-white transition-colors hover:text-brand";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="white" />
          <p className="mt-5 max-w-xs text-white/70">{company.tagline}</p>
        </div>
        <div>
          <h2 className={`${heading} font-sans tracking-normal`}>Businesses</h2>
          <ul className="space-y-3">
            {businesses.map((b) => (
              <li key={b.slug}><Link className={link} href={`/businesses/${b.slug}`}>{b.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={`${heading} font-sans tracking-normal`}>Company</h2>
          <ul className="space-y-3">
            <li><Link className={link} href="/about">About</Link></li>
            <li><Link className={link} href="/projects">Projects</Link></li>
            <li><Link className={link} href="/partners">Partners</Link></li>
            <li><Link className={link} href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className={`${heading} font-sans tracking-normal`}>Head office</h2>
          <address className="not-italic leading-relaxed">
            {company.address.line1}<br />
            {company.address.line2}<br />
            {company.address.city}, {company.address.country}
          </address>
          <a className={`${link} mt-3 block break-all`} href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-6 text-sm text-white/60">© {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
