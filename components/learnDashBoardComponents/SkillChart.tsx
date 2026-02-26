"use client"

import type { ChartOptions, RadialLinearScaleOptions } from 'chart.js';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js"
import { Radar } from "react-chartjs-2"
import {FaArrowRight, FaBookSkull} from "react-icons/fa6";
import Link from "next/link";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

const STATS = [
    { label: "Mindset", value: 34 },
    { label: "Defense", value: 67 },
    { label: "Offense", value: 47 },
]

export default function RadarChart() {
    const data = {
        labels: STATS.map((s) => s.label),
        datasets: [
            {
                label: "User Stats",
                data: STATS.map((s) => s.value),
                fill: true,
                backgroundColor: "rgba(99, 179, 237, 0.15)",
                borderColor: "rgba(99, 179, 237, 0.9)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(99, 179, 237, 1)",
                pointBorderColor: "rgba(255,255,255,0.8)",
                pointBorderWidth: 1.5,
                pointRadius: 4,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(99, 179, 237, 1)",
            },
        ],
    }

    const options: ChartOptions<"radar"> = {
        responsive: true,
        maintainAspectRatio: true,
        layout: { padding: 16 },
        scales: {
            r: {
                min: 0,
                max: 100,
                ticks: { display: false },
                pointLabels: {
                    color: "rgba(255,255,255,0.8)",
                    font: { size: 13, weight: "bold" },
                    padding: 8,
                },
                grid: {
                    color: "rgba(255,255,255,0.08)",
                },
                angleLines: {
                    color: "rgba(255,255,255,0.12)",
                    lineWidth: 1,
                },
            } as RadialLinearScaleOptions,
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
    }

    return (
        <div className="bg-white/2 w-full max-w-xl mx-auto 2xl:mx-0 backdrop-blur-md rounded-3xl p-6 border border-white/10 mb-8 2xl:mb-0">
            <header className="mb-4">
                <h2 className="text-white text-2xl font-bold tracking-tight">Skill Breakdown</h2>
                <p className="text-white/50 text-sm mt-1">Your current performance across categories</p>
            </header>

            <div className="relative w-full flex justify-center max-h-72 mx-auto">
                <Radar data={data} options={options} />
            </div>

            {/* Stat pills */}
            <div className="flex justify-around mt-5 gap-2">
                {STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center gap-1">
                        <span className="text-white font-bold text-lg leading-none">{stat.value}</span>
                        <span className="text-white/45 text-xs tracking-wide uppercase">{stat.label}</span>
                    </div>
                ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <p className="text-white/60 text-sm font-medium">Boost your skills now!</p>
                <Link
                    href="/modules"
                    className="flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-1.5 rounded-full transition-all duration-150 group/cta"
                >
                    <FaBookSkull className="text-xs" />
                    <span>Get Started</span>
                    <FaArrowRight className="text-xs opacity-0 -translate-x-1 group-hover/cta:opacity-100 group-hover/cta:translate-x-0 transition-all duration-150" />
                </Link>
            </div>
        </div>
    )
}