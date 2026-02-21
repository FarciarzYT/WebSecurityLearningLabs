export function TextBox(){
    return (
        <>
            <div className="flex-col border bg-black/2 backdrop-blur-md h-64 border-white/10 text-white  w-full lg:w-[70%]  shadow-2xl rounded-4xl p-8 hidden 2xl:flex ">
                <h2 className="font-bold text-3xl lg:text-5xl">Why It Matters</h2>
                <p className="font-light text-lg mt-4">
                    Modern web applications are built fast often too fast.
                    AI assisted development and copy paste patterns make shipping easy,
                    but they also make security mistakes invisible.
                </p>
                <p className="font-light text-lg mt-4">
                    This project exists to expose those mistakes.
                    Each lab demonstrates a real world vulnerability,
                    shows how it is exploited,
                    and explains how it should be fixed.
                </p>
            </div>
        </>
    )
}