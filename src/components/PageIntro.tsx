export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="wrap pb-12 pt-14 md:pb-16 md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-[1.02] md:text-7xl">{title}</h1>
      {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{text}</p>}
    </section>
  );
}
