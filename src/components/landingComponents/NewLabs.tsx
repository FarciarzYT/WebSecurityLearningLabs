import {FaSyringe, FaBoxesStacked, FaBug, FaKey, FaDatabase, FaCode} from "react-icons/fa6";

import * as React from "react";

const labsItems = [
    {
        title: "SQL Injection",
        text: "Exploit unsafe database queries to extract, modify or destroy data. Learn why parameterized queries exist the hard way.",
        href: "./models/SQLIdemo.html",
        icon: <FaSyringe size={24} strokeWidth={1.25} />,
        btnText: "Dump the Database",
        btnIcon: <FaDatabase size={22} aria-hidden="true" />,
    },
    {
        title: "IDOR",
        text: "Access resources that were never meant to be yours by abusing broken access control and predictable identifiers.",
        href: "./models/IDORdemo.html",
        icon: <FaBoxesStacked size={24} strokeWidth={1.25} />,
        btnText: "Access Unauthorized Data",
        btnIcon: <FaKey size={22} aria-hidden="true" />,
    },
    {
        title: "XSS",
        text: "Inject and execute malicious JavaScript in vulnerable applications. Steal sessions, deface pages, understand trust boundaries.",
        href: "./models/XSSdemo.html",
        icon: <FaBug size={24} strokeWidth={1.25} />,
        btnText: "Execute Payload",
        btnIcon: <FaCode size={22} aria-hidden="true" />,
    }
];



export default function NewLabs(){
    return (
        <>
            <section className="mb-80">
                <header>
                    <h2 className="text-center mb-8 text-[3rem] font-bold">
                        Start With Your First Exploit
                    </h2>
                </header>

                <div className="mb-8 w-[73%] flex flex-wrap gap-6 mx-auto">
                    {labsItems.map(({ title, text, href, icon,btnText, btnIcon }) => (
                        <article key={title} className="w-[30%] rounded-3xl p-6 transition backdrop-blur-md border border-white/10 bg-black/40  focus-within:ring-2 focus-within:ring-white ">
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

                                <div className="font-bold inline-flex items-center gap-2 bg-white/85 hover:bg-white transition duration-300 text-black/90 hover:text-black px-4 py-2 rounded-2xl text-sm ">
                                    {btnIcon}
                                    <span>{btnText}</span>
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