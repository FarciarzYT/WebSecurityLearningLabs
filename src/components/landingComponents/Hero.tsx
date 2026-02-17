import { LuBookOpenText } from "react-icons/lu";
import { FaGithub,FaArrowDown } from "react-icons/fa6";



export default function Hero() {
    return (
        <>
            <header className="relative flex flex-col items-center justify-center w-full min-h-screen text-center gap-8 px-4">

                <div>
                    <h1 className="text-7xl font-bold m-0">
                        Web Security Learning Labs
                    </h1>
                    <p className="m-0 text-2xl italic leading-relaxed font-light">
                        Break things, understand why they broke, fix your mindset.
                    </p>
                </div>

                <div className="flex flex-row text-lg font-light gap-4">

                    <a href="">
                        <div className="flex items-center gap-2 font-bold bg-[#eeeeee] border-2 border-solid text-black px-6 py-2 rounded-full transform hover:-translate-y-2 transition duration-300">
                            <LuBookOpenText aria-hidden className="w-6 h-6" />
                            <span>Explore</span>
                        </div>
                    </a>

                    <a href="" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center gap-2 font-bold border-2 border-solid px-6 py-2 rounded-full transform hover:-translate-y-2 transition duration-300">
                            <FaGithub aria-hidden className="w-6 h-6" />
                            <span>GitHub</span>
                        </div>
                    </a>

                </div>

                <FaArrowDown
                    aria-hidden
                    size={48}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
                />

            </header>

        </>
    )
}