import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import { ServiceDetails, Services25 } from "../../public/images";

const FixedPriceContract = () => {
  return (
    <>
      <Head>
        <title>
          Apsthreeai.ai | ERP software development company in Ahmedabad,
          Gujarat, Indi
        </title>
        <meta
          name="description"
          content="Call APS THREEAI LLP (My Algosoft) at (+91) 74340 00130 for ERP software. Contact ERP Software Company in
          Ahmedabad, ERP software development company in ahmedabad"
        />
        <meta
          name="keywords"
          content="ERP product development services, ERP cloud software for clinical trial management"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="services_details_box">
        <p className="title">Fixed-price-contract</p>
        <p className="content">
          We create native and cross-platform mobile apps with engaging designs
          and seamless user experiences.
        </p>
      </div>

      <div className="container">
        <div className="detail_s_box">
          <img src={Services25.src} alt="Product and Web Development" />
        </div>
      </div>
      <div className="container">
        <div className="about-service7-body">
          <div className="about-service7-content">
            <p className="section-header">SOFTWARE DEVELOPMENT</p>
            <p className="section-title">Engine of progress</p>
            <div className="content_info">
              <p>
                Software development is the stab process of designing,
                programming, solids to testing, and maintaining software as the
                applications and systems. It empowers us to turn ideas
              </p>
              <p>
                Software developers, often rest referred to as coders or
                programmers, are sat the creative minds behind the digital
                innovations we use daily. They possess a unique blend of
              </p>
              <p>
                Developers write lines of code by state using programming
                languages such as Python, Java, JavaScript, and C++,{" "}
              </p>
            </div>
          </div>
          <div className="about-service7-img">
            <img src={ServiceDetails.src} alt="ServiceDetails" />
          </div>
        </div>
      </div>
      {/* <ServicesSlider /> */}
    </>
  );
};

export default FixedPriceContract;
