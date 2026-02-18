import { FaShield, FaGraduationCap, FaFlask,FaGift } from "react-icons/fa6";

const whyUsItems = [
    {
        title: "100% Free",
        text: "No subscriptions, no hidden fees — all materials are free to use.",
        icon: <FaGift size={28} aria-hidden="true" />,
    },
    {
        title: "Beginner to Pro",
        text: "Start simple and progress to advanced exploits at your own pace.",
        icon: <FaGraduationCap size={28} aria-hidden="true" />,
    },
    {
        title: "Realistic Labs",
        text: "Work with real-world vulnerabilities in a safe, sandboxed environment.",
        icon: <FaShield size={28} aria-hidden="true" />,
    },
    {
        title: "Hands on Learning",
        text: "Learn by doing no boring slides, only interactive labs.",
        icon: <FaFlask size={28} aria-hidden="true" />,
    },
];

export default function WhyUs() {
    return (
        <section className="mt-32 mb-32" aria-labelledby="why-us-heading">
            <h2 id="why-us-heading" className="text-center text-[2.5rem] mb-12 font-bold">
                What Makes Us Different
            </h2>

            <div className="w-[80%] mx-auto flex flex-wrap justify-center gap-8">
                {whyUsItems.map(({ title, text, icon }) => (
                    <div
                        key={title}
                        className="bg-white/2 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex flex-col items-start gap-4 w-[20%] transition"
                    >
                        <div className="text-white">{icon}</div>
                        <h3 className="font-bold text-xl">{title}</h3>
                        <p className="text-white/85 text-[1rem]">{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
