"use client";

import React from "react";
import { FaDoorOpen } from "react-icons/fa6";
import BackgroundSVG from "@/components/ui/BackgroundSVG";
import Link from "next/link";
import RoomData from "@/types/RoomData";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import ProgressRing from "@/components/ui/progress-ring";


interface LastActivityProps {
    room: RoomData;
}


export default function LastActivity({ room }: LastActivityProps) {
    const {
        id,
        title,
        difficulty,
        progress,
        totalTasks,
        completedTasks,
    } = room;

    return (
        <section className="w-full max-w-3xl mx-auto mb-10">
      <span className="block mb-6 text-sm tracking-widest uppercase text-center font-mono text-primary/90">
        {"// last activity"}
      </span>

            <div className="relative overflow-hidden rounded-3xl border bg-white/2 border-white/10 backdrop-blur-md p-8">
                <BackgroundSVG />

                <div className="relative z-10 flex items-start gap-8">
                    <ProgressRing color="white" label={id} percentage={progress} />

                    <div className="flex flex-1 flex-col gap-5 min-w-0">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold text-foreground truncate">
                                {title}
                            </h3>

                            <div className="flex items-center gap-3">
                                <DifficultyBadge difficulty={difficulty} />
                            </div>

                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-mono text-muted-foreground">
                                {completedTasks}/{totalTasks} tasks completed
                            </span>

                            <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                                <div
                                    className="h-full rounded-full bg-primary"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Link
                    href={`/learn/${id}`}
                    className="bg-white mt-6 items-center text-black sm:text-lg text-sm w-fit px-5 py-2.5 rounded-3xl font-bold hover:bg-white/85 cursor-pointer transition duration-300 hover:translate-x-0.5 hover:-translate-y-1 flex gap-2"
                >
                    <FaDoorOpen />
                    Continue Module
                </Link>
            </div>
        </section>
    );
}