import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageIntro } from "@/components/PageIntro";
import { ProjectExplorer } from "@/components/ProjectExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Completed, under-execution and upcoming construction projects by Nigat Fanawi across Ethiopia.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Projects" title="Spaces that make business happen." text="Our construction portfolio: offices, branches and public facilities across Ethiopia." />
      <section className="wrap pb-16 md:pb-24"><ProjectExplorer /></section>
      <CtaBand title="Have a project in mind?" text="Tell us about the space, the location and your timeline." href="/contact?topic=construction-contracting" label="Discuss a project" />
    </>
  );
}
