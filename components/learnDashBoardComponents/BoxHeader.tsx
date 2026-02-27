"use client"

import { FaMagnifyingGlass } from "react-icons/fa6"
import RoomType from "@/types/RoomType"

type Props = {
    search: string
    setSearch: (v: string) => void
    difficulty: "All" | RoomType["difficulty"]
    setDifficulty: (v: "All" | RoomType["difficulty"]) => void
    placeholder?: string
}

export default function FilterHeader({
                                         search,
                                         setSearch,
                                         difficulty,
                                         setDifficulty,
                                         placeholder = "Search...",
                                     }: Props) {
    return (
        <div className="bg-white/2 w-full border border-white/10 p-4 rounded-3xl backdrop-blur-md mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
                <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25 w-4 h-4" />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                />
            </div>

            {/* Difficulty */}
            <div className="flex flex-wrap items-center gap-1.5">
                {(["All", "Easy", "Medium", "Hard"] as const).map(level => (
                    <button
                        key={level}
                        onClick={() => setDifficulty(level)}
                        className={`px-2 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all duration-150 ${
                            difficulty === level
                                ? level === "All"
                                    ? "bg-white/15 border-white/25 text-white"
                                    : level === "Easy"
                                        ? "bg-[#80ff80]/10 border-[#80ff80]/30 text-[#80ff80]"
                                        : level === "Medium"
                                            ? "bg-[#ffb380]/10 border-[#ffb380]/30 text-[#ffb380]"
                                            : "bg-[#ff8080]/10 border-[#ff8080]/30 text-[#ff8080]"
                                : "bg-transparent border-white/8 text-white/35 hover:border-white/20 hover:text-white/55"
                        }`}
                    >
                        {level}
                    </button>
                ))}
            </div>
        </div>
    )
}