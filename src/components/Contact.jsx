import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
    FaGithub,
    FaLinkedinIn,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
    const form = useRef();

    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

   
    const timeInput = form.current.querySelector('input[name="time"]');

    timeInput.value = new Date().toLocaleString("en-NG", {
        dateStyle: "medium",
        timeStyle: "short",
    });

    emailjs
        .sendForm(
            "service_llt9aho",
            "template_oeqweik",
            form.current,
            {
                publicKey: "L1G7Y4umRosJlSrtA",
            }
        )
        .then(
            () => {
                setSending(false);
                setStatus("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                setSending(false);
                setStatus("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            }
        );
};
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#080808] px-6 py-[75px] text-white sm:px-8 lg:px-[60px]"
        >
            <div className="mx-auto max-w-[1045px]">

                {/* HEADING */}
                <div className="mb-5">
                    <h2 className="text-3xl font-bold">
                        Get In Touch
                    </h2>

                    <div className="mt-1 h-[1px] w-[69px] bg-white"></div>
                </div>


                <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">


                    <a
                        href="mailto:adegboyegaphilip6@gmail.com"
                        className="group rounded-xl border border-white/15 bg-[#090909] p-5 transition duration-300 hover:border-white/30"
                    >
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

                                <span className="mt-5 inline-block text-xs text-gray-400 transition group-hover:text-white">
                                    Send Message
                                </span>
                            </div>
                        </div>
                    </a>


                    <a
                        href="https://wa.me/2347064136432"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl border border-white/15 bg-[#090909] p-5 transition duration-300 hover:border-white/30"
                    >
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

                                <span className="mt-5 inline-block text-xs text-gray-400 transition group-hover:text-white">
                                    Chat Now
                                </span>
                            </div>
                        </div>
                    </a>


                    <a
                        href="https://linkedin.com/in/adegboyega-philip-504517421"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl border border-white/15 bg-[#090909] p-5 transition duration-300 hover:border-white/30"
                    >
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

                                <span className="mt-5 inline-block text-xs text-gray-400 transition group-hover:text-white">
                                    Connect
                                </span>
                            </div>
                        </div>
                    </a>


                    <a
                        href="https://github.com/philip200802"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl border border-white/15 bg-[#090909] p-5 transition duration-300 hover:border-white/30"
                    >
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

                                <span className="mt-5 inline-block text-xs text-gray-400 transition group-hover:text-white">
                                    View profile
                                </span>
                            </div>
                        </div>
                    </a>

                </div>


                <div className="mt-7 rounded-xl border border-white/15 bg-[#090909] p-5 sm:p-6">

                    <h3 className="mb-5 text-base font-semibold">
                        Send me a message
                    </h3>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-4"
                    >


                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-white"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white/30"
                            />
                        </div>


                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-white"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white/30"
                            />
                        </div>


                        <input
                            type="hidden"
                            name="time"
                        />


                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-white"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                required
                                className="w-full resize-none rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white/30"
                            ></textarea>
                        </div>


                        <div className="flex justify-center pt-2">
                            <button
                                type="submit"
                                disabled={sending}
                                className="rounded-lg bg-[#292929] px-14 py-3 text-sm font-semibold text-white transition hover:bg-[#333] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                        </div>


                        {status && (
                            <p className="text-center text-sm text-gray-400">
                                {status}
                            </p>
                        )}

                    </form>
                </div>
            </div>
        </section>
    );
}