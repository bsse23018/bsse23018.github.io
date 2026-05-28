import Hero from "./Hero";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";

export default function Content() {
  return (
    <div className="pointer-events-none relative z-30">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />

      <section className="pointer-events-auto px-6 py-16 md:px-12 md:py-24">
        <p className="max-w-2xl text-xs leading-relaxed text-gray-500">
          Crafted with React, Three.js, and precision engineering. © 2026 Tayyab Nasir.
        </p>
      </section>
    </div>
  );
}
