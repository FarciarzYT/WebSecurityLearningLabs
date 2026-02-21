import { TbTargetArrow } from "react-icons/tb";
import { LuBookOpen } from "react-icons/lu";
import { IoTerminalOutline } from "react-icons/io5";
import { PiUserLight } from "react-icons/pi";


const navItems = [
    { icon: <IoTerminalOutline size={24} strokeWidth={1.25} />, label: "Dashboard", href: "/" },
    { icon: <LuBookOpen size={24} strokeWidth={1.25} />, label: "Learn", href: ""},
    { icon: <TbTargetArrow size={24} strokeWidth={1.25} />, label: "Practice", href: "/" },
];

const isLoggedIn = false;


export function Navbar() {

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/2 backdrop-blur-lg shadow-2xl rounded-full">
            <div className="max-w-5xl  px-8 h-16 flex items-center justify-between">
                <ul className="flex items-center gap-4">
                    {navItems.map(({icon, label, href}) => (
                        <li key={label} className="text-white/55 hover:text-white ">
                            <a
                                className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg text-white/40hover:text-white focus-visible:text-white focus-visible:outline-none transition-colors duration-200"
                                href={href}
                            >
                                <span aria-hidden="true">{icon}</span>
                                <span className="text-[1rem] font-light tracking-widest">
                                    {label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4 ">
                    {!isLoggedIn && (
                        <button
                            className="hidden xl:flex font-bold ml-8 text-[0.8rem] tracking-[0.12em] shadow-2xl uppercase cursor-pointer text-black bg-white/85 hover:bg-white focus:bg-white px-5 py-2 rounded-full hover:transition-all duration-200 hover:-translate-y-px"
                        >
                            Sign up
                        </button>
                    )}


                    <div className="w-px h-6 bg-white/10"/>

                    <div className="w-9 h-9 text-white/50 hover:text-white rounded-full border border-white/20 bg-white/4 flex items-center justify-center cursor-pointer hover:border-white/50 hover:bg-white/10 transition-all duration-200">
                        <PiUserLight strokeWidth={1.25}></PiUserLight>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
