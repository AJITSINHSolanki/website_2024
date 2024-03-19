import React, { useEffect, useRef, useState } from 'react';
import { AboutImage, ProfileImg } from '../../../public/images';
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

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);
  return (
    <div ref={myRef}
          id="pricing"
          className={`  fade-in ${isVisible ? 'active' : ''}`}>
       <div className="container">
      <div className="pricingBanner">
        <p className="pricingbannerText">
          Automate your Invoice and Inventory with ERP
        </p>
      <div>
      <Image src={AboutImage} alt="about Image" />
      </div>
      </div>
    </div>
    </div>
   
  );
};

export default PricingBanner;
