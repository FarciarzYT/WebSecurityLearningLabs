export default function AnimatedBackground() {
    return (
        <>
            <svg
                className="w-full h-full animate-pulse opacity-30 fixed z-[-1]"
                viewBox="0 0 800 800"
                preserveAspectRatio="xMidYMid slice"
            >
                <circle cx="400" cy="400" r="300" fill="url(#grad)"/>
                <defs>
                    <radialGradient id="grad">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
                    </radialGradient>
                </defs>
            </svg>
        </>
    )
};
