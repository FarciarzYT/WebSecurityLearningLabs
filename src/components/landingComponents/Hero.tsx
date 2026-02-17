import { LuBookOpenText } from "react-icons/lu";
import { FaGithub,FaArrowDown } from "react-icons/fa6";
import { motion, useScroll, useTransform } from 'motion/react';
import {useRef} from "react";



export default function Hero() {
    const containerRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
    const opacity = useTransform(scrollYProgress, [0.5, 0.85], [1, 0]);

    return (
        <>
            <header className="relative flex flex-col items-center justify-center w-full min-h-screen text-center gap-8 px-4">
                <div>
                    <h1 className="text-7xl font-extrabold m-0">
                        Web Security Learning Labs
                    </h1>
                    <p className="m-0 text-2xl italic leading-relaxed font-light">
                        Break things, understand why they broke, fix your mindset.
                    </p>
                </div>
                <div className="flex flex-row text-lg font-light gap-4">
                    <a href="">
                        <div className="flex items-center gap-2 font-bold bg-white hover:bg-white/85 border-2 border-solid text-black px-6 py-3 rounded-full transform hover:-translate-y-2 transition duration-300">
                            <LuBookOpenText aria-hidden className="w-6 h-6" />
                            <span>Explore</span>
                        </div>
                    </a>
                    <a href="https://github.com/FarciarzYT/WebSecurityLearningLabs" target="_blank" rel="nofollow noopener noreferrer">
                        <div className="flex items-center gap-2 font-bold border-2 border-solid px-6 py-3 rounded-full transform hover:-translate-y-2 transition duration-300">
                            <FaGithub aria-hidden className="w-6 h-6" />
                            <span>GitHub</span>
                        </div>
                    </a>
                </div>
                <motion.div className={"absolute bottom-10 hidden md:block"} style={{ opacity }}>
                    <FaArrowDown
                        aria-hidden={true}
                        size={32}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
                    />
                </motion.div>
            </header>

        </>
    )
}