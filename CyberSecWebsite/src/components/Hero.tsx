import {FaGithub} from "react-icons/fa";
import {VscBook,VscArrowDown} from "react-icons/vsc";

export default function Hero() {
    return (
        <>
            <header className="flex flex-col items-center w-full h-screen text-center gap-8 mt-64">
                <div className="">
                    <h1 className="text-7xl font-extrabold m-0">Web Security Learning Labs</h1>
                    <p className="m-0 text-2xl italic leading-16 font-light">Break things, understand why they broke, fix your mindset.</p>
                </div>
                <div className="flex flex-row text-lg font-bold gap-4">
                    <a href="">
                        <div className="bg-[#eeeeee] border-2 border-solid text-black transform hover:-translate-y-2 transition ease-in-out duration-300 px-6 py-4 rounded-4xl gap-2 flex flex-row content-center">
                            <VscBook className="w-6 h-7"/>
                            <span>
                                Explore
                            </span>
                        </div>
                    </a>

                    <a href="" target="_blank" rel="nofollow noopener noreferrer">
                    <div className=" gap-2 border-2 border-solid transform hover:-translate-y-2 transition ease-in-out duration-300 px-6 py-4 rounded-4xl flex flex-row content-center ">
                        <FaGithub className="w-6 h-7"/>
                        <span>
                            GitHub
                        </span>
                    </div>
                    </a>
                </div>
                <div>
                      <VscArrowDown className="bottom-1"/>
                </div>
            </header>
        </>
    )
}