export function ListBox(){
    return (
        <>
            <div className="flex flex-col text-white border border-white w-[30%]  shadow-2xl rounded-4xl p-8 mb-8 transition-transform duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer">
                <h2 className="font-bold text-[3rem]">The Process</h2>
                <ul className="list-decimal text-[1.2rem] ml-4 mt-4 space-y-2">
                    <li>Learn about vulnerability</li>
                    <li>Run locally</li>
                    <li>Break intentionally vulnerable app</li>
                    <li>Read explanation & fix</li>
                </ul>
            </div>
        </>
    )
}