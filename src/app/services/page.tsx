import WordHighlight from "@/components/WordHighlight";
import { passion_one } from "@/utils/fonts";
import React from "react";
import { twMerge } from "tailwind-merge";
import {
    ANALYTICS_AND_REPORTING_SERVICE,
    CONTRACT_BASED_OUTSOURCING,
    PRODUCT_RESEARCH,
} from "../../../public/images";
import Image from "next/image";

const Home: React.FC = () => {
    const SERVICES = [
        {
            image: ANALYTICS_AND_REPORTING_SERVICE,
            title: "Analytics and Reporting",
            description:
                "Harness the power of your data! Our analytics and reporting services transform raw information into actionable insights, empowering you to make smarter decisions, improve performance, and achieve success. Don't let valuable data sit unused - unlock its potential and gain a clear competitive edge.",
        },
        {
            image: PRODUCT_RESEARCH,
            title: "Product Research & Development",
            description:
                "Fuel innovation and stay ahead of the curve with our Product Research & Development services. We combine deep market analysis with user experience expertise to identify opportunities for groundbreaking products and features. Collaborate with our team to refine your vision, validate concepts, and bring your next game-changing product to life.",
        },
        {
            image: CONTRACT_BASED_OUTSOURCING,
            title: "Contract based Outsourcing",
            description:
                "Streamline your operations and access a global talent pool with our Contract-based IT Outsourcing. We provide flexible, cost-effective solutions with experienced professionals tailored to your specific needs. Focus on your core business while we handle your IT projects, ensuring on-time delivery and expertise you can trust.",
        },
    ];

    return (
        <div className="w-full px-4 sm:px-side min-h-screen py-8">
            <h1
                className={twMerge(
                    "text-3xl sm:text-5xl font-semibold text-center uppercase",
                    passion_one.className
                )}
            >
                <WordHighlight
                    word="innovation"
                    customStyle="after:h-[calc(100%_+_1.5em)]"
                />
                meets expertise <br /> in our range of services
            </h1>
            <p className="text-xl sm:text-2xl mt-10 text-center">
                Experience the power of optimized technology and increased
                productivity with
                <br /> the help of My Algosoft and its services.
            </p>
            <div className="w-full py-14 sm:py-24 flex flex-col items-center gap-16">
                {SERVICES.map((service, index) => (
                    <div
                        key={index}
                        className={twMerge(
                            "p-3 w-full flex flex-col sm:flex-row items-start rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg",
                            index % 2 === 0 && "sm:flex-row-reverse"
                        )}
                    >
                        <div className="w-full sm:w-2/5">
                            <Image
                                src={service.image}
                                alt="analytics and reporting"
                                className="w-full h-full object-fill"
                            />
                        </div>
                        <div className="w-full sm:w-3/5 px-4 sm:px-8 py-4">
                            <p className="text-center text-2xl sm:text-3xl font-semibold">
                                {service.title}
                            </p>
                            <p className="sm:mt-8 mt-2 text-lg sm:text-xl">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
