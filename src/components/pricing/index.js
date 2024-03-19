import FAQ from '../faq';
import ComparePlans from './comparePlans';
import PriceBox from './priceBox';
import Pricingbanner from './pricingbanner';
import React, { useEffect, useRef, useState } from 'react';

const Pricing = () => {
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
    <>
      <div >
        <Pricingbanner />
        <div className="main_title_box">
          {/* <p className="sub_title">Pricing</p> */}
          <h1 className="main_title">
            ERP - <span> Simple, Transparent Pricing.</span>
          </h1>
          <p className="content">
            We understand that every healthcare organization hospital,
            pharmaceuticals, R&D companies, laboratories, and medical stores,
            has unique needs and budgets when it comes to managing operations.
            That's why we offer flexible and affordable ERP software pricing
            models to meet different requirements.
          </p>
        </div>
      </div>
      <PriceBox />

      <FAQ />
    </>
  );
};
export default Pricing;
