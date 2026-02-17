export function TextBox(){
    return (
        <>
            <div className="flex flex-col border text-white w-[70%]  shadow-2xl rounded-4xl p-8 mb-8">
                <h2 className="font-bold text-[3rem]">Why It Matters</h2>
                <p className="font-light text-[1.2rem] mt-4">
                    Modern web applications are built fast often too fast.
                    AI assisted development and copy paste patterns make shipping easy,
                    but they also make security mistakes invisible.
                </p>
                <p className="font-light text-[1.2rem] mt-4">
                    This project exists to expose those mistakes.
                    Each lab demonstrates a real world vulnerability,
                    shows how it is exploited,
                    and explains how it should be fixed.
                </p>
            </div>
        </>
    )
}