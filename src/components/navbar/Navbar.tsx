"use client";

import { jockey_one } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
    const pathname = usePathname();

    const routes = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "Technologies",
            path: "/#technologies",
        },
        {
            name: "ERP Product",
            path: "/features",
        },
        {
            name: "Pricing",
            path: "/pricing",
        },
        {
            name: "Blogs",
            path: "/#blogs",
        },
        {
            name: "Contact Us",
            path: "/#contact-us",
        },
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="sticky top-0 z-10 bg-white shadow-sm py-4 px-4 psm:x-8 flex items-center justify-between bg-transparent font-bold">
            <Link href="/" className="w-80 flex items-center gap-2">
                <Image
                    src="/images/apsthreeai.svg"
                    alt="APS THREEAI"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                    priority
                />
                <h1 className={twMerge(jockey_one.className, "text-xl")}>
                    APS THREEAI
                </h1>
            </Link>
            <ul className="hidden sm:flex gap-10 items-center">
                {routes.map((route) => (
                    <li key={route.name} className="cursor-pointer">
                        <Link
                            href={route.path}
                            className={twMerge(
                                route.path === pathname ? "text-red-400" : "",
                                ""
                            )}
                        >
                            {route.name}
                        </Link>
                    </li>
                ))}
                <a
                    href="https://myerphome.com/auth/login" target="_blank"
                    className="px-4 py-1 rounded-lg shadow-lg text-white text-lg bg-black"
                >
                    Login
                </a>
            </ul>

            <div className="sm:hidden">
                <RxHamburgerMenu
                    onClick={toggleSidebar}
                    className="text-3xl cursor-pointer"
                />
            </div>

            <div
                className={twMerge(
                    "bg-center bg-cover bg-no-repeat fixed top-0 left-0 overflow-hidden duration-300 h-screen text-white flex justify-center items-center text-5xl tracking-[1px] md:hidden z-50",
                    isOpen ? "w-full" : "w-0"
                )}
                style={{backgroundImage: 'url("/images/menu_bg.webp")'}}
            >
                <ul className="text-3xl space-y-8">
                    {routes.map((route) => (
                        <li key={route.name}>
                            <Link href={route.path} onClick={toggleSidebar}>
                                {route.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <VscChromeClose
                    onClick={toggleSidebar}
                    className="absolute top-[40px] right-[40px] text-3xl"
                />
            </div>
        </nav>
    );
};
