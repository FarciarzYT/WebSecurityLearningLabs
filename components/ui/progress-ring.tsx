"use client"

interface ProgressRingProps {
    percentage: number
    color: string
    label: string
    size?: number
    strokeWidth?: number
}

export default function ProgressRing({
                                         percentage,
                                         color,
                                         label,
                                         size = 120,
                                         strokeWidth = 6,
                                     }: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percentage / 100) * circumference

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative" style={{ width: size, height: size }}>
                <svg
                    width={size}
                    height={size}
                    className="-rotate-90"
                    aria-label={`${label}: ${percentage}%`}
                    role="img"
                >
                    {/* Background track */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth={strokeWidth}
                    />
                    {/* Progress arc */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{
                            transition: "stroke-dashoffset 1s ease-in-out",
                            filter: `drop-shadow(0 0 6px ${color}80)`,
                        }}
                    />
                </svg>

                {/* Percentage text */}
                <div className="absolute inset-0 flex items-center justify-center">
          <span
              className="text-base font-bold  tracking-tight"
              style={{ color }}
          >
            {percentage}%
          </span>
                </div>
            </div>

            <span
                className="text-sm font-bold tracking-wide"
                style={{ color }}
            >
                {label}
            </span>
        </div>
    )
}
