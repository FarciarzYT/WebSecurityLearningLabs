import {
    FaSyringe,
    FaBoxesStacked,
    FaBug,
    FaKey,
    FaDatabase,
    FaCode,
} from "react-icons/fa6";


const labsItems = [
    {
        title: "SQL Injection",
        text: "Exploit unsafe database queries to extract, modify or destroy data. Learn why parameterized queries exist the hard way.",
        href: "./models/SQLIdemo.html",
        icon: <FaSyringe size={22} aria-hidden="true" />,
        btnText: "Dump the Database",
        btnIcon: <FaDatabase size={18} aria-hidden="true" />,
    },
    {
        title: "IDOR",
        text: "Access resources that were never meant to be yours by abusing broken access control and predictable identifiers.",
        href: "./models/IDORdemo.html",
        icon: <FaBoxesStacked size={22} aria-hidden="true" />,
        btnText: "Access Unauthorized Data",
        btnIcon: <FaKey size={18} aria-hidden="true" />,
    },
    {
        title: "XSS",
        text: "Inject and execute malicious JavaScript in vulnerable applications. Steal sessions, deface pages, understand trust boundaries.",
        href: "./models/XSSdemo.html",
        icon: <FaBug size={22} aria-hidden="true" />,
        btnText: "Execute Payload",
        btnIcon: <FaCode size={18} aria-hidden="true" />,
    },
];

export default function NewLabs() {
    return (
        <section className="mt-32 mb-32" aria-labelledby="labs-heading">
            <header>
                <h2
                    id="labs-heading"
                    className="text-center mb-16 text-[2.5rem] font-bold"
                >
                    Your Journey Starts Now
                </h2>
            </header>

            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {labsItems.map(
                    ({ title, text, href, icon, btnText, btnIcon }) => (
                        <article
                            key={title}
                            className="rounded-3xl p-8 backdrop-blur-xl border border-white/10 bg-white/2  transition"
                        >
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col h-full outline-none"
                            >
                                <header className="flex items-center gap-3 mb-4">
                                    {icon}
                                    <h3 className="font-bold text-[1.4rem]">
                                        {title}
                                    </h3>
                                </header>

                                <p className="font-light text-white/85 mb-8 leading-relaxed">
                                    {text}
                                </p>

                                <div className="mt-auto">
                                    <div className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-black px-4 py-2 rounded-2xl text-sm font-semibold transition">
                                        {btnIcon}
                                        <span>{btnText}</span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    )
                )}
            </div>

            <div className="flex justify-center mt-12 text-white/85">
                <a href="#" className="text-sm hover:underline">
                    See more labs
                </a>
            </div>
        </section>
    );
}
