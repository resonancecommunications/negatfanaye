import { CheckCircle2, CircleDashed, HardHat } from "lucide-react";
import { statusLabels, type Project, type ProjectStatus } from "@/content/site";

const statusStyle: Record<ProjectStatus, { icon: typeof HardHat; className: string }> = {
  completed: { icon: CheckCircle2, className: "bg-ink text-white" },
  underway: { icon: HardHat, className: "bg-brand text-ink" },
  upcoming: { icon: CircleDashed, className: "bg-paper text-ink" },
};

export function StatusPill({ status }: { status: ProjectStatus }) {
  const { icon: Icon, className } = statusStyle[status];
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium ${className}`}>
      <Icon aria-hidden className="size-3.5" />
      {statusLabels[status]}
    </span>
  );
}

export function ProjectTable({ items }: { items: Project[] }) {
  return (
    <div>
      <div className="hidden grid-cols-[2.2fr_1.2fr_1.2fr_auto] gap-6 border-b border-ink pb-3 text-sm text-ink-soft md:grid">
        <span>Project</span>
        <span>Client</span>
        <span>Location</span>
        <span className="w-40">Status</span>
      </div>
      <ul>
        {items.map((p) => (
          <li
            key={`${p.client ?? ""}-${p.name}`}
            className="grid gap-x-6 gap-y-1 border-b border-line py-5 md:grid-cols-[2.2fr_1.2fr_1.2fr_auto] md:items-center"
          >
            <p className="font-display text-xl font-medium tracking-tight">{p.name}</p>
            <p className={p.client ? "text-ink-soft" : "hidden md:block md:text-ink-faint"}>
              {p.client ?? <span aria-label="Not listed">—</span>}
            </p>
            <p className={p.location ? "text-ink-soft" : "hidden md:block md:text-ink-faint"}>
              {p.location ?? <span aria-label="Not listed">—</span>}
            </p>
            <div className="mt-2 md:mt-0 md:w-40">
              <StatusPill status={p.status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
