import { useState } from 'react';
import { PCloseImg, PRightImg } from '../../../public/images';
import Image from 'next/image';
import { EnterpriseBenifits, FreeBenefits, SmallBusinessBenifits } from "@/utils/constant";

const PriceBox = () => {
  const [selectedPlan, setSelectedPlan] = useState('Free');

  const handleTabClick = (tab) => {
    setSelectedPlan(tab);
  };
  return (
    <>
    <div className="container">

      <div className="price_box_section">
        <div className="uk-margin">
          <div
            className={`button_tab ${selectedPlan === 'Free' ? 'active' : ''}`}
           
          >
            Free
          </div>
          <div
            className={`button_tab ${
              selectedPlan === 'Small Business' ? 'active' : ''
            }`}
           
          >
            Business
          </div>
        </div>
        <div className="price_box_inner" style={{ gap: '20px' }}>
            <div className={`item_box_section  `}>
              <div>
                <div className="item_box">
                  <div className="item_inner_box" style={{ width: '305px' }}>
                    <p className="main_tt">Starter</p>
                    <div className="plan-card__pricing">
                      <p className="stat">Starts at</p>
                      <p className="model__value">₹ 0/ Month</p>
                      <p className="model__below">No monthly, bill </p>
                    </div>
                    <a
                      href="https://erphome.azurewebsites.net/auth/login"
                      target="_blank"
                      className="button_strat_get"
                    >
                      Get a demo
                    </a>
                    <div className="cio-plan-card__details">
                      <ul>
                        <li>3000 Inventory count</li>
                        <li>3000 Maximum Invoice/Bill count</li>
                        <li>300 SMS, Email and WhatsApp notification count</li>
                        
                      </ul>
                      <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                        { FreeBenefits.map((item, index) => (
                          <li
                            key={index}
                            style={{ listStyleImage: `url(${PRightImg.src})` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item_box_section  `}>
              <div>
                <div className="item_box">
                  <div className="item_inner_box" style={{ width: '305px' }}>
                    <p className="main_tt">Small Business</p>
                    <div className="plan-card__pricing">
                      <p className="stat">Starts at</p>
                      <p className="model__value">₹ 7999/ Year</p>
                      <p className="model__below">Billed annually </p>
                    </div>
                    <a
                      href="https://erphome.azurewebsites.net/auth/login"
                      target="_blank"
                      className="button_strat_get"
                    >
                      Get a demo
                    </a>
                    <div className="cio-plan-card__details">
                      <ul>
                        <li>100000 Inventory count</li>
                        <li>50000 Maximum Invoice/Bill count</li>
                        <li>2000 SMS, Email and WhatsApp notification count</li>
                      </ul>
                      <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                        { SmallBusinessBenifits.map((item, index) => (
                          <li
                            key={index}
                            style={{ listStyleImage: `url(${PRightImg.src})` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item_box_section `}>
              <div>
                <div className="item_box">
                  <div className="item_inner_box" style={{ width: '305px' }}>
                    <p className="main_tt">Enterprise</p>
                    <div className="plan-card__pricing">
                      <p className="stat">Starts at</p>
                      <p className="model__value">₹ 14999/ Year</p>
                      <p className="model__below">Billed annually </p>
                    </div>
                    <a
                      href="https://erphome.azurewebsites.net/auth/login"
                      target="_blank"
                      className="button_strat_get"
                    >
                      Get a demo
                    </a>
                    <div className="cio-plan-card__details">
                      <ul>
                        <li>300000 Inventory count</li>
                        <li>300000 Maximum Invoice/Bill count</li>
                        <li>
                          300000 SMS, Email and WhatsApp notification count
                        </li>
                      </ul>
                      <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                        { EnterpriseBenifits.map((item, index) => (
                          <li
                            key={index}
                            style={{ listStyleImage: `url(${PRightImg.src})` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default PriceBox;
