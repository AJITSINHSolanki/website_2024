// pages/about/index.js
import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import Pricing from "@/components/pricing";
import Head from "next/head";

const PricingPage = () => {
  const myRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (myRef.current) {
        const top = myRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(top < windowHeight);
      }
    };

    // Check visibility on mount
    checkVisibility();

    // Attach event listener for visibility check on scroll
    const handleScroll = () => {
      checkVisibility();
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <Head>
        <title>
          Apsthreeai.ai | Medical store ERP Software, Hospital, Pharmaceutical
          ERP Software Provider in Ahmedabad
        </title>
        <meta
          name="description"
          content="Call APS THREEAI LLP (My Algosoft) at (+91) 74340 00130 for IT consultancy to specific healthcare software, Enterprise
          Resource Planning Software Solutions. Find Best trusted ERP cloud software for medical store,
          Pharmaceutical erp software provider in Ahmedabad, Hospital erp software provider in ahmedabad,
          Medical store ERP software provider in ahmedabad."
        />
        <meta
          name="keywords"
          content="IT consultancy to specific healthcare software, Enterprise Resource Planning Software Solutions. ERP
          cloud software for medical store, Pharmaceutical erp software provider in Ahmedabad, Hospital erp
          software provider in ahmedabad, Medical store ERP software provider in ahmedabad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={myRef}>
        <Pricing />
      </div>
    </>
  );
};

export default PricingPage;
