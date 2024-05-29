import WordHighlight from "@/components/WordHighlight";
import { passion_one, pt_sans } from "@/utils/fonts";
import { Metadata } from "next";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
    title: "Medical store ERP Software, Hospital, Pharmaceutical ERP Software Provider in Ahmedabad",
    description:
        "Call My Algosoft at (+91) 74340 00130 for IT consultancy to specific healthcare software, Enterprise Resource Planning Software Solutions. Find Best trusted  ERP cloud software for medical store, Pharmaceutical erp software provider in Ahmedabad, Hospital erp software provider in ahmedabad, Medical store ERP software provider in ahmedabad.",
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
            freeTier: "3000",
            smallBusiness: "100000",
            enterprise: "300000",
        },
        {
            feature: "Maximum Invoice / Bill Count",
            freeTier: "3000",
            smallBusiness: "50000",
            enterprise: "300000",
        },
        {
            feature: "SMS, Email, WhatsApp Count",
            freeTier: "300",
            smallBusiness: "2000",
            enterprise: "300000",
        },
        {
            feature: "Inventory Management",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Customizable Template",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Historical Analytics",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Bill Template and Recent Product List",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Cloud Web and Mobile App (Android and iOS)",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Advanced Permissions",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Payment Reports and Payment Status",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Analytics",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Unlimited Storage for Product Images",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Re-Order and Demand Prediction",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "99.9% Uptime SLA",
            freeTier: true,
            smallBusiness: true,
            enterprise: true,
        },
        {
            feature: "Premium Support (Standard Hours)",
            freeTier: false,
            smallBusiness: false,
            enterprise: true,
        },
        {
            feature: "Core EMR/EHR Functionality",
            freeTier: false,
            smallBusiness: false,
            enterprise: true,
        },
        {
            feature: "Patient Scheduling & Billing",
            freeTier: false,
            smallBusiness: false,
            enterprise: true,
        },
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
                                Free Tier
                                <br />
                                <span
                                    className={twMerge(
                                        "text-xl",
                                        passion_one.className
                                    )}
                                >
                                    Rs 0/year
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
                                        {row.freeTier ? (typeof row.freeTier==="string") ? row.freeTier:( 
                                            <IoMdCheckmarkCircleOutline />
                                        ) : (
                                            "-"
                                        )}
                                    </div>
                                </td>
                                <td className="px-4 py-2 border-r border-black text-xl">
                                    <div className="flex items-center justify-center">
                                        {row.smallBusiness ? (typeof row.smallBusiness==="string") ? row.smallBusiness:(
                                            <IoMdCheckmarkCircleOutline />
                                        ) : (
                                            "-"
                                        )}
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-xl">
                                    <div className="flex items-center justify-center">
                                        {row.enterprise ? (typeof row.enterprise==="string") ? row.enterprise:(
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
