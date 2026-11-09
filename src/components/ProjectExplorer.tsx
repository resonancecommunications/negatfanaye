"use client";

import { useState } from "react";
import { projects, statusLabels, type ProjectStatus } from "@/content/site";
import { ProjectTable } from "./ProjectTable";

const filters: ("all" | ProjectStatus)[] = ["all", "completed", "underway", "upcoming"];

export function ProjectExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.status === filter);

  return (
    <>
      <div role="group" aria-label="Filter projects by status" className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f === "all" ? projects.length : projects.filter((p) => p.status === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`min-h-11 rounded-full border px-4 text-[0.9375rem] font-medium transition-colors ${
                active ? "border-ink bg-ink text-white" : "border-line hover:border-ink"
              }`}
            >
              {f === "all" ? "All" : statusLabels[f]} <span className="opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
      <ProjectTable items={visible} />
    </>
  );
}
