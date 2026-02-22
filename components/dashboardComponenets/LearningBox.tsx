"use client"

import { LuBookOpenText } from "react-icons/lu";
import { ImLab } from "react-icons/im";
import { FaRedhat } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";


import Image from "next/image";

const articleItems = [
    {
        title: "WebSecurityLearning",
        description: "Learn the fundamentals of web security, including common vulnerabilities and defenses.",
        btnText: "Start Learning",
        icon: <LuBookOpenText aria-hidden />,
        btnIcon:<FaGraduationCap aria-hidden/>,
    },
    {
        title: "WebSecurityLabs",
        description: "Practice hands-on labs to test and strengthen your security skills in real-world scenarios.",
        btnText: "Start Hacking",
        icon: <ImLab aria-hidden />,
        btnIcon: <FaRedhat aria-hidden />,
    }
];

export function LearningBox() {
    return (
        <>
            <section className={"grid grid-rows mx-auto mt-32 mb-10"}>
                <div className="w-full max-3xl mx-auto  gap-8 ">
                    <header
                        className={"p-8 rounded-3xl flex flex-col  gap-x-6 items-center mx-auto"}>
                        <Image
                            src="/img/minimalist-fox-hacker-logo.svg"
                            alt="Logo"
                            width="100"
                            height="100"
                        />
                        <div className={"flex flex-col"}>
                        <h2 className={"text-white font-bold leading-tight text-6xl"}>
                            UserName
                        </h2>
                            <span>@username</span>
                        </div>

                        <span className={"text-white/85 font-bold leading-tight text-3xl"}>
                            UserRank
                        </span>

                    </header>
                    <div className={"grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-3xl mx-auto"}>
                        {articleItems.map((item) => {
                            return (
                                <article key={item.title}
                                         className={"bg-white/2 border backdrop-blur-md p-8 rounded-3xl border-white/10"}>
                                    <h3 className="flex items-center font-bold text-lg lg:text-2xl  mb-6 gap-2">
                                        {item.icon}
                                        {item.title}
                                    </h3>
                                    <p className={" mb-6"}>{item.description}</p>
                                    <button
                                        className={"bg-white items-center text-black sm:text-lg text-sm  px-6 py-3 rounded-3xl font-bold hover:bg-white/85 cursor-pointer transition duration-300 hover:translate-x-0.5 hover:-translate-y-1 flex gap-2"}>
                                        {item.btnIcon}
                                        {item.btnText}
                                    </button>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
)
};