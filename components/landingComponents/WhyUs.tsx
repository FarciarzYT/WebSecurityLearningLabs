"use client"
import { FaShield, FaGraduationCap, FaFlask,FaGift } from "react-icons/fa6";
import {motion} from "motion/react";

const whyUsItems = [
    {
        title: "100% Free",
        text: "No subscriptions, no hidden fees all materials are free to use.",
        icon: <FaGift size={28} aria-hidden="true" />,
    },
    {
        title: "Beginner to Pro",
        text: "Start simple and progress to advanced exploits at your own pace.",
        icon: <FaGraduationCap size={28} aria-hidden="true" />,
    },
    {
        title: "Realistic Labs",
        text: "Work with real-world vulnerabilities in a safe, sandboxed environment.",
        icon: <FaShield size={28} aria-hidden="true" />,
    },
    {
        title: "Hands on Learning",
        text: "Learn by doing no boring slides, only interactive labs.",
        icon: <FaFlask size={28} aria-hidden="true" />,
    },
];

export default function WhyUs() {
    return (
        <section className="mt-32 mb-32" aria-labelledby="why-us-heading">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-balance">
                        What You Get
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-[60ch] mx-auto">
                        We turn theory into practice.
                    </p>
                </motion.div>
            </div>
            <div className="w-[80%] mx-auto flex flex-wrap flex-col lg:flex-row justify-center gap-8">
                {whyUsItems.map(({ title, text, icon }) => (
                    <div
                        key={title}
                        className="bg-white/2 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex flex-col items-start gap-4 w-full lg:w-[20%] transition"
                    >
                        <div className="text-white">{icon}</div>
                        <h3 className="font-bold text-xl">{title}</h3>
                        <p className="text-white/85 text-[1rem]">{text}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}
