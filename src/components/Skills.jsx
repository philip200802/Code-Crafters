import { skills } from "../data/skills";

export default function Skills() {
  const SkillCategory = ({ category, skills: skillList }) => (
    <div>
      <h3 className="mb-4 text-xl font-bold capitalize text-white">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-[#292929]
              bg-[#111111]
              px-4
              py-3
              text-sm
              font-medium
              text-gray-300
              transition
              duration-200
              hover:border-white/30
              hover:bg-[#181818]
            "
          >
            <img
              src={skill.image}
              alt=""
              className="h-6 w-6 object-contain"
            />

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-[1165px]">

        <h2 className="text-4xl font-bold text-white">
          Proficiencies
        </h2>

        <div className="mb-12 mt-2 h-[2px] w-[80px] bg-white" />

        <div className="grid gap-10 md:grid-cols-2">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skillList}
            />
          ))}
        </div>

      </div>
    </section>
  );
}