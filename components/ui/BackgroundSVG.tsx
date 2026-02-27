import Image from "next/image";

type BackgroundSVGProps = {
    srcImg: string;
};

export default function BackgroundSVG({ srcImg }: BackgroundSVGProps) {
    return (
        <div className="absolute inset-y-0 right-0 w-[45%] pointer-events-none">
            <Image
                src={srcImg}
                alt="Background mascot"
                fill
                priority
                className="object-contain object-right opacity-10"
            />
        </div>
    );
}