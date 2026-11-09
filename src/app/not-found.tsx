import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-24 md:py-36">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] md:text-7xl">This page has moved or no longer exists.</h1>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-dark">Back to home <ArrowRight aria-hidden className="size-4" /></Link>
        <Link href="/contact" className="btn btn-ghost">Contact us</Link>
      </div>
    </section>
  );
}
