import React from 'react';
import { AboutImage, ProfileImg } from '../../../public/images';
import Image from "next/image";

const PricingBanner = () => {
  return (
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
  );
};

export default PricingBanner;
