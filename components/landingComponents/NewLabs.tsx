"use client"
import {
    FaSyringe,
    FaBoxesStacked,
    FaBug,
    FaKey,
    FaDatabase,
    FaCode,
} from "react-icons/fa6";

import {motion} from "motion/react";


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
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
          <span className="font-mono text-[0.67rem] sm:text-sm text-primary tracking-widest uppercase">
            {"// don't wait, act"}
          </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-balance">
                           Your Hacker Career Starts Now
                        </h2>
                        <p className="mt-4 text-muted-foreground text-lg max-w-[60ch] mx-auto">
                            Each module is designed to teach you by doing. Attack, analyze,
                            defend, repeat.
                        </p>
                    </motion.div>
                </div>
            </header>

            <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch">
                {labsItems.map(
                    ({ title, text, href, icon, btnText, btnIcon }) => (
                        <article
                            key={title}
                            className="rounded-3xl w-sm p-8 backdrop-blur-xl border border-white/10 bg-white/2 transition w-32"
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
                                    <div className=" px-6 py-3 inline-flex items-center gap-2 bg-white hover:bg-white/85 w-fit text-center text-black  rounded-3xl text-sm font-semibold transition duration-300 hover:translate-x-0.5 hover:-translate-y-1">
                                        {btnIcon}
                                        <span>{btnText}</span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    )
                )}
            </div>

            <div className="flex justify-center mt-12 text-white/85 hover:text-white">
                <a href="#" className="text-sm hover:underline">
                    See more labs
                </a>
            </div>
        </section>
    );
}
