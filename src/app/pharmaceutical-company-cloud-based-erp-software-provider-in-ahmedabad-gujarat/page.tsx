import WordHighlight from "@/components/WordHighlight";
import { passion_one } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import {
    COST_EFFECTIVE,
    DASHBOARD,
    FEATURE_1,
    FEATURE_2,
    FEATURE_3,
    FEATURE_MEDICAL_SUPPLIES,
    HOSPITALS,
    MOBILE_APP,
    MULTI_BUSINESS,
    SUPPORT,
} from "../../../public/images";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ERP Applications for Healthcare IT Solutions, Healthcare software solutions in Ahmedabad, Gujarat, India",
    description:
        "Call APSTHREEAI at (+91) 635656 61125 for healthcare software solutions, Healthcare IT Solutions, Healthcare software solutions in Gujarat, Healthcare software solutions in Ahmedabad, Healthcare erp software provider in Ahmedabad",
    keywords: [
        "ERP cloud software for clinical trial management",
    ],
};

const Page = () => {
    const CAPABATILITIES = [
        {
            name: "Multi-Business",
            image: MULTI_BUSINESS,
            items: [
                "Streamlined Processes",
                "Lower Operational Costs",
                "Automation for Efficiency",
                "User-Friendly Dashboard",
                "360° Patient Safety",
                "Improved Inventory Management",
                "Patient Safety Measures",
                "Inventory Optimization",
                "Enhanced Data Security",
                "Enhanced Customer Experience",
            ],
        },
        {
            name: "Medical Suppliers",
            image: FEATURE_MEDICAL_SUPPLIES,
            items: [
                "Inventory Management",
                "MPS/MRP",
                "Sales & Purchase",
                "Warehouse Management",
                "Production Management",
                "Lot Traceability",
                "Formulation Management",
                "Regulatory Compliance",
                "Costing Analysis",
                "QC/QA",
            ],
        },
        {
            name: "Hospitals",
            image: HOSPITALS,
            items: [
                "Appointment",
                "Certificate",
                "Reports",
                "Cloud database",
                "File manager",
                "Prescription",
                "Nursing Notes",
                "OPD/IPD",
                "Billing & Accounting",
                "Bed Status",
            ],
        },
    ];

    const WHY_CHOOSE_US_CARDS = [
        {
            name: "Cost Effective",
            image: COST_EFFECTIVE,
            description:
                "Postpaid and Prepaid offers makes our software super cost efficient",
        },
        {
            name: "24*7 Customer Support",
            image: SUPPORT,
            description: "Eveready support team fro your assistance",
        },
        {
            name: "Mobile App",
            image: MOBILE_APP,
            description:
                "App for patient and doctors to manage appointments, schedules etc",
        },
        {
            name: "User Friendly Dashboard",
            image: DASHBOARD,
            description: "Dashboard with clear analytics and handy tools",
        },
    ];

    const FEATURES = [
        {
            name: "Inventory on your fingertips",
            image: FEATURE_1,
            items: [
                "Product Management",
                "Quantity Management",
                "Warehouse Management",
                "Manufacturing Management",
            ],
        },
        {
            name: "Analytics and Reporting for your business",
            image: FEATURE_2,
            items: [
                "Sales Report",
                "Purchase Report",
                "User-Friendly Dashboard",
                "Stock Report",
            ],
        },
        {
            name: "Tax and Billing System",
            image: FEATURE_3,
            items: [
                "Purchase Billing",
                "Tax Report",
                "Labelled Invoices",
                "Cloud based Invoice Database",
            ],
        },
    ];

    return (
        <div className="w-full px-4 sm:px-side min-h-screen py-8">
            <div className="">
                <h1
                    className={twMerge(
                        "text-3xl sm:text-5xl font-semibold text-center uppercase",
                        passion_one.className
                    )}
                >
                    <WordHighlight word="Smart" />
                    Healthcare Management Starts Here
                </h1>
                <p className="text-xl sm:text-2xl mt-10 text-center">
                    Experience the power of an all-in-one ERP designed to
                    optimize patient care,
                    <br /> streamline workflows, and boost efficiency.
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <a
                        href="https://myerphome.com/auth/login"
                        target="_blank"
                        className="px-4 py-2 rounded-lg shadow-lg text-white text-lg font-semibold bg-primary-red border-2 border-primary-red"
                    >
                        Visit EPR
                    </a>
                </div>
                <div className="w-full pt-14 sm:px-side space-y-4 sm:space-y-0 flex flex-col jc items-center">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className={twMerge(
                                "w-full flex flex-col items-start justify-between",
                                index % 2 != 0
                                    ? "sm:flex-row-reverse"
                                    : "sm:flex-row"
                            )}
                        >
                            <div className="h-full w-full p-8 sm:w-1/2 flex items-center justify-center sm:justify-start">
                                <Image
                                    src={feature.image}
                                    alt={feature.name}
                                    className="w-4/5 object-fill"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
                                <div className="px-4 sm:px-0 w-full flex flex-col items-start justify-start">
                                    <p className="text-2xl sm:text-4xl font-semibold mb-4">
                                        {feature.name}
                                    </p>
                                    <ul className="list-disc pl-5 text-lg sm:text-2xl space-y-3">
                                        {feature.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ERP capabilities */}
            <div className="py-16">
                <h1
                    className={twMerge(
                        "text-3xl sm:text-5xl font-semibold text-center uppercase",
                        passion_one.className
                    )}
                >
                    ERP{" "}
                    <WordHighlight
                        word="capabilities"
                        isPinkCircle
                        customStyle="after:h-[calc(100%_+_1.5em)]"
                    />
                </h1>
                <div className="w-full mt-10 sm:mt-24 flex flex-col sm:flex-row items-center gap-5">
                    {CAPABATILITIES.map((capability, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/3 p-4 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg"
                        >
                            <div className="w-full">
                                <Image
                                    src={capability.image}
                                    alt={capability.name}
                                    className="w-full h-full object-fill"
                                />
                            </div>
                            <div className="w-full">
                                <p className="mt-2 text-center text-2xl font-semibold">
                                    {capability.name}
                                </p>
                                <ul className="list-disc py-4 px-10 text-xl">
                                    {capability.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us? */}
            <div className="px-4 mb-10 sm:px-side">
                <h1
                    className={twMerge(
                        "text-3xl sm:text-5xl font-semibold text-center uppercase",
                        passion_one.className
                    )}
                >
                    <WordHighlight word="why" />
                    choose us?
                </h1>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {WHY_CHOOSE_US_CARDS.map((feature, index) => (
                        <div
                            key={index}
                            className="p-2 flex items-center rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg"
                        >
                            <div className="w-2/5 flex items-center justify-center">
                                <Image
                                    src={feature.image}
                                    alt={feature.name}
                                    className="w-4/5 h-full object-fill"
                                />
                            </div>
                            <div className="w-3/5 px-2 space-y-4">
                                <p className="text-xl sm:text-2xl font-semibold">
                                    {feature.name}
                                </p>
                                <p className="text-lg sm:text-xl">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
