export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#080808] text-white px-6 py-16 sm:px-8 lg:px-[60px]">
            <div className="max-w-[1240px] mx-auto">

                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold mb-5">
                            Code Crafters
                        </h3>

                        <p className="text-sm leading-6 text-gray-400 max-w-[350px]">
                            Building scalable, high-performance applications
                            with modern technologies.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base font-semibold mb-5">
                            Quick Links
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#home"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Connect */}
                    <div>
                        <h4 className="text-base font-semibold mb-5">
                            Connect
                        </h4>

                        <ul className="space-y-3">

                            {/* GitHub */}
                            <li>
                                <a
                                    href="https://github.com/philip200802"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>

                            {/* LinkedIn */}
                            <li>
                                <a
                                    href="https://linkedin.com/in/adegboyega-philip-504517421"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>

                            {/* Email */}
                            <li>
                                <a
                                    href="mailto:adegboyegaphilip6@gmail.com"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Email
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>


                {/* Divider */}
                <div className="border-t border-white/10"></div>


                {/* Copyright */}
                <div className="pt-8">
                    <p className="text-center text-sm text-gray-400">
                        © {currentYear} Philip Adegboyega. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}