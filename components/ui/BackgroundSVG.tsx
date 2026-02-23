import Image from "next/image";

export default function BackgroundSVG()  {
    return (
        <div className="absolute inset-y-0 right-0 w-[45%] pointer-events-none">
            <Image
                src="/img/bored-fox-mascot.svg"
                alt="Background mascot"
                fill
                priority
                className="object-contain object-right opacity-10"
            />
        </div>
    );
}