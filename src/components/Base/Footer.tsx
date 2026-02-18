import { FaShield } from "react-icons/fa6";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer() {
    const footerSections = [
        {
            title: "Platform",
            links: [
                { label: "Labs", href: "/labs" },
                { label: "Leaderboard", href: "/leaderboard" },
                { label: "Pricing", href: "/pricing" },
                { label: "Roadmap", href: "/roadmap" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Docs", href: "/documents" },
                { label: "Blog", href: "/blog" },
                { label: "Security", href: "/security" },
                { label: "FAQ", href: "/faq" },
            ],
        },
        {
            title: "Project",
            links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
            ],
        },
    ];

    const socials = [
        {
            label: "GitHub",
            href: "https://github.com/FarciarzYT",
            icon: FaGithub,
        },
        {
            label: "Twitter / X",
            href: "https://x.com/FarciarzYT",
            icon: FaXTwitter,
        },
    ];

    return (
        <footer className="relative bg-white/2 border-t border-white/10 mt-32 overflow-hidden">
            <div className="w-[85%] mx-auto py-20 grid grid-cols-1 lg:grid-cols-4 gap-16">

                {/* LEFT CTA SECTION */}
                <section className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <FaShield size={28} />
                        <h2 className="text-2xl font-bold">Stay Updated</h2>
                    </div>

                    <p className="text-white/70 mb-6 leading-relaxed">
                        Get updates about new labs, vulnerabilities and security concepts.
                        No spam. Just useful stuff.
                    </p>

                    <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-white/90 transition">
                        Receive Updates
                    </button>
                </section>

                {/* DYNAMIC LINKS */}
                {footerSections.map((section) => (
                    <section key={section.title}>
                        <h3 className="font-semibold mb-4 text-white/90">
                            {section.title}
                        </h3>

                        <ul className="space-y-2 text-white/80 text-sm">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="hover:text-white transition"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
                <div className="absolute bottom-12 right-0 pointer-events-none select-none">
                    <h1 className="text-[6vw] font-black text-white/5 leading-none whitespace-nowrap">
                        Web Security Learning Labs
                    </h1>
                </div>
            </div>


            <div className="border-t border-white/2 py-6 pt-4">
                <div className="w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center text-white/50 text-sm gap-4">
                    <span>
                        © {new Date().getFullYear()} FarciarzYT. All rights reserved.
                    </span>

                    <span>
                        <div className="flex items-center gap-4">
                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="rounded-xl  transition-all duration-200 hover:scale-110 text-white/80 hover:text-white"
                                >
                                    <Icon size={22} />
                                </a>
                            );
                        })}
                    </div>
                    </span>
                </div>
            </div>
        </footer>
    );
}
