"use client";


import { LuStar } from "react-icons/lu";

interface UserLevelProps {
    xp?: number;
    level?: number;
    xpToNext?: number;
}

// Level tier config
function getLevelTier(level: number) {
    if (level >= 30) {
        return {
            label: "Master",
            color: "rgb(250, 204, 21)",
            bgColor: "rgba(250, 204, 21, 0.12)",
            luStarClass: "text-yellow-400",
            glowColor: "rgba(250, 204, 21, 0.5)",
            progressClass:
                "[&>[data-slot=progress-indicator]]:bg-gradient-to-r [&>[data-slot=progress-indicator]]:from-yellow-500 [&>[data-slot=progress-indicator]]:to-amber-300",
        };
    }
    if (level >= 20) {
        return {
            label: "Expert",
            color: "rgb(168, 85, 247)",
            bgColor: "rgba(168, 85, 247, 0.12)",
            luStarClass: "text-purple-400",
            glowColor: "rgba(168, 85, 247, 0.4)",
            progressClass:
                "[&>[data-slot=progress-indicator]]:bg-gradient-to-r [&>[data-slot=progress-indicator]]:from-purple-500 [&>[data-slot=progress-indicator]]:to-violet-400",
        };
    }
    if (level >= 10) {
        return {
            label: "Skilled",
            color: "rgb(59, 130, 246)",
            bgColor: "rgba(59, 130, 246, 0.12)",
            luStarClass: "text-blue-400",
            glowColor: "rgba(59, 130, 246, 0.35)",
            progressClass:
                "[&>[data-slot=progress-indicator]]:bg-gradient-to-r [&>[data-slot=progress-indicator]]:from-blue-500 [&>[data-slot=progress-indicator]]:to-cyan-400",
        };
    }
    if (level >= 5) {
        return {
            label: "Learner",
            color: "rgb(34, 197, 94)",
            bgColor: "rgba(34, 197, 94, 0.1)",
            luStarClass: "text-green-400",
            glowColor: "rgba(34, 197, 94, 0.25)",
            progressClass:
                "[&>[data-slot=progress-indicator]]:bg-green-500",
        };
    }
    return {
        label: "Novice",
        color: "rgba(255, 255, 255, 0.5)",
        bgColor: "rgba(255, 255, 255, 0.05)",
        luStarClass: "text-white/40",
        glowColor: "rgba(255, 255, 255, 0.08)",
        progressClass:
            "[&>[data-slot=progress-indicator]]:bg-white/40",
    };
}

export default function UserLevel({
                                      xp = 2340,
                                      level = 12,
                                      xpToNext = 3000,
                                  }: UserLevelProps) {
    const tier = getLevelTier(level);
    const xpProgress = Math.round((xp / xpToNext) * 100);
    const xpRemaining = xpToNext - xp;

    return (
        <div className="bg-white/2 w-sm border border-white/10 rounded-3xl backdrop-blur-md p-5 w-full mb-8">
            <div className="flex flex-col items-center gap-3">
                {/* LuStar icon with tier glow */}
                <div
                    className="relative flex items-center justify-center size-14 rounded-full transition-all duration-500"
                    style={{
                        background: `radial-gradient(circle, ${tier.glowColor} 0%, transparent 70%)`,
                    }}
                >
                    <LuStar
                        className={`size-7 transition-all duration-500 ${tier.luStarClass}`}
                        fill="currentColor"
                        style={{
                            filter: level >= 10
                                ? `drop-shadow(0 0 ${8 + (level / 30) * 10}px ${tier.glowColor})`
                                : "none",
                        }}
                    />
                    {level >= 20 && (
                        <LuStar
                            className={`absolute size-7 blur-sm animate-pulse ${tier.luStarClass} opacity-30`}
                            fill="currentColor"
                        />
                    )}
                </div>

                {/* Level number */}
                <div className="flex flex-col items-center gap-0.5">
          <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
            Level
          </span>
                    <span
                        className="text-3xl font-bold tabular-nums transition-colors duration-500"
                        style={{ color: tier.color }}
                    >
            {level}
          </span>
                </div>

                {/* Tier label */}
                <span
                    className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full transition-all duration-500"
                    style={{
                        backgroundColor: tier.bgColor,
                        color: tier.color,
                    }}
                >
          {tier.label}
        </span>

                {/* XP Progress */}
                <div className="w-full flex flex-col gap-1.5 mt-1">
                    <div className="flex flex-row gap-2 items-center text-[10px] mx-auto">
                        <span className="text-white/40 font-medium uppercase tracking-wide">
                          XP
                        </span>
                        <span className="text-white/40 tabular-nums font-medium ">
                          {xp.toLocaleString()}/{xpToNext.toLocaleString()}
                        </span>
                    </div>
                    <span className="text-[10px] text-white/35 text-center">
            {xpRemaining.toLocaleString()} XP to next level
          </span>
                </div>
            </div>
        </div>
    );
}
