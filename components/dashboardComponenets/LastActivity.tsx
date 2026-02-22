"use client";

import React from "react";
import Image from "next/image";
import { FaDoorOpen } from "react-icons/fa6";


interface RoomData {
    id: string;
    title: string;
    category: string;
    difficulty: "Easy" | "Medium" | "Hard";
    progress: number;
    startedAt: Date;
    totalTasks: number;
    completedTasks: number;
}

function getDaysAgo(date: Date): number {
    const now = new Date();
    return Math.floor(
        (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
}

function formatDaysAgo(date: Date): string {
    const days = getDaysAgo(date);
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
}

/* ================= Background SVG ================= */

function BackgroundSVG() {
    return (
        <div className="absolute inset-y-0 right-0 w-[45%] pointer-events-none">
            <Image
                src="/img/bored-fox-mascot.svg"
                alt="Background mascot"
                fill
                priority
                className="object-contain object-right opacity-10"
            />
        </div>
    );
}

/* ================= Progress Ring ================= */

const RADIUS = 44;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function CircularProgress({ progress }: { progress: number }) {
    const offset = CIRCUMFERENCE * (1 - progress / 100);

    return (
        <div className="relative shrink-0 w-28 h-28 z-10">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle
                    cx="60"
                    cy="60"
                    r={RADIUS}
                    stroke="currentColor"
                    className="text-secondary"
                    strokeWidth="8"
                    fill="none"
                />
                <circle
                    cx="60"
                    cy="60"
                    r={RADIUS}
                    stroke="currentColor"
                    className="text-primary"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 0.6s ease-in-out" }}
                />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold font-mono text-foreground">
          {progress}%
        </span>
            </div>
        </div>
    );
}

/* ================= Difficulty ================= */

function DifficultyBadge({ difficulty }: { difficulty: RoomData["difficulty"] }) {
    const colors: Record<RoomData["difficulty"], string> = {
        Easy: "bg-primary/15 text-primary border-primary/30",
        Medium:
            "bg-[oklch(0.8_0.15_85)]/15 text-[oklch(0.8_0.15_85)] border-[oklch(0.8_0.15_85)]/30",
        Hard: "bg-destructive/15 text-destructive border-destructive/30",
    };

    return (
        <span
            className={`inline-flex items-center rounded-md border px-2.5 py-1 text-sm font-mono font-medium ${colors[difficulty]}`}
        >
      {difficulty}
    </span>
    );
}

/* ================= Main ================= */

export default function LastActivity() {
    const lastRoom: RoomData = {
        id: "room-001",
        title: "Network Intrusion Analysis",
        category: "Blue Team",
        difficulty: "Medium",
        progress: 70,
        startedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        totalTasks: 10,
        completedTasks: 7,
    };

    return (
        <section className="w-full max-w-3xl mx-auto mb-10">
      <span className="block mb-6 text-sm tracking-widest uppercase text-center font-mono text-primary/90">
        {"// last activity"}
      </span>

            <div className="relative overflow-hidden rounded-3xl border bg-white/2 border-white/10 backdrop-blur-md p-8">
                {/* Background */}
                <BackgroundSVG />

                {/* Content */}
                <div className="relative z-10 flex items-start gap-8">
                    <CircularProgress progress={lastRoom.progress} />

                    <div className="flex flex-1 flex-col gap-5 min-w-0">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold text-foreground truncate">
                                {lastRoom.title}
                            </h3>

                            <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-muted-foreground">
                  {lastRoom.category}
                </span>
                                <span className="text-muted-foreground/40">|</span>
                                <DifficultyBadge difficulty={lastRoom.difficulty} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
              <span className="text-sm font-mono text-muted-foreground">
                {lastRoom.completedTasks}/{lastRoom.totalTasks} tasks completed
              </span>

                            <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                                <div
                                    className="h-full rounded-full bg-primary"
                                    style={{ width: `${lastRoom.progress}%` }}
                                />
                            </div>
                        </div>

                        <span className="text-sm font-mono text-muted-foreground">
              Started {formatDaysAgo(lastRoom.startedAt)}
            </span>
                    </div>
                </div>

                <button
                    type="button"
                    className="relative z-10 mt-8 text-md inline-flex items-center  font-bold gap-2 rounded-3xl border border-white/10 bg-white px-6 py-3  text-black transition hover:bg-white/85 hover:translate-x-0.5 hover:-translate-y-1 duration-300"
                >
                    <FaDoorOpen />
                    Continue Room
                </button>
            </div>
        </section>
    );
}