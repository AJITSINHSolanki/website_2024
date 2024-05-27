import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { DASHBOARD_BANNER } from "../../../public/images";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const HeroCard = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative w-full sm:w-4/5 sm:h-[600px] aspect-[1.64] rounded-2xl backdrop-filter bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-3 sm:inset-6 rounded-2xl border-4 border-black shadow-lg"
            >
                <Image
                    src={DASHBOARD_BANNER}
                    alt="Dashboard Banner"
                    priority
                    className="max-w-full max-h-full rounded-xl"
                />
            </div>
        </motion.div>
    );
};

export default HeroCard;
