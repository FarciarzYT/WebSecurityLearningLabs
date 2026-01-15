import {VscArrowRight} from "react-icons/vsc";

export default function Navbar() {

    return (
        <>
            <nav>
                <ul className="fixed top-0 w-full flex items-center justify-between px-16 py-4 text-lg font-light z-10 bg-black">
                    <li className="ml-auto mr-auto">
                        <ul className="flex gap-8 list-none ml-auto mr-auto">
                            <li className="hover:underline"><a href="/">Home</a></li>
                            <li className="hover:underline"><a href="/hackboxes">HackBoxes</a></li>
                            <li className="hover:underline"><a href="/about">About</a></li>
                        </ul>
                    </li>

                    <li className="hover:underline flex flex-row items-center">
                        <a href="/signup" className="px-4 py-2 ">
                            <span>Sign up</span>
                        <VscArrowRight/>
                        </a>
                    </li>

                </ul>
            </nav>
        </>
    )
}