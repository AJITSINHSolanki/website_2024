"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BeatLoader } from "react-spinners";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Services19 } from "../../public/images";
import Layout from "../components/layout"; // Import Layout directly
import {
  ChooseErp,
  ERPCapabilities,
  ERPdescription,
  data,
} from "@/utils/constant";

const PageLoading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <BeatLoader color="#0162C8" size={30} speedMultiplier={1} />
    </div>
  );
};

const ERPApplications = () => {
  const myRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (myRef.current) {
        const top = myRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Apsthreeai.ai | ERP Applications for Healthcare IT Solutions,
          Healthcare software solutions in Ahmedabad, Gujarat, India
        </title>
        <meta
          name="description"
          content="Call APS THREEAI LLP (My Algosoft) at (+91) 74340 00130 for healthcare software solutions, Healthcare IT Solutions,
          Healthcare software solutions in Gujarat, Healthcare software solutions in Ahmedabad, Healthcare erp
          software provider in Ahmedabad"
        />
        <meta
          name="keywords"
          content="healthcare software solutions, Healthcare IT Solutions, Healthcare software solutions in Gujarat,
          Healthcare software solutions in Ahmedabad, Healthcare erp software provider in Ahmedabad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="services_details_box">
        <div className="title">
          MyAlgoSoft ERP Software &amp; Solutions for Healthcare
        </div>
        <p className="content">
          Streamline business operations with the best ERP software for the
          healthcare industry.
        </p>
      </div>

      <div className="container">
        <div className="detail_s_box_cont">
          <div className="detail_s_box">
            <Image
              src={Services19.src}
              alt="Product and Web Development"
              width={300}
              height={200}
            />
          </div>
          <div className="container home_text">
            {ERPdescription.length > 0 ? (
              ERPdescription.map((item, key) => (
                <p key={key}>
                  <span>{item.text}</span> <br /> <br />
                </p>
              ))
            ) : (
              <PageLoading />
            )}
          </div>
        </div>
      </div>

      <div
        ref={myRef}
        id="erp"
        className={`services_section fade-in ${isVisible ? "active" : ""}`}
      >
        <div className="container">
          <p className="main_title">
            MyAlgoSoft ERP Capabilities & <span> Features</span>
          </p>
          <div>
            <p className="erp_text">
              With ERP Healthcare you will have refined processes, lesser
              operational cost, also ensures 360° patient safety and provides
              better data management.
            </p>
          </div>

          <div className="services_list">
            {ERPCapabilities.length > 0 ? (
              ERPCapabilities.map((item, key) => (
                <div className="services_item" key={key}>
                  <div className="images_box">
                    <Image src={item.image} width={300} height={190} />
                  </div>

                  <div
                    className="content-box"
                    style={{ minHeight: "min-content", height: "350px" }}
                  >
                    <div className="description">
                      <p className="title">{item.title}</p>
                      <ul
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                      >
                        {item.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ marginRight: "-80px" }}>
                <PageLoading />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sub_and_title">
          <p className="main_title">
            MyAlgoSoft ERP <span>Specification</span>
          </p>
        </div>

        <marquee scrollamount="10">
          <div
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              whiteSpace: "nowrap",
            }}
          >
            {data.length > 0 ? (
              data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "200px",
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <div>
                    <div>{item.title}</div>
                    {item.content.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <PageLoading />
            )}
          </div>
        </marquee>
      </div>

      <div className=" " style={{ background: "#f0f6fb", padding: "50px" }}>
        <div className="sub_and_title">
          <p className="main_title">
            Why Choose MyAlgoSoft ERP<span>?</span>
          </p>
        </div>

        <div className="container">
          <div className="erp_main_box">
            {ChooseErp.length > 0 ? (
              ChooseErp.map((item, index) => (
                <div className="erp_1_box" key={index}>
                  <div className="box1">
                    <div className="box2">
                      <Image src={item.image} width={130} height={130} />
                      <div className="box_title">{item.title}</div>
                      <div className="box_description">{item.description}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <PageLoading />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ERPApplications;
