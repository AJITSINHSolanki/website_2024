import WordHighlight from "@/components/WordHighlight";
import { passion_one, pt_sans } from "@/utils/fonts";
import { Metadata } from "next";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
    title: "Medical store ERP Software, Hospital, Pharmaceutical ERP Software Provider in Ahmedabad",
    description:
        "Call APSTHREEAI at (+91) 635656 61125 for IT consultancy to specific healthcare software, Enterprise Resource Planning Software Solutions. Find Best trusted  ERP cloud software for medical store, Pharmaceutical erp software provider in Ahmedabad, Hospital erp software provider in ahmedabad, Medical store ERP software provider in ahmedabad.",
    keywords: [
        "IT consultancy to specific healthcare software",
        "Enterprise Resource Planning Software Solutions",
        "ERP cloud software for medical store",
        "Pharmaceutical erp software provider in Ahmedabad",
        "Hospital erp software provider in Ahmedabad",
        "Medical store ERP software provider in Ahmedabad",
    ],
};

const Pricing: React.FC = () => {
    const PRICING_PLANS = [
        {
            feature: "Inventory Count",
            freeTier: "100",
            economicalCustom: "500",
            smallBusiness: "50000",
            enterprice: "200000",
        },
        {
            feature: "Maximum Invoice / Bill Count",
            freeTier: "100",
            economicalCustom: "500",
            smallBusiness: "50000",
            enterprice: "200000",
        },
        {
            feature: "SMS, Email, WhatsApp Count",
            freeTier: "100",
            economicalCustom: "500",
            smallBusiness: "50000",
            enterprice: "200000",
        },
        {
            feature: "Inventory Management",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Customizable Template",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Historical Analytics",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Bill Template and Recent Product List",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Cloud Web and Mobile App (Android and iOS)",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Advanced Permissions",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Payment Reports and Payment Status",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Analytics",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Unlimited Storage for Product Images",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "Re-Order and Demand Prediction",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        {
            feature: "99.9% Uptime SLA",
            freeTier: true,
            economicalCustom: true,
            smallBusiness: true,
            enterprice: true,
        },
        // {
        //     feature: "Premium Support (Standard Hours)",
        //     freeTier: false,
        //     smallBusiness: false,
        //     enterprice: true,
        // },
        // {
        //     feature: "Core EMR/EHR Functionality",
        //     freeTier: false,
        //     smallBusiness: false,
        //     enterprice: true,
        // },
        // {
        //     feature: "Patient Scheduling & Billing",
        //     freeTier: false,
        //     smallBusiness: false,
        //     enterprice: true,
        // },
    ];

    return (
        <div className="min-h-screen py-14 px-4 sm:px-side">
            <h1
                className={twMerge(
                    "text-3xl sm:text-5xl font-semibold text-center uppercase",
                    passion_one.className
                )}
            >
                Best Available
                <WordHighlight word="Plans" />
                For Your Teams
            </h1>
            <p className="text-xl sm:text-2xl mt-10 text-center">
                Enjoy a free trial of Small business or Enterprise on us! If you
                don’t upgrade <br /> after your trial, your team will go back to
                Free.
            </p>

            <div
                className={twMerge(
                    "mt-14 overflow-x-auto border-2 border-black rounded-2xl",
                    pt_sans.className
                )}
            >
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th
                                className={twMerge(
                                    "px-4 py-2 border-r border-black text-2xl",
                                    passion_one.className
                                )}
                            >
                                Features
                            </th>
                            <th className="px-4 py-2 border-r border-black">
                                Free Trial (1 Month)
                                <br />
                                <span
                                    className={twMerge(
                                        "text-xl",
                                        passion_one.className
                                    )}
                                >
                                    Rs 0/month
                                </span>
                            </th>
                            <th className="px-4 py-2 border-r border-black">
                                Economical Custom Plan
                                <br />
                                <span
                                    className={twMerge(
                                        "text-xl",
                                        passion_one.className
                                    )}
                                >
                                    Rs 1000/5 years
                                </span>
                            </th>
                            <th className="px-4 py-2 border-r border-black">
                                Small Business
                                <br />
                                <span
                                    className={twMerge(
                                        "text-xl",
                                        passion_one.className
                                    )}
                                >
                                    Rs 9439/year
                                </span>
                            </th>
                            <th className="px-4 py-2">
                                Enterprise
                                <br />
                                <span
                                    className={twMerge(
                                        "text-xl",
                                        passion_one.className
                                    )}
                                >
                                    Rs 17699/year
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {PRICING_PLANS.map((row, index) => (
                            <tr
                                key={index}
                                className="border-t border-black bg-transparent font-semibold"
                            >
                                <td className="px-4 py-2 border-r border-black">
                                    {row.feature}
                                </td>
                                <td className="px-4 py-2 border-r border-black text-xl">
                                    <div className="flex items-center justify-center">
                                        {typeof row.freeTier === "string" ? (
                                            row.freeTier
                                        ) : row.freeTier ? (
                                            <IoMdCheckmarkCircleOutline />
                                        ) : (
                                            "-"
                                        )}
                                    </div>
                                </td>
                                <td className="px-4 py-2 border-r border-black text-xl">
                                    <div className="flex items-center justify-center">
                                        {typeof row.economicalCustom === "string" ? (
                                            row.economicalCustom
                                        ) : row.economicalCustom ? (
                                            <IoMdCheckmarkCircleOutline />
                                        ) : (
                                            "-"
                                        )}
                                    </div>
                                </td>
                                <td className="px-4 py-2 border-r border-black text-xl">
                                    <div className="flex items-center justify-center">
                                        {typeof row.smallBusiness ===
                                        "string" ? (
                                            row.smallBusiness
                                        ) : row.smallBusiness ? (
                                            <IoMdCheckmarkCircleOutline />
                                        ) : (
                                            "-"
                                        )}
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-xl">
                                    <div className="flex items-center justify-center">
                                        {typeof row.enterprice === "string" ? (
                                            row.enterprice
                                        ) : row.enterprice ? (
                                            <IoMdCheckmarkCircleOutline />
                                        ) : (
                                            "-"
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pricing;
