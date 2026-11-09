import type { Offer } from "@/content/site";

export function IconCard({ item }: { item: Offer }) {
  return (
    <div className="rounded-2xl border border-line p-6">
      <span className="grid size-12 place-items-center rounded-xl bg-brand-tint text-brand-deep">
        <item.icon aria-hidden className="size-6" />
      </span>
      <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
      <p className="mt-2 leading-relaxed text-ink-soft">{item.text}</p>
    </div>
  );
}
