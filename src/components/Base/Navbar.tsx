"use client"

import { useState, useRef, useEffect } from "react"

import { TbTargetArrow } from "react-icons/tb"
import { LuBookOpen } from "react-icons/lu"
import { IoTerminalOutline } from "react-icons/io5"
import { PiUserLight } from "react-icons/pi"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"

type SubItem = {
    label: string
    description: string
    href: string
}

type NavItem = {
    icon: React.ReactNode
    label: string
    href: string
    subItems: SubItem[]
}

const navItems: NavItem[] = [
    {
        icon: <IoTerminalOutline size={24} strokeWidth={1.25} />,
        label: "Dashboard",
        href: "/Dashboard",
        subItems: [
            { label: "Overview", description: "System status & metrics", href: "/" },
            { label: "Threat Monitor", description: "Real-time threat feeds", href: "/" },
            { label: "Activity Log", description: "Recent security events", href: "/" },
        ],
    },
    {
        icon: <LuBookOpen size={24} strokeWidth={1.25} />,
        label: "Learn",
        href: "/learn",
        subItems: [
            { label: "Courses", description: "Structured learning paths", href: "/learn" },
            { label: "Writeups", description: "CTF solutions & breakdowns", href: "/learn" },
            { label: "Resources", description: "Tools, cheatsheets & docs", href: "/learn" },
        ],
    },
    {
        icon: <TbTargetArrow size={24} strokeWidth={1.25} />,
        label: "Practice",
        href: "/practice",
        subItems: [
            { label: "Challenges", description: "Hands-on hacking labs", href: "/practice" },
            { label: "CTF Arena", description: "Compete in live CTFs", href: "/practice" },
            { label: "Sandbox", description: "Safe environment to test", href: "/practice" },
        ],
    },
]

const isLoggedIn = false

