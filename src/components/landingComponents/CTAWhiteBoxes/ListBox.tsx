export function ListBox(){
    return (
        <>
            <div className="2xl:flex flex-col text-white lg:border mx-auto h- lg:bg-white/2 h-64 border-white/10 2xl:backdrop-blur-md w-full hidden  2xl:w-[30%] shadow-2xl rounded-4xl p-8 mb-8 transition-transform duration-300 ">
                <h2 className="font-bold text-3xl lg:text-5xl">The Process</h2>
                <ul className="list-decimal text-[1rem] sm:text-lg  ml-4 mt-4 space-y-2">
                    <li>Learn about vulnerability</li>
                    <li>Run locally</li>
                    <li>Break intentionally vulnerable app</li>
                    <li>Read explanation & fix</li>
                </ul>
            </div>
        </>
    )
}