"use client";

import { motion } from "motion/react";
import { LuShield, LuBug,LuTerminal, LuLock } from "react-icons/lu";

const features = [

    {
        icon: LuBug,
        title: "Vulnerability Analysis",
        description:
            "Understand how common vulnerabilities like XSS, CSRF, and SQL injection actually work under the hood.",
    },
    {
        icon: LuTerminal,
        title: "Attack Strategy",
        description:
            "Learn how to plan, execute, and destroy systems, applying real-world security techniques.",
    },
    {
        icon: LuShield,
        title: "Defense Strategies",
        description:
            "Learn proven techniques to secure web applications against the most prevalent attack vectors.",
    },
    {
        icon: LuLock,
        title: "Security Mindset",
        description:
            "Develop the adversarial thinking needed to identify and mitigate threats before they become exploits.",
    },
];

export default function Features() {
    return (
        <section
            id="explore"
            className="relative w-full px-4 pt-32"
        >
            <div className="mx-auto max-w-6xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            {"// what you'll learn"}
          </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground text-balance">
                        Security Through Practice
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-[60ch] mx-auto">
                        Each module is designed to teach you by doing. Attack, analyze,
                        defend, repeat.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2  mx-auto gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className="group relative border-white/10 bg-white/2 backdrop-blur-md  rounded-xl border border-border bg-card p-6 sm:p-8 transition-colors"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
