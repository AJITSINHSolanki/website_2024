import { passion_one } from "@/utils/fonts";
import { Passion_One } from "next/font/google";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const WordHighlight: React.FC<{ word: string; customStyle?: string, isPinkCircle?: boolean }> = ({
    word,
    customStyle,
    isPinkCircle = false,
}) => {
    return (
        <span className={twMerge("highlighted-word uppercase", passion_one.className, customStyle, isPinkCircle ? "after:bg-[url('/images/pink_pen_circle.webp')]" : "after:bg-[url('/images/red_pen_circle.webp')]")}>{word}</span>
    );
};

export default WordHighlight;
