import Link from "next/link"

export interface NavSection {
    heading: string
    links: NavLink[]
}

export interface NavLink {
    label: string
    href: string
}

interface SideNavbarProps {
    username?: string
    userRank?: string
    sections?: NavSection[]
}

const defaultSections: NavSection[] = [
    {
        heading: "GENERAL",
        links: [
            { label: "Dashboard", href: "#" },
            { label: "Modules", href: "#" },
            { label: "Paths", href: "#" },
        ],
    },
    {
        heading: "MANAGEMENT",
        links: [
            { label: "My Badges", href: "#" },
            { label: "Profile", href: "#" },
            { label: "Settings", href: "#" },
        ],
    },
    {
        heading: "GET HELP",
        links: [
            { label: "FAQ", href: "#" },
            { label: "GitHub", href: "#" },
        ],
    },
]

export default function SideNavbar({
                                       username = "UserName",
                                       userRank = "UserRank",
                                       sections = defaultSections,
                                   }: SideNavbarProps) {
    return (
        <nav className="2xl:flex h-full w-64 mt-16 hidden flex-col mx-16 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-md">
            {/* User Header */}
            <header className="flex flex-col items-center gap-1 border-b border-white/10 px-6 py-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl font-bold text-white">
                    {username.charAt(0).toUpperCase()}
                </div>
                <h2 className="mt-2 text-lg font-semibold text-white">{username}</h2>
                <span className="text-sm text-white/60">{userRank}</span>
            </header>

            {/* Navigation Sections */}
            <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-6">
                {sections.map(section => (
                    <div key={section.heading}>
                        <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                            {section.heading}
                        </h4>
                        <ul className="flex flex-col gap-1">
                            {section.links.map(link => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/4 hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 px-4 py-4">
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/50 transition-colors hover:bg-white/4 hover:text-white"
                >
                    Log out
                </Link>
            </div>
        </nav>
    )
}