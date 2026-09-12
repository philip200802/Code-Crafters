import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080808] px-6 py-[75px] sm:px-8 lg:px-[60px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        <img
          src="/image/ion--logo-react.png"
          alt=""
          className="
            absolute
            left-[20%]
            top-[30%]
            w-[30px]
            opacity-[0.08]
            animate-float-slow
          "
        />
   <img
          src="/image/node.png"
          alt=""
          className="
            absolute
            right-[10%]
            top-[8%]
            w-[35px]
            opacity-[0.08]
            animate-float
          "
        />
        <img
          src="/image/javascript.png"
          alt=""
          className="
            absolute
            left-[18%]
            bottom-[10%]
            w-[35px]
            opacity-[0.08]
            animate-float-reverse
          "
        />

      </div>
      <div className="relative z-10 mx-auto max-w-[1165px]">
        <h2
          className="
            inline-block
            border-b
            border-white
            pb-[4px]
            text-[30px]
            font-bold
            leading-none
            tracking-[-1px]
            text-white
            sm:text-[32px]
          "
        >
          Selected Projects
        </h2>
        <div
          className="
            mt-[47px]
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                flex
                flex-col
                overflow-hidden
                rounded-[14px]
                border
                border-[#292929]
                bg-[#080808]
                p-[16px]
                transition
                duration-300
                hover:border-[#3a3a3a]
              "
            >
              <div className="mb-[12px]">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-[#242424]
                    px-[9px]
                    py-[5px]
                    text-[10px]
                    font-medium
                    text-white
                  "
                >
                  {project.category}
                </span>
              </div>

              <h3
                className="
                  mb-[10px]
                  text-[18px]
                  font-bold
                  leading-tight
                  text-white
                "
              >
                {project.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}
              <p
                className="
                  mb-[15px]
                  min-h-[67px]
                  text-[13px]
                  leading-[1.55]
                  text-[#9a9a9a]
                "
              >
                {project.description}
              </p>


              <div
                className="
                  mb-[16px]
                  h-[185px]
                  w-full
                  overflow-hidden
                  rounded-[9px]
                  border
                  border-[#292929]
                  bg-[#080808]
                "
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      hover:scale-[1.03]
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      text-[12px]
                      text-[#888888]
                    "
                  >
                    No cover image available
                  </div>
                )}
              </div>

              <div className="mb-[17px] flex flex-wrap gap-[7px]">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-[4px]
                      bg-[#242424]
                      px-[8px]
                      py-[5px]
                      text-[10px]
                      font-medium
                      text-[#e0e0e0]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-[13px]
                    font-medium
                    text-white
                    underline
                    underline-offset-[3px]
                    transition
                    hover:text-[#aaaaaa]
                  "
                >
                  View live project
                </a>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}