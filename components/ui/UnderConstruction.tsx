import { LuConstruction } from "react-icons/lu";
import Navbar from "@/components/Base/Navbar";
import Link from "next/link";

export default function UnderConstruction() {
    return (
        <>
            <Navbar />
        <div className={"h-full w-full flex flex-col items-center justify-center gap-4 fixed"}>

            <h1 className={"text-yellow-500 items-center flex flex-row top-1/2 text-xl sm:text-7xl"}><LuConstruction /> Under Construction <LuConstruction /></h1>
            <p className={"text-lg sm:text-3xl"}>Text if you think I am lazy</p>
            <Link
                className={"text-sm lg:text-3xl"}
                href="mailto:farciarzyt@duck.com">
                Click Here to Mail
            </Link>
        </div>
        </>
    )
}