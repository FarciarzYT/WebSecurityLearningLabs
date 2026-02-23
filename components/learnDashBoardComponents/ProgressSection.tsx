import ProgressRing from "@/components/ui/progress-ring"

interface ProgressCategory {
    label: string
    percentage: number
    color: string
}

interface ProgressHeaderProps {
    categories?: ProgressCategory[]
}

const defaultCategories: ProgressCategory[] = [
    { label: "ATTACK", percentage: 10, color: "#ff8080" },
    { label: "DEFEND", percentage: 30, color: "#80aaff" },
    { label: "MINDSET", percentage: 20, color: "#80ff80" },
]

export default function ProgressSection({categories = defaultCategories,}: ProgressHeaderProps) {
    return (
        <section className="bg-white/2 border border-white/10 w-3xl h-fit mx-8 mb-16 rounded-3xl backdrop-blur-md">
            <div className="flex items-center justify-center gap-16 px-8 py-8">
                {categories.map((cat) => (
                    <ProgressRing
                        key={cat.label}
                        percentage={cat.percentage}
                        color={cat.color}
                        label={cat.label}
                    />
                ))}
            </div>
        </section>
    )
}