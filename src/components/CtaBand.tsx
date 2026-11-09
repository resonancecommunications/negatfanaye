import { ArrowRight } from "lucide-react";
import Link from "next/link";

/** Decorative fan of rays, echoing the rays in the logo mark. */
function Rays() {
  return (
    <svg aria-hidden viewBox="0 0 400 400" className="absolute -bottom-40 -right-24 hidden size-[34rem] overflow-visible text-ink/10 md:block" fill="currentColor">
      {[-60, -30, 0, 30, 60].map((angle) => (
        <rect key={angle} x="170" y="10" width="60" height="130" rx="4" transform={`rotate(${angle} 200 290)`} />
      ))}
    </svg>
  );
}
//this
export function CtaBand({
  title = "Tell us what you’re building, buying or sourcing.",
  text = "Our Addis Ababa head office handles construction, vehicle, export and investment conversations.",
  href = "/contact",
  label = "Start a conversation",
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="wrap pb-16 md:pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 md:px-16 md:py-20">
        <Rays />
        <div className="relative max-w-3xl">
          <h2 className="text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg text-ink">{text}</p>
          <Link href={href} className="btn btn-dark mt-8">
            {label} <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
