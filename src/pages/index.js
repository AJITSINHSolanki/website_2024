import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import HomeBanner from "@/components/homeBanner";
import AboutUs from "@/components/aboutUs";
import OurTechStack from "@/components/ourTechStack";
import Team from "@/components/team";
import Technology from "@/components/technology";
import Services from "@/components/services";
import ContactUs from "@/components/contactUs";
import Testimonials from "@/components/testimonials";
import Blog from "@/components/blog";
import BlogSlider from "@/components/blogSlider";
import Features from "@/components/features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Apsthreeai.ai | Cloud based ERP Software for Healthcare Industry,
          Pharmaceutical Industry, Hospitals
        </title>
        <meta
          name="description"
          content="Call My Algosoft at (+91) 74340 00130 for ERP software for healthcare industry, ERP software for
          pharmaceutical company, cloud based ERP software for pharmaceutical company, ERP software for
          hospitals."
        />
        <meta
          name="keywords"
          content="ERP software for healthcare industry, ERP software for pharmaceutical company, cloud based ERP
          software for pharmaceutical company, ERP software for hospitals"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <HomeBanner />
        <AboutUs />
        <Features />
        <Services />
        <Technology />
        <OurTechStack />
        <Blog />
        <Team />
        <Testimonials />
        <ContactUs />
      </>
    </>
  );
}
