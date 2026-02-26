import NumberFlow from "@number-flow/react";
import { ImLab } from "react-icons/im";
import { FaUser, FaCrosshairs } from "react-icons/fa6";

const LabsItems = [
    { title: "Labs\nAvailable", icon: <ImLab size={28} aria-hidden="true" />, value: 3 },
    { title: "Users\nActive", icon: <FaUser size={28} aria-hidden="true" />, value: 124 },
    { title: "Exploits\nCompleted", icon: <FaCrosshairs size={28} aria-hidden="true" />, value: 624 },
];

export default function UserCounter() {
    return (
        <section aria-labelledby="stats-heading" className="mt-16 mb-16 text-center">
            <h2
                id="stats-heading"
                className="font-extrabold text-3xl mb-12 text-white"
            >
                Stats
            </h2>

            <dl className="flex items-start justify-center gap-20 flex-wrap">
                {LabsItems.map(({ title, icon, value }) => (
                    <div key={title} className="flex flex-col items-center gap-2">
                        <span className="text-white/80 mb-1">{icon}</span>
                        <dt className="text-sm text-white/60 leading-snug whitespace-pre-line">
                            {title}
                        </dt>
                        <dd className="font-bold text-white text-3xl mt-1">
                            <NumberFlow
                                transformTiming={{ duration: 600, easing: "ease-out" }}
                                value={value}
                            />
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}