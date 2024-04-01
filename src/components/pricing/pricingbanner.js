import React, { useEffect, useRef, useState } from "react";
import { AboutImage } from "../../../public/images";
import ERP from "../../../public/images/ourstack/ERP.jpg";
import Image from "next/image";

const PricingBanner = () => {
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
      <div className="ERPHeading">
        <span className="ERPSpan">
          Automate your Invoice and Inventory with ERP
        </span>
      </div>
      <div className="MainERPContainer">
        <div className="REPContentImageContainer">
          <div className="ERPImage">
            <Image
              className="Image"
              src={AboutImage}
              alt="about Image"
              width={500}
              height={300}
            />
          </div>
          <div className="ERPContent">
            <div className="TotalContent">
              <p className="Content">
                <span className="MainContent">Streamlined Processes :- </span>
                Say goodbye to manual data entry and tedious paperwork. ERP
                software integrates all aspects of your business, including
                invoicing and inventory management, into a centralized system,
                reducing duplication of efforts and minimizing errors.
              </p>
              <p className="Content">
                <span className="MainContent">Real-time Insights :- </span>
                Gain valuable insights into your business performance with
                real-time data analytics. Track inventory levels, monitor cash
                flow, and generate customized reports at the touch of a button,
                empowering informed decision-making and strategic planning.
              </p>
            </div>
          </div>
        </div>
        <div className="REPContentImageContainer">
          <div className="ERPContent">
            <div className="TotalContent">
              <p className="Content">
                <span className="MainContent">
                  Improved Customer Service :-{" "}
                </span>
                Deliver exceptional customer experiences with faster order
                processing and timely invoicing. ERP software enables you to
                fulfill orders promptly, maintain optimal inventory levels, and
                provide superior service, leading to increased customer
                satisfaction and loyalty.
              </p>
              <p className="Content">
                <span className="MainContent">Enhanced Accuracy :- </span>
                Enhanced Accuracy: Eliminate the risk of human error with
                automated invoice generation and inventory tracking. ERP systems
                ensure data consistency and accuracy across all departments,
                minimizing discrepancies and improving overall operational
                efficiency.
              </p>
            </div>
          </div>
          <div className="ERPImage">
            <Image
              className="Image"
              src={ERP}
              alt="about Image"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </>

    // <div ref={myRef}
    //       id="pricing"
    //       className={`  fade-in ${isVisible ? 'active' : ''}`}>
    //    <div className="container">
    //   <div className="pricingBanner">
    //     <p className="pricingbannerText">
    //       Automate your Invoice and Inventory with ERP
    //     </p>
    //   <div>
    //   <Image src={AboutImage} alt="about Image" />
    //   </div>
    //   </div>
    // </div>
    // </div>
  );
};

export default PricingBanner;
