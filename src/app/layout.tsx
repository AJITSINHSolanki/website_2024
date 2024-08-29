import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { pt_sans } from "@/utils/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import GA4_Initiator from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
    title: {
        template: "Apsthreeai.ai | %s",
        default: "Apsthreeai.ai",
    },
    description:
        "Call APSTHREEAI at (+91) 635656 61125 for ERP software for healthcare industry, ERP software for pharmaceutical company, cloud based ERP software for pharmaceutical company, ERP software for hospitals.",
    keywords: [
        "ERP software for healthcare industry",
        "ERP software for pharmaceutical company",
        "cloud based ERP software for pharmaceutical company",
        "ERP software for hospitals",
    ],
    metadataBase: new URL("https://apsthreeai.ai/"),
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
                <GA4_Initiator />
            </body>
            <GoogleAnalytics gaId="G-0B4NF5CK1E" />
        </html>
    );
}
