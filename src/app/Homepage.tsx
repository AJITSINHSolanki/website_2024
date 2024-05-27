"use client";
import BlogSection from "@/components/homepage/BlogSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HeroCard from "@/components/homepage/HeroCard";
import WordHighlight from "@/components/WordHighlight";
import { passion_one } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { twMerge } from "tailwind-merge";
import {
    ACCOUNTS,
    ANALYTICS_AND_REPORTING_SERVICE,
    AZURE,
    CONTRACT_BASED_OUTSOURCING,
    DOCTORS,
    DOT_NET_CORE,
    DOT_NET_FRAMEWORK,
    GCP_CLOUD,
    LOGIC_APP,
    MACHINE_LEARNING,
    MEDICAL_SUPPLIES,
    OCR_PYTHON,
    PATIENTS,
    PHARMACY,
    PRODUCT_RESEARCH,
    PYTHON_FLASK,
    STAFF,
} from "../../public/images/index";

const Homepage = () => {
    const HEALTHCARE_ICONS = [
        {
            name: "Pharmacy",
            image: PHARMACY,
        },
        {
            name: "Doctors",
            image: DOCTORS,
        },
        {
            name: "Staff",
            image: STAFF,
        },
        {
            name: "Patients",
            image: PATIENTS,
        },
        {
            name: "Accounts",
            image: ACCOUNTS,
        },
        {
            name: "Medical Supplies",
            image: MEDICAL_SUPPLIES,
        },
    ];

    const TECH_STACK = [
        {
            image: AZURE,
            name: "Azure",
        },
        { image: DOT_NET_CORE, name: ".Net Core" },
        { image: DOT_NET_FRAMEWORK, name: ".Net Framework" },
        { image: GCP_CLOUD, name: "GCP - Cloud" },
        { image: LOGIC_APP, name: "Logic App" },
        {
            image: MACHINE_LEARNING,
            name: "Machine Learning",
        },
        { image: OCR_PYTHON, name: "OCR Python" },
        { image: PYTHON_FLASK, name: "Python Flask" },
    ];

    return (
        <div className="w-full min-h-screen py-8 flex flex-col items-center">
            <h1
                className={twMerge(
                    "text-3xl sm:text-5xl font-semibold text-center",
                    passion_one.className
                )}
            >
                MANAGE YOUR HEALTH DATA{" "}
                <WordHighlight word="WISELY" customStyle="font-5xl" />
            </h1>
            <div className="w-full px-2 sm:w-1/2 text-center mt-8">
                <p className="text-lg sm:text-xl">
                    Maintain digital records of patient&apos;s health
                    information including <br /> diagnoses, treatment plans,
                    medications, lab results, and imaging reports.
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <a
                        href="https://calendly.com/admin-cm7v"
                        target="_blank"
                        className="px-4 py-2 rounded-lg shadow-lg text-white text-lg font-semibold bg-primary-red border-2 border-primary-red"
                    >
                        Book a Demo
                    </a>
                    <Link
                        href="/features"
                        className="px-4 py-2 rounded-lg shadow-lg text-primary-red text-lg font-semibold bg-white border-2 border-primary-red"
                    >
                        Know Features
                    </Link>
                </div>
            </div>

            <div className="w-full mt-10 px-6 sm:px-side flex justify-center items-center">
                <HeroCard />
            </div>

            <h1
                className={twMerge(
                    "mt-28 sm:mt-36 px-2 text-3xl sm:text-5xl font-semibold text-center",
                    passion_one.className
                )}
            >
                HEALTHCARE ERP FOR{" "}
                <WordHighlight
                    word="EVERYONE"
                    isPinkCircle
                    customStyle="after:h-[calc(100%_+_1.5em)]"
                />
            </h1>
            <div className="w-full py-6 mt-10 bg-black flex items-center justify-evenly overflow-x-scroll">
                {HEALTHCARE_ICONS.map((icon, index) => (
                    <div
                        key={index}
                        className="w-24 flex-shrink-0 flex flex-col items-center gap-4"
                    >
                        <Image
                            src={icon.image}
                            alt={icon.name}
                            className="w-full sm:w-16 h-10 sm:h-16 object-contain"
                        />
                        <p className="text-sm sm:text-lg text-center font-semibold text-white">
                            {icon.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Features */}
            <div className="mt-20 px-4 sm:px-side w-full">
                <div className="text-center">
                    <h1>
                        <WordHighlight
                            word="features"
                            customStyle="text-3xl sm:text-5xl font-semibold text-center after:h-[calc(100%_+_1.5em)]"
                        />
                    </h1>
                </div>
                <FeaturesSection />
            </div>

            {/* Technologies */}
            <div
                id="technologies"
                className="sm:px-side w-full mt-20 text-center"
            >
                <WordHighlight
                    word="technologies"
                    customStyle="text-3xl sm:text-5xl font-semibold text-center after:h-[calc(100%_+_1.5em)]"
                    isPinkCircle
                />
                <div className="mt-14 flex items-center justify-center">
                    <div className="max-w-7xl w-full flex flex-wrap justify-center items-center">
                        {TECH_STACK.map((stack, index) => (
                            <div
                                key={index}
                                className="w-1/2 sm:w-1/4 p-4 flex flex-col justify-center items-center"
                            >
                                <div className="w-[100px] h-[100px] mb-5 p-2 rounded-lg shadow-xl hover:scale-110 transition-all duration-300">
                                    <Image
                                        src={stack.image}
                                        alt={stack.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <p className="text-lg font-semibold">
                                    {stack.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="px-4 sm:px-side mt-20 text-center">
                <WordHighlight
                    word="services"
                    customStyle="text-3xl sm:text-5xl font-semibold text-center after:h-[calc(100%_+_1.5em)]"
                />
                <p className="text-lg sm:text-xl mt-10">
                    At APS THREEAI you not only receive the splendid healthcare
                    ERP products but also get the{" "}
                    <br className="hidden sm:block" /> excellent services to
                    amplify your business. Our products and services are
                    categorized as:
                </p>
                <div className="mt-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-2 p-3 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg">
                        <Image
                            src={ANALYTICS_AND_REPORTING_SERVICE}
                            alt="analytics and reporting"
                            className="w-full h-full object-fill"
                        />
                        <p className="text-lg font-semibold">
                            Analytics and Reporting
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-2 p-3 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg">
                        <Image
                            src={CONTRACT_BASED_OUTSOURCING}
                            alt="contract based outsourcing"
                            className="object-fill"
                        />
                        <p className="text-lg font-semibold">
                            Product Research & Development
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3 flex flex-col items-center gap-2 p-3 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg">
                        <Image
                            src={PRODUCT_RESEARCH}
                            alt="product research"
                            className="object-fill"
                        />
                        <p className="text-lg font-semibold">
                            Contract based Outsourcing
                        </p>
                    </div>
                </div>
            </div>

            {/* Blogs */}
            <div
                id="blogs"
                className="w-full px-4 sm:px-side mt-20 text-center"
            >
                <WordHighlight
                    word="Blogs"
                    customStyle="text-3xl sm:text-5xl font-semibold text-center after:h-[calc(100%_+_1.5em)]"
                />
                <BlogSection />
            </div>

            {/* Contact US */}
            <div id="contact-us" className="px-4 sm:px-side w-full mt-20">
                <div className="text-center">
                    <WordHighlight
                        word="contact us"
                        customStyle="text-3xl sm:text-5xl font-semibold after:h-[calc(100%_+_1.5em)]"
                        isPinkCircle
                    />
                </div>
                <ContactForm />
            </div>
        </div>
    );
}

export default Homepage;