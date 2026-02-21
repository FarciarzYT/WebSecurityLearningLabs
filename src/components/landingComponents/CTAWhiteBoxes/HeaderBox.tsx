export function HeaderBox(){
    return (
        <>
            <div className="flex-col w-[80%] border bg-black/2 border-white/10 text-white backdrop-blur-md shadow-2xl rounded-4xl mx-auto p-8 mb-8 hidden 2xl:flex">
                <h2 className="font-bold text-3xl lg:text-5xl ">Breaking to Learn</h2>
                <p className="font-light text-lg mt-4">
                    Web security is complex, and mistakes are easy to make.
                    This project focuses on the most common web vulnerabilities,
                    especially those caused by “vibe coding”.
                </p>
            </div>
        </>
    )
}