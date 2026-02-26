"use client";

import { LuFlame } from "react-icons/lu";

interface UserStreakProps {
    streak?: number;
}

export default function UserStreak({ streak = 0 }: UserStreakProps) {
    // Clamp intensity between 0 and 1 based on streak
    const intensity = Math.min(streak / 10, 1);

    // Interpolate colors based on intensity
    // Low streak: dim amber/orange, High streak: bright vivid orange-yellow
    const flameColor =
        intensity < 0.3
            ? "text-amber-800"
            : intensity < 0.6
                ? "text-orange-500"
                : "text-orange-400";

    const glowColor =
        intensity < 0.3
            ? "rgba(217, 119, 6, 0.15)"
            : intensity < 0.6
                ? "rgba(249, 115, 22, 0.35)"
                : "rgba(251, 146, 60, 0.6)";

    const outerGlow =
        intensity < 0.3
            ? "rgba(217, 119, 6, 0)"
            : intensity < 0.6
                ? "rgba(249, 115, 22, 0.12)"
                : "rgba(251, 146, 60, 0.25)";

    const streakLabel =
        streak >= 30 ? "Unstoppable" : streak >= 7 ? "On Fire" : streak >= 4 ? "Heating Up" : "Building";

    return (
        <div className=" h-fit bg-white/2 border border-white/10 rounded-3xl ml-32 mb-4 2xl:block hidden backdrop-blur-md p-5 w-64">
            <div className="flex flex-col items-center gap-3">

                <div
                    className="relative flex items-center justify-center size-16 rounded-full transition-all duration-500"
                    style={{
                        background: `radial-gradient(circle, ${glowColor} 0%, ${outerGlow} 60%, transparent 100%)`,
                    }}
                >
                    <LuFlame
                        className={`size-9 transition-all duration-500 ${flameColor}`}
                        style={{
                            filter:
                                intensity > 0.3
                                    ? `drop-shadow(0 0 ${6 + intensity * 14}px ${glowColor})`
                                    : "none",
                        }}
                        strokeWidth={intensity > 0.6 ? 2.5 : 2}
                    />

                    {intensity > 0.6 && (
                        <LuFlame
                            className="absolute size-9 text-yellow-400/30 blur-sm animate-pulse"
                            strokeWidth={2.5}
                        />
                    )}
                </div>

                {/* Streak count */}
                <div className="flex flex-col items-center gap-0.5">
          <span
              className="text-3xl font-bold tabular-nums transition-colors duration-500"
              style={{
                  color:
                      intensity < 0.3
                          ? "rgba(255,255,255,0.5)"
                          : intensity < 0.6
                              ? "rgba(255,255,255,0.75)"
                              : "rgba(255,255,255,0.95)",
              }}
          >
            {streak}
          </span>
                    <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
            day streak
          </span>
                </div>

                {/* Streak label badge */}
                <span
                    className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-3xl transition-all duration-500"
                    style={{
                        backgroundColor:
                            intensity > 0.6
                                ? "rgba(251, 146, 60, 0.15)"
                                : intensity > 0.3
                                    ? "rgba(249, 115, 22, 0.1)"
                                    : "rgba(255,255,255,0.05)",
                        color:
                            intensity > 0.6
                                ? "rgb(251, 146, 60)"
                                : intensity > 0.3
                                    ? "rgb(249, 115, 22)"
                                    : "rgba(255,255,255,0.4)",
                    }}
                >
          {streakLabel}
        </span>
            </div>
        </div>
    );
}
