import Image from "next/image";
import React from "react";
import { ABOUT_BANNER } from "../../../public/images";
import WordHighlight from "@/components/WordHighlight";
import { twMerge } from "tailwind-merge";
import { passion_one } from "@/utils/fonts";

const About = () => {
    return (
        <div className="w-full mt-10 sm:h-[90vh] px-4 sm:px-side">
            <div className="w-full h-full p-4 flex flex-col-reverse sm:flex-row gap-4 sm:gap-0 sm:items-center rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg">
                <div
                    className={twMerge(
                        "pb-8 sm:p-6 w-full sm:w-1/2 h-full text-3xl sm:text-5xl uppercase",
                        passion_one.className
                    )}
                >
                    <p>We Provide</p>
                    <p>Technology</p>
                    <div className="flex items-center">
                        <p>To help</p>&nbsp;
                        <WordHighlight
                            word="Healthcare"
                            customStyle="after:h-[calc(100%_+_1.5em)]"
                        />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 h-full">
                    <Image
                        src={ABOUT_BANNER}
                        alt="About"
                        className="w-full h-full object-fill"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
