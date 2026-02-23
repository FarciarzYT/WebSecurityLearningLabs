"use client";

import React, { useState } from "react";
import Link from "next/link";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import RoomData from "@/types/RoomData";

const Modules: { title: string; difficulty: RoomData["difficulty"]; description: string; href: string }[] = [
    {
        title: "IDOR - User Profile Access",
        difficulty: "Medium",
        description: "Exploit insecure direct object references to access other users' profiles",
        href: "/labs/idor-user-profiles",
    },
    {
        title: "SQL Injection - Login Bypass",
        difficulty: "Easy",
        description: "Bypass authentication using basic SQL injection techniques",
        href: "/labs/sql-injection-login",
    },
    {
        title: "XSS - Reflected Payload",
        difficulty: "Medium",
        description: "Create and execute reflected cross-site scripting attacks",
        href: "/labs/xss-reflected",
    },
    {
        title: "CSRF - Password Change",
        difficulty: "Hard",
        description: "Force users to change passwords using cross-site request forgery",
        href: "/labs/csrf-password-change",
    },
    {
        title: "Directory Traversal",
        difficulty: "Medium",
        description: "Access restricted files using path traversal vulnerabilities",
        href: "/labs/directory-traversal",
    },
];

export default function ModulesBox() {
    const [search, setSearch] = useState("");
    const [difficulty, setDifficulty] = useState<"All" | RoomData["difficulty"]>("All");

    const filtered = Modules.filter((m) => {
        const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase());
        const matchesDifficulty = difficulty === "All" || m.difficulty === difficulty;
        return matchesSearch && matchesDifficulty;
    });

    return (
        <section className="mb-8w-[16rem] sm:w-2xl lg:w-5xl max-w-5xl lg:ml-8 lg:mr-12 rounded-3xl">
            <div className="p-6">
                <header className="bg-white/2 border border-white/10 p-6 rounded-3xl backdrop-blur-md mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    {/* Search */}
                    <div className="relative flex-1 max-w-sm">
                        <svg
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search modules..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/25 transition-colors"
                        />
                    </div>

                    {/* Difficulty Filter */}
                    <div className="flex items-center gap-2">
                        {(["All", "Easy", "Medium", "Hard"] as const).map((level) => (
                            <button
                                key={level}
                                onClick={() => setDifficulty(level)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-colors ${
                                    difficulty === level
                                        ? level === "All"
                                            ? "bg-white/15 border-white/30 text-white"
                                            : level === "Easy"
                                                ? "bg-[#80ff80]/15 border-[#80ff80]/30 text-[#80ff80]"
                                                : level === "Medium"
                                                    ? "bg-[#ffb380]/15 border-[#ffb380]/30 text-[#ffb380]"
                                                    : "bg-[#ff8080]/15 border-[#ff8080]/30 text-[#ff8080]"
                                        : "bg-transparent border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                                }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    {filtered.length === 0 ? (
                        <p className="col-span-full text-center text-sm text-white/85 py-8">
                            No modules found.
                        </p>
                    ) : (
                        filtered.map((module) => (
                            <Link
                                key={module.href}
                                href={module.href}
                                className="flex flex-col p-6 rounded-3xl border backdrop-blur-md border-white/10 hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <h3 className="font-semibold text-sm leading-snug">{module.title}</h3>
                                    <DifficultyBadge difficulty={module.difficulty} />
                                </div>
                                <p className="text-sm text-white/50 flex-1">{module.description}</p>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}