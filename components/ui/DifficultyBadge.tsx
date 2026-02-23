import React from "react";
import RoomData from "@/types/RoomData";

export default function DifficultyBadge({ difficulty }: { difficulty: RoomData["difficulty"] }) {
    const colors: Record<RoomData["difficulty"], string> = {
        Easy: "bg-[#80ff80]/15 text-[#80ff80] border-[#80ff80]/30",
        Medium: "bg-[#ffb380]/15 text-[#ffb380] border-[#ffb380]/30",
        Hard: "bg-[#ff8080]/15 text-[#ff8080] border-[#ff8080]/30",
    };

    return (
        <span
            className={`inline-flex items-center rounded-3xl border px-3 py-1 text-sm font-mono font-bold ${colors[difficulty]}`}
        >
      {difficulty}
    </span>
    );
}