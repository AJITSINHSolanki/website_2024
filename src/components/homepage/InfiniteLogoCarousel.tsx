import React from "react";
import Image from "next/image";
import {
    AndroidLogo,
    FastAPI,
    Figma,
    Framer,
    GoLang,
    IOSLogo,
    MongoDB,
    NextJS,
    NodeLogo,
    OpenAI,
    PostgreSQL,
    PythonLogo,
    ReactLogo,
    Shopify,
} from "../../../public/images";

const InfiniteLogoCarousel = () => {
    let LOGOS = [
        {
            image: ReactLogo,
            name: "React",
        },
        {
            image: NodeLogo,
            name: "Node",
        },
        {
            image: NextJS,
            name: "Express",
        },
        {
            image: FastAPI,
            name: "MongoDB",
        },
        {
            image: GoLang,
            name: "Figma",
        },
        {
            image: MongoDB,
            name: "Framer",
        },
        {
            image: PostgreSQL,
            name: "GitHub",
        },
        {
            image: PythonLogo,
            name: "Vercel",
        },
        {
            image: OpenAI,
            name: "Notion",
        },
        {
            image: Figma,
            name: "Discord",
        },
        {
            image: Framer,
            name: "Instagram",
        },
        {
            image: Shopify,
            name: "LinkedIn",
        },
        {
            image: AndroidLogo,
            name: "LinkedIn",
        },
        {
            image: IOSLogo,
            name: "LinkedIn",
        },
    ];

    return (
        <div className="w-full p-6 sm:px-20 sm:py-14 mt-5 sm:mt-0">
            <div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
                <div className="animate-infinite-scroll flex w-[calc(400px*10)]">
                    {LOGOS.map((logo, index) => (
                        <div
                            className="slide flex w-[150px] items-center justify-center"
                            key={index}
                        >
                            <Image
                                className="bg-blend-screen w-16 sm:w-24"
                                src={logo.image}
                                alt={logo.name}
                            />
                        </div>
                    ))}
                    {LOGOS.map((logo, index) => (
                        <div
                            className="slide flex w-[150px] items-center justify-center"
                            key={index}
                        >
                            <Image
                                className="bg-blend-screen w-14 sm:w-24"
                                src={logo.image}
                                alt={logo.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteLogoCarousel;
