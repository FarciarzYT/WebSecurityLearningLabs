import { FaSyringe, FaBoxesStacked, FaBug,FaHatWizard } from "react-icons/fa6";
import * as React from "react";

const labsItems = [
    {
        title: "SQL Injection",
        text: "Exploit unsafe database queries to extract, modify or destroy data. Learn why parameterized queries exist the hard way.",
        href: "./models/SQLIdemo.html",
        icon: <FaSyringe size={24} strokeWidth={1.25} />,
    },
    {
        title: "IDOR",
        text: "Access resources that were never meant to be yours by abusing broken access control and predictable identifiers.",
        href: "./models/IDORdemo.html",
        icon: <FaBoxesStacked size={24} strokeWidth={1.25} />,
    },
    {
        title: "XSS",
        text: "Inject and execute malicious JavaScript in vulnerable applications. Steal sessions, deface pages, understand trust boundaries.",
        href: "./models/XSSdemo.html",
        icon: <FaBug size={24} strokeWidth={1.25} />,
    },
];



export default function NewLabs(){
    return (
        <>
            <section className="mb-80">
                <header>
                    <h2 className="text-center mb-8 text-[3rem]">
                        Beginner Vulnerability Labs
                    </h2>
                </header>

                <div className="mb-8 w-[73%] flex flex-wrap gap-6 mx-auto">
                    {labsItems.map(({ title, text, href, icon }) => (
                        <article key={title} className="w-[30%] rounded-3xl p-6 transition focus-within:ring-2 focus-within:ring-white border-white border">
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full outline-none"
                            >
                                <header className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                        {React.cloneElement(icon, { "aria-hidden": true })}
                                    </div>

                                    <h3 className="font-bold text-[1.2rem] leading-tight">
                                        {title}
                                    </h3>
                                </header>

                                <p className="font-light text-[1.05rem] text-white/85 mb-6">
                                    {text}
                                </p>

                                <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-2xl text-sm font-medium">
                                    <FaHatWizard size={18} aria-hidden="true" />
                                    <span>Learn</span>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center text-white/85">
                    <a href="" className="text-sm hover:underline">
                        See more labs
                    </a>
                </div>
            </section>

        </>
    )
}