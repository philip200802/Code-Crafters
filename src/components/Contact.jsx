import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-6 py-[75px] text-white sm:px-8 lg:px-[60px]"
    >
      <div className="mx-auto max-w-[1045px]">

        {/* ================= HEADING ================= */}
        <div className="mb-5">
          <h2 className="text-3xl font-bold">
            Get In Touch
          </h2>

          <div className="mt-1 h-[1px] w-[69px] bg-white"></div>
        </div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">

          {/* EMAIL */}
          <div className="group rounded-xl border border-white/15 bg-[#090909] p-5 transition duration-300 hover:border-white/30">
            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#292929]">
                <FaEnvelope className="text-xl text-[#ea4335]" />
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  Email
                </h3>

                <p className="text-sm text-gray-400">
                  adegboyegaphilip6@gmail.com
                </p>

                <a
                  href="mailto:adegboyegaphilip6@gmail.com"
                  className="mt-5 inline-block text-xs text-gray-400 transition hover:text-white"
                >
                  Send Message
                </a>
              </div>

            </div>
          </div>

          {/* WHATSAPP */}
          <div className="group rounded-xl border border-white/15 bg-[#090909] p-5 transition duration-300 hover:border-white/30">
            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#292929]">
                <FaWhatsapp className="text-xl text-[#25D366]" />
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  WhatsApp
                </h3>

                <p className="text-sm text-gray-400">
                  +234 7064136432
                </p>

                <a
                  href="https://wa.me/2347064136432"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-xs text-gray-400 transition hover:text-white"
                >
                  Chat Now
                </a>
              </div>

            </div>
          </div>

          {/* LINKEDIN */}
          <div className="group rounded-xl border border-white/15 bg-[#090909] p-5 transition duration-300 hover:border-white/30">
            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#292929]">
                <FaLinkedinIn className="text-xl text-white" />
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  LinkedIn
                </h3>

                <p className="text-sm text-gray-400">
                  in/adegboyegaphilip-
                </p>

                <a
                  href="linkedin.com/in/adegboyega-philip-504517421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-xs text-gray-400 transition hover:text-white"
                >
                  Connect
                </a>
              </div>

            </div>
          </div>

          {/* GITHUB */}
          <div className="group rounded-xl border border-white/15 bg-[#090909] p-5 transition duration-300 hover:border-white/30">
            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#292929]">
                <FaGithub className="text-xl text-white" />
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  GitHub
                </h3>

                <p className="text-sm text-gray-400">
                  @philip200802
                </p>

                <a
                  href="https://github.com/philip200802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-xs text-gray-400 transition hover:text-white"
                >
                  View profile
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ================= MESSAGE FORM ================= */}
        <div className="mt-7 rounded-xl border border-white/15 bg-[#090909] p-5 sm:p-6">

          <h3 className="mb-4 text-base font-semibold">
            Send me a message
          </h3>

          <form className="space-y-3.5">

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-gray-300"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-[#151515] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-[#151515] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-white/10 bg-[#151515] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#292929] py-2.5 text-sm font-semibold text-white transition hover:bg-[#333333]"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}