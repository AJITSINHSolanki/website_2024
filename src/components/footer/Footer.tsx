"use client";
import { jockey_one, passion_one } from "@/utils/fonts";
import { whatsAppShare } from "@/utils/helper";
import Image from "next/image";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { TbBrandLinkedin, TbBrandTelegram } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const Footer = () => {
    const whatsAppHandler = () => {
        whatsAppShare("Hey");
    };

    return (
        <div className="bg-primary w-full py-6 px-side flex flex-col items-center bg-black text-white">
            <div className="flex items-center gap-2 font-semibold mb-4">
                <Image
                    src="/images/apsthreeai.svg"
                    alt="APS THREEAI"
                    className="w-8 h-8"
                    width={20}
                    height={20}
                    priority
                />
                <h1 className={twMerge("text-2xl", jockey_one.className)}>
                    APS THREEAI
                </h1>
            </div>
            <div
                className="flex justify-center items-center gap-5 text-3xl my-5"
                style={passion_one.style}
            >
                <FaWhatsapp
                    className="cursor-pointer"
                    onClick={whatsAppHandler}
                />
                <a
                    href="https://www.instagram.com/apsthreeai/"
                    target="_blank"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/in/apsthreeaillp/"
                    target="_blank"
                >
                    <TbBrandLinkedin />
                </a>
                <a href="https://www.facebook.com/apsthreeai/" target="_blank">
                    <AiOutlineFacebook />
                </a>
            </div>
            <p className="text-sm text-white font-alata text-center mt-4">
                &copy; 2024 APS THREEAI LLP, All Rights Reserved |{" "}
                <a
                    href="https://laughlogiclabs.com"
                    target="_blank"
                    className="text-sm text-white font-alata text-center mt-2"
                >
                    Developed By Laugh Logic Labs
                </a>{" "}
                | Powered By MyAlgoSoft
            </p>
            <p className="mt-4 text-sm text-gray-500 font-alata text-center">
                Call APS THREEAI LLP (My Algosoft) at (+91) 74340 00130 for ERP
                software for healthcare industry, ERP software for
                pharmaceutical company, ERP software for hospitals, ERP software
                for invoice management, ERP software for Billing and invoicing,
                ERP software for drug researcher company, ERP software
                development services
            </p>
        </div>
    );
};

export default Footer;
