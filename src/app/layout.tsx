import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { pt_sans } from "@/utils/fonts";

export const metadata: Metadata = {
    title: "APS THREEAI",
    description: "Manage your health data wisely",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={pt_sans.className}>
                <Navbar />
                <main className="w-full min-h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
