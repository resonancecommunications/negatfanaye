import { Clock3 } from "lucide-react";
import type { Credential } from "@/content/site";

export function CredentialList({ items, tone = "light" }: { items: Credential[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className={`grid gap-x-10 md:grid-cols-2 ${dark ? "text-white" : ""}`}>
      {items.map((c) => (
        <li key={c.title} className={`flex gap-4 border-t py-5 ${dark ? "border-white/15" : "border-line"}`}>
          <c.icon aria-hidden className={`mt-0.5 size-6 shrink-0 ${dark ? "text-brand" : "text-brand-deep"}`} />
          <div>
            <p className="font-semibold leading-snug">{c.title}</p>
            {c.authority && <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-ink-soft"}`}>{c.authority}</p>}
            {c.note && (
              <p className={`mt-1 flex items-center gap-1.5 text-sm ${dark ? "text-white/70" : "text-ink-soft"}`}>
                <Clock3 aria-hidden className="size-3.5" /> {c.note}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
