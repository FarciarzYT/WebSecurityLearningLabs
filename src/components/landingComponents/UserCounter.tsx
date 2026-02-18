import NumberFlow from "@number-flow/react";
import { ImLab } from "react-icons/im";
import { FaUser , FaCrosshairs } from "react-icons/fa6";



const LabsItems = [
    {title: "Labs Available" , icon: <ImLab size={24} strokeWidth={1.25} aria-hidden="true"/>, value: 3},
    {title: "Users Active" , icon: <FaUser size={24} strokeWidth={1.25} aria-hidden="true"/>, value: 124},
    {title: "Exploits Completed" , icon: <FaCrosshairs size={24} strokeWidth={1.25} aria-hidden="true" />, value: 624},
]

export default function UserCounter() {
    return (
        <section aria-labelledby="stats-heading" className="mt-32 mb-32">
            <h2 id="stats-heading" className="text-center font-bold text-[2.5rem] mb-5" >
               What We Achieved
            </h2>
            <dl  className="flex gap-6 justify-center">
            {LabsItems.map(({title, icon, value}) => (
                    <div key={title} className="bg-backcard-100 rounded-lg p-8 flex items-center gap-3 ">
                        <div className="">
                            {icon}
                        </div>
                        <div>
                            <dt className="text-sm text-white/85">
                                {title}
                            </dt>
                            <dd className="font-bold text-white text-xl">
                                <NumberFlow transformTiming={{ duration: 200, easing: 'ease-out' }} value={value}/>
                            </dd>
                        </div>
                    </div>
            ))}
            </dl>
        </section>
    );
}
