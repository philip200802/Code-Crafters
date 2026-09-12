export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] px-6 py-[70px] text-white sm:px-10 lg:px-[60px]"
    >
     <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

  <img
    src="/image/ion--logo-react.png"
    alt=""
    className="
    absolute
      left-[12%]
      top-[18%]
      w-[35px]
      opacity-[0.18]
      animate-float-slow
    "  
  />

  <img
    src="/image/images (8).png"
    alt=""
    className="
      absolute
      right-[18%]
      top-[15%]
      w-[35px]
      opacity-[0.18]
      animate-float
    "
  />

  <img
    src="/image/icons8-tailwind-css-48.png"
    alt=""
    className="
      absolute
      left-[8%]
      bottom-[18%]
      w-[35px]
      opacity-[0.18]
      animate-float-reverse
    "
  />


  <img
    src="/image/images (1).jfif"
    alt=""
    className="
      absolute
      right-[10%]
      bottom-[20%]
      w-[35px]
      opacity-[0.18]
      animate-float-slow
    "
  />


  <img
    src="/image/download (7).png"
    alt=""
    className="
      absolute
      right-[38%]
      top-[10%]
      w-[35px]
      opacity-[0.15]
      animate-float
    "
  />

  <img
    src="/image/download (6).png"
    alt=""
    className="
      absolute
      right-[32%]
      top-[40%]
      w-[35px]
      opacity-[0.15]
      animate-float
    "
  />
   <img
                    src="/image/images (6).png"
                    alt=""
                    className="
    absolute
      left-[42%]
      top-[78%]
      w-[35px]
      opacity-[0.18]
      animate-float-slow
    "
                />


    <img
    src="/image/typescript.png"
    alt=""
    className="
      absolute
      right-[68%]
      top-[50%]
      w-[35px]
      opacity-[0.15]
      animate-float
    "
  />

    <img
    src="/image/icons8-javascript-48.png"
    alt=""
    className="
      absolute
      right-[48%]
      top-[35%]
      w-[65px]
      opacity-[0.15]
      animate-float
    "
  />
</div>


      <div className="relative z-10 mx-auto max-w-[1165px]">


        <h2
          className="
            inline-block
            border-b
            border-white
            pb-[3px]
            text-[30px]
            font-bold
            leading-none
            tracking-[-1px]
            text-white
            sm:text-[32px]
          "
        >
          About Me
        </h2>


        <div
          className="
            mt-[40px]
            grid
            items-start
            gap-[50px]
            lg:grid-cols-[1.05fr_1fr]
            lg:gap-[90px]
          "
        >


          <div className="pt-[28px]">

            <p
              className="
                max-w-[515px]
                text-[17px]
                font-normal
                leading-[1.72]
                text-[#999999]
                sm:text-[18px]
              "
            >
              I'm a Software Engineer with expertise in modern web
              technologies. I specialize in building scalable, performant
              applications with a focus on user experience and clean code
              architecture.
            </p>

            <p
              className="
                mt-[16px]
                max-w-[515px]
                text-[17px]
                font-normal
                leading-[1.72]
                text-[#999999]
                sm:text-[18px]
              "
            >
              When I'm not coding, you can find me exploring new
              technologies, or sharing knowledge with the developer
              community.
            </p>


            <div className="mt-[24px] flex gap-[10px]">
              <span
                className="
                  rounded-[7px]
                  border
                  border-[#292929]
                  px-[9px]
                  py-[7px]
                  text-[11px]
                  font-medium
                  text-[#d0d0d0]
                "
              >
                Web
              </span>

              <span
                className="
                  rounded-[7px]
                  border
                  border-[#292929]
                  px-[9px]
                  py-[7px]
                  text-[11px]
                  font-medium
                  text-[#d0d0d0]
                "
              >
                Backend
              </span>

              <span
                className="
                  rounded-[7px]
                  border
                  border-[#292929]
                  px-[9px]
                  py-[7px]
                  text-[11px]
                  font-medium
                  text-[#d0d0d0]
                "
              >
                Mobile
              </span>
            </div>

            <div
              className="
                mt-[24px]
                flex
                max-w-[515px]
                items-center
                justify-between
                border-t
                border-[#292929]
                pt-[24px]
              "
            >

              <div>
                <p className="text-[12px] font-medium text-[#888888]">
                  Based In
                </p>

                <p className="mt-[2px] text-[14px] font-semibold text-white">
                  Ogbomoso, Oyo state,  Nigeria
                </p>
              </div>

              <div
                className="
                  rounded-[8px]
                  border
                  border-[#292929]
                  px-[10px]
                  py-[10px]
                  text-[11px]
                  font-medium
                  text-[#d0d0d0]
                "
              >
                Building Since 2025
              </div>
            </div>
          </div>

          <div className="relative">

            <div
              className="
                relative
                overflow-hidden
                rounded-[22px]
                bg-[#151515]
              "
            >
              <img
                src="/image/IMG-20250825-WA0016.jpg"
                alt="Philip Adegboyega"
                className="
                  h-[390px]
                  w-full
                  object-cover
                  grayscale
                  transition
                  duration-500
                  hover:grayscale-0
                  sm:h-[420px]
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}