import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { pt_sans } from "@/utils/fonts";

export const metadata: Metadata = {
    title: {
        template: "Apsthreeai.ai | %s",
        default: "Apsthreeai.ai",
    },
    description:
        "Call My Algosoft at (+91) 74340 00130 for ERP software for healthcare industry, ERP software for pharmaceutical company, cloud based ERP software for pharmaceutical company, ERP software for hospitals.",
    keywords: [
        "ERP software for healthcare industry",
        "ERP software for pharmaceutical company",
        "cloud based ERP software for pharmaceutical company",
        "ERP software for hospitals",
    ],
    metadataBase: new URL('https://apsthreeai.ai/')
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
