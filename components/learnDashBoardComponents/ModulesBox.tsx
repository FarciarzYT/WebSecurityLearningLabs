import Link from "next/link";
import {FaCheckCircle,FaPlayCircle,FaCircle} from "react-icons/fa";
import {FaDoorOpen} from "react-icons/fa6";
import React from "react";

const modules = [
    { id: 1, title: "Introduction to Networks", status: "completed" as const },
    { id: 2, title: "Network Topologies", status: "completed" as const },
    { id: 3, title: "The OSI Model", status: "completed" as const },
    { id: 4, title: "TCP/IP Fundamentals", status: "current" as const },
    { id: 5, title: "Packet Analysis Basics", status: "locked" as const },
    { id: 6, title: "Wireshark Deep Dive", status: "locked" as const },
    { id: 7, title: "Traffic Pattern Recognition", status: "locked" as const },
    { id: 8, title: "Final Assessment", status: "locked" as const },
];

const completedCount = modules.filter((m) => m.status === "completed").length;
const progressPercent = Math.round((completedCount / modules.length) * 100);

function StatusIcon({ status }: { status: "completed" | "current" | "locked" }) {
    if (status === "completed") {
        return <FaCheckCircle className="size-5 shrink-0 text-emerald-400" />;
    }
    if (status === "current") {
        return <FaPlayCircle className="size-5 shrink-0 text-white" />;
    }
    return <FaCircle className="size-5 shrink-0 text-white/30" />;
}

export default function ModulesBox() {
    return (
        <section className="bg-white/2 mb-8 border border-white/10 w-3xl max-w-3xl mx-10 rounded-3xl backdrop-blur-md">
            <div className="p-6">

                <div className="flex flex-col mt-4 max-w-lg mx-auto">
                    <span className="text-sm text-white/85">current path</span>
                    <h3 className="text-2xl text-white font-semibold">
                        Intro to network analysis
                    </h3>
                    <div className={"flex flex-row"}>
                    {/* Progress bar */}
                    <div className="mt-5 flex flex-col gap-2">
                        <span className="text-xs text-white/50 ">
                            {progressPercent}% complete
                        </span>
                    </div>
                    <div className="ml-8 mt-1">
                        <Link
                            href="/learn"
                            className="bg-white items-center text-black sm:text-lg text-sm w-fit px-6 py-1 rounded-3xl font-bold hover:bg-white/85 cursor-pointer transition duration-300 hover:translate-x-0.5 hover:-translate-y-1 flex gap-2"
                        >
                            <FaDoorOpen />
                            Continue
                        </Link>
                    </div>
                    </div>
                </div>

                {/* Module list */}
                <ol className="mt-8 flex flex-col gap-1 max-w-lg mx-auto">
                    {modules.map((mod) => (
                        <li
                            key={mod.id}
                            className={`flex items-center gap-3 rounded-3xl px-4 py-3 transition ${
                                mod.status === "current"
                                    ? "bg-white/8 border border-white/15"
                                    : "hover:bg-white/4"
                            } ${mod.status === "locked" ? "opacity-50" : ""}`}
                        >
                            <StatusIcon status={mod.status} />
                            <span className="text-sm text-white/40 font-mono w-6">
                                {String(mod.id).padStart(2, "0")}
                            </span>
                            <span
                                className={`text-sm ${
                                    mod.status === "completed"
                                        ? "text-white/60 line-through"
                                        : mod.status === "current"
                                            ? "text-white font-medium"
                                            : "text-white/50"
                                }`}
                            >
                                {mod.title}
                            </span>
                            {mod.status === "current" && (
                                <span className="ml-auto text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                                    In Progress
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