export function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileExpanded, setMobileExpanded] = useState<number | null>(null)
    const navRef = useRef<HTMLElement>(null)
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMobileOpen(false)
                setHoveredIndex(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    function handleMouseEnter(index: number) {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
        setHoveredIndex(index)
    }

    function handleMouseLeave() {
        hoverTimeout.current = setTimeout(() => {
            setHoveredIndex(null)
        }, 150)
    }

    function toggleMobileExpand(index: number) {
        setMobileExpanded(mobileExpanded === index ? null : index)
    }

    return (
        <nav ref={navRef} className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
            {/* Desktop Navbar */}
            <div className="hidden md:block relative">
                <div className="relative z-20 flex items-center justify-center bg-white/2 backdrop-blur-xl shadow-2xl rounded-full border border-white/6 px-4 h-16">
                    <ul className="flex items-center gap-1">
                        {navItems.map(({ icon, label }, index) => (
                            <li
                                key={label}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    className={`relative flex flex-col items-center gap-1 px-5 py-2 rounded-lg focus-visible:outline-none transition-colors duration-200 ${
                                        hoveredIndex === index ? "text-white" : "text-white/40 hover:text-white"
                                    }`}
                                    href={navItems[index].href}
                                >
                                    <span aria-hidden="true">{icon}</span>
                                    <span className="text-[0.8rem] font-light tracking-widest">{label}</span>
                                </a>

                                {/* Desktop Dropdown - positioned under each individual item */}
                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-5 w-72 z-30 transition-all duration-200 ease-out backdrop-blur-2xl bg-black/70 ${
                                        hoveredIndex === index
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 -translate-y-1 pointer-events-none"
                                    }`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl shadow-2xl overflow-hidden p-2">
                                        <div className="px-3 pt-2 pb-1">
                                            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/30 font-medium">
                                                {label}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            {navItems[index].subItems.map((sub) => (
                                                <a
                                                    key={sub.label}
                                                    href={sub.href}
                                                    className="flex flex-col gap-0.5 px-3 py-2.5 rounded-3xl text-white/60 hover:text-white hover:bg-white/2  transition-all duration-150 group"
                                                >

                                                    <span className="text-sm font-normal tracking-wide">{sub.label}</span>
                                                    <span className="text-[0.7rem] text-white/25 group-hover:text-white/40 transition-colors duration-150 font-light">
                            {sub.description}
                          </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 ml-6">
                        {!isLoggedIn && (
                            <a
                                href="/signup"
                                className="font-bold text-[0.75rem] tracking-[0.12em] uppercase text-black bg-white hover:bg-white/85 hover:-translate-y-1 hover:translate-x-0.5  px-5 py-2 rounded-full transition-all duration-200  shadow-lg"
                            >
                                Sign up
                            </a>
                        )}

                        <div className="w-px h-6 bg-white/10" />

                        <a
                            href="/profile"
                            className="w-9 h-9 text-white/50 hover:text-white rounded-full border border-white/20 bg-white/4 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                            aria-label="User profile"
                        >
                            <PiUserLight size={18} strokeWidth={1.25} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden">
                {/* Mobile top bar */}
                <div className="flex items-center justify-between bg-white/2 backdrop-blur-xl shadow-2xl rounded-full border border-white/6 px-4 h-14">
                    <span className="text-white/60 text-sm font-light tracking-widest">Web Security Learning Labs</span>
                    <div className="flex items-center gap-3">
                        <a
                            href="/profile"
                            className="w-8 h-8 text-white/50 hover:text-white rounded-full border border-white/20 bg-white/4 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                            aria-label="User profile"
                        >
                            <PiUserLight size={16} strokeWidth={1.25} />
                        </a>
                        <button
                            onClick={() => {
                                setMobileOpen(!mobileOpen)
                                if (mobileOpen) setMobileExpanded(null)
                            }}
                            className="w-8 h-8 text-white/50 hover:text-white rounded-full border border-white/20 bg-white/4 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <HiOutlineX size={16} /> : <HiOutlineMenuAlt3 size={16} />}
                        </button>
                    </div>
                </div>

                {/* Mobile rollout panel */}
                <div
                    className={`mt-2 bg-white/3 backdrop-blur-2xl border rounded-2xl shadow-2xl overflow-hidden transition-all duration-400 ease-out origin-top ${
                        mobileOpen
                            ? "max-h-150 opacity-100 scale-100 border-white/8 p-2"
                            : "max-h-0 opacity-0 scale-[0.97] border-transparent p-0"
                    }`}
                >
                    <div className="flex flex-col gap-0.5">
                        {navItems.map(({ icon, label, subItems }, index) => (
                            <div key={label}>
                                {/* Nav item button */}
                                <button
                                    onClick={() => toggleMobileExpand(index)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                                        mobileOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                                    } ${
                                        mobileExpanded === index
                                            ? "text-white bg-white/6"
                                            : "text-white/40 hover:text-white hover:bg-white/4"
                                    }`}
                                    style={{ transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms" }}
                                >
                                    <span aria-hidden="true">{icon}</span>
                                    <span className="text-sm font-light tracking-widest flex-1 text-left">{label}</span>
                                    <span
                                        className={`text-white/20 transition-transform duration-300 ${
                                            mobileExpanded === index ? "rotate-180" : ""
                                        }`}
                                    >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 4.5L6 7.5L9 4.5" />
                    </svg>
                  </span>
                                </button>

                                {/* Sub-items rollout */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-out ${
                                        mobileExpanded === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="pl-11 pr-3 py-1 flex flex-col gap-0.5">
                                        {subItems.map((sub, si) => (
                                            <a
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() => {
                                                    setMobileOpen(false)
                                                    setMobileExpanded(null)
                                                }}
                                                className="flex flex-col gap-0.5 px-3 py-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200"
                                                style={{
                                                    transitionDelay: mobileExpanded === index ? `${si * 40}ms` : "0ms",
                                                }}
                                            >
                                                <span className="text-[0.8rem] font-normal tracking-wide">{sub.label}</span>
                                                <span className="text-[0.65rem] text-white/20 font-light">{sub.description}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile sign up + divider */}
                    <div
                        className={`transition-all duration-300 ${
                            mobileOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                        }`}
                        style={{ transitionDelay: mobileOpen ? `${navItems.length * 50}ms` : "0ms" }}
                    >
                        <div className="h-px bg-white/6 mx-3 my-2" />
                        {!isLoggedIn && (
                            <a
                                href="/signup"
                                onClick={() => setMobileOpen(false)}
                                className="block mx-2 mb-2 font-bold text-[0.7rem] tracking-[0.12em] uppercase text-center text-black bg-white hover:bg-white/85 px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg"
                            >
                                Sign up
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
