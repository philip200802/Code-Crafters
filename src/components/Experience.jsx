import FloatingIcons from "./FloatingIcons";

const experiences = [
  {
    organization: "Outer World",
    role: "Frontend Developer",
    period: "2026 - Present",
    tags: ["Frontend Development", "Web Development"],
  },
  {
    organization: "Rael Flexx Digitals",
    role: "Full Stack Developer",
    period: "2026 - Present",
    tags: ["Full Stack Development", "Web Development"],
  },
  {
    organization: "Cowrywise",
    role: "Brand Ambassador",
    period: "2025 - Present",
    tags: ["Community", "Advocacy", "Fintech"],
  },
  {
    organization: "GDG Ogbomoso",
    role: "Community Member",
    period: "2025 - Present",
    tags: ["Developer Community", "Learning", "Collaboration"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080808] px-6 py-[75px] text-white sm:px-8 lg:px-[60px]"
    >
      <FloatingIcons />

      <div className="relative z-10 mx-auto max-w-[1165px]">
        <h2 className="inline-block border-b border-white pb-[4px] text-[30px] font-bold leading-none tracking-[-1px] text-white sm:text-[32px]">
          Experience
        </h2>

        <div className="relative mt-[45px] max-w-[760px] pl-7 sm:pl-10">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-[#292929] sm:left-[11px]" />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <article key={experience.organization} className="relative">
                <span className="absolute -left-[27px] top-1 h-[15px] w-[15px] rounded-full border-2 border-[#080808] bg-white sm:-left-[35px]" />

                <p className="text-sm text-[#929292]">
                  {experience.organization}
                </p>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#d0d0d0]">
                  {experience.period}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#242424] px-3 py-1 text-[11px] font-medium text-[#e0e0e0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
