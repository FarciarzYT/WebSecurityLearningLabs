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
        <section aria-labelledby="stats-heading" className="mt-16 mb-16">
            <h2 id="stats-heading" className="text-center font-extrabold text-3xl mb-6" >
               Stats
            </h2>
            <div className="flex flex-wrap items-center justify-center w-96 mx-auto">
            <dl  className="flex flex-col gap-6 sm:flex-row ">
            {LabsItems.map(({title, icon, value}) => (
                    <div key={title} className="bg-backcard-100 rounded-lg sm:p-8 flex gap-3 ">
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
            </div>
        </section>
    );
}
