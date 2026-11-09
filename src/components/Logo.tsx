import Image from "next/image";
import Link from "next/link";

/** Live-text wordmark so it can sit on light or dark backgrounds. */
export function Logo({ tone = "ink", onClick }: { tone?: "ink" | "white"; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-3" aria-label="Nigat Fanawi Trading PLC, home">
      <Image src="/images/logo-mark.png" alt="" width={385} height={230} className="h-8 w-auto" preload />
      <span className={`font-display text-[1.05rem] whitespace-nowrap font-semibold leading-none tracking-tight ${tone === "white" ? "text-white" : "text-ink"}`}>
        Nigat Fanawi
        <span className={`mt-1 block font-sans text-[0.68rem] font-medium tracking-normal ${tone === "white" ? "text-white/70" : "text-ink-faint"}`}>
          Trading PLC
        </span>
      </span>
    </Link>
  );
}
