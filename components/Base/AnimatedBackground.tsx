"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageData {
    src: string;
    alt: string;
}

interface AnimationProps {
    initialX: number;
    initialY: number;
    randomXOffset: number;
    randomYOffset: number;
    randomRotation: number;
    randomScale: number;
}

interface AnimatedItem extends AnimationProps {
    src: string;
    alt: string;
}

const BASE_IMAGES: ImageData[] = [
    { src: "/img/background/raccoon-bottom-laptop.svg", alt: "cute-raccoon" },
    { src: "/img/background/raccoon-bottom-center.svg", alt: "cute-raccoon" },
    { src: "/img/background/raccoon-bottom-left.svg", alt: "cute-raccoon" },
    { src: "/img/background/raccoon-bottom-right.svg", alt: "cute-raccoon" },
    { src: "/img/background/raccoon-middle-center.svg", alt: "cute-raccoon" },
    { src: "/img/background/raccoon-top-center.svg", alt: "cute-raccoon" },
    { src: "/img/background/raccoon-top-left.svg", alt: "cute-raccoon" },
    { src: "/img/background/raccoon-top-right.svg", alt: "cute-raccoon" }
];

function generateItems(width: number, height: number): AnimatedItem[] {
    const imagesCount = Math.ceil((width / 1920) * 15);
    const images = [...BASE_IMAGES, ...BASE_IMAGES].slice(0, imagesCount);

    const gridSize = Math.ceil(Math.sqrt(images.length));
    const cellWidth = width / gridSize;
    const cellHeight = height / gridSize;
    const padding = 40;

    const gridPositions: { x: number; y: number }[] = [];

    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            gridPositions.push({
                x: col * cellWidth,
                y: row * cellHeight
            });
        }
    }

    // Fisher–Yates shuffle
    for (let i = gridPositions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gridPositions[i], gridPositions[j]] = [
            gridPositions[j],
            gridPositions[i]
        ];
    }

    return images.map((img, index) => {
        const position = gridPositions[index];

        return {
            src: img.src,
            alt: img.alt,
            initialX:
                position.x +
                padding +
                Math.random() * (cellWidth - padding * 2),
            initialY:
                position.y +
                padding +
                Math.random() * (cellHeight - padding * 2),
            randomXOffset: Math.random() * 200 - 100,
            randomYOffset: Math.random() * 300 - 150,
            randomRotation: Math.random() * 50,
            randomScale: Math.random() * 0.8 + 0.7
        };
    });
}

function AnimatedImage({
                           src,
                           alt,
                           initialX,
                           initialY,
                           randomXOffset,
                           randomYOffset,
                           randomRotation,
                           randomScale
                       }: AnimatedItem) {
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 5000], [
        initialY,
        initialY + randomYOffset
    ]);
    const x = useTransform(scrollY, [0, 3000], [
        initialX,
        initialX + randomXOffset
    ]);
    const rotate = useTransform(scrollY, [0, 5000], [0, randomRotation]);
    const scale = useTransform(scrollY, [0, 5000], [1, randomScale]);

    return (
        <motion.img
            src={src}
            alt={alt}
            className="absolute w-32 opacity-15"
            style={{ x, y, rotate, scale }}
            initial={{ x: initialX, y: initialY }}
        />
    );
}

export function AnimatedBackground() {
    const [items, setItems] = useState<AnimatedItem[]>([]);

    useEffect(() => {
        setItems(generateItems(window.innerWidth, window.innerHeight));
    }, []);

    return (
        <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden">
            {items.map((item, index) => (
                <AnimatedImage key={index} {...item} />
            ))}
        </div>
    );
}