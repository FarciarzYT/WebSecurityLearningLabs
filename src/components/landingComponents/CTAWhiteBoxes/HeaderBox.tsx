export function HeaderBox(){
    return (
        <>
            <div className="flex flex-col border bg-black/2 border-white/10 text-white backdrop-blur-md w-[80%] shadow-2xl rounded-4xl mx-auto p-8 mb-8">
                <h2 className="font-bold text-[3rem] ">Breaking to Learn</h2>
                <p className="font-light text-[1.2rem] mt-4">
                    Web security is complex, and mistakes are easy to make.
                    This project focuses on the most common web vulnerabilities,
                    especially those caused by “vibe coding”.
                </p>
            </div>
        </>
    )
}