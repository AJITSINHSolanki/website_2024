import { useState } from 'react';
import { PRightImg } from '../../../public/images';
import Image from 'next/image';

const PriceBox = () => {
  const [selectedPlan, setSelectedPlan] = useState('Free');

  const handleTabClick = (tab) => {
    setSelectedPlan(tab);
  };
  return (
    <>
      <div className="price_box_section">
        <div className="uk-margin">
          <div
            className={`button_tab ${selectedPlan === 'Free' ? 'active' : ''}`}
            onClick={() => handleTabClick('Free')}
          >
            Free
          </div>
          <div
            className={`button_tab ${
              selectedPlan === 'Small Business' ? 'active' : ''
            }`}
            onClick={() => handleTabClick('Small Business')}
          >
            Business
          </div>
          <div
            className={`button_tab ${
              selectedPlan === 'Enterprise' ? 'active' : ''
            }`}
            onClick={() => handleTabClick('Enterprise')}
          >
            Enterprise
          </div>
        </div>
        <div className="price_box_inner">
          <div
            className={`item_box_section ${
              selectedPlan === 'Free' ? 'is-selected' : ''
            }`}
          >
            <div style={{ marginLeft: '150px' }}>
              <div className="item_box">
                <div className="item_inner_box">
                  <p className="main_tt">Starter</p>
                  <div className="plan-card__pricing">
                    <p className="stat">Starts at</p>
                    <p className="model__value">₹ 0 / Month</p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`item_box_section ${
              selectedPlan === 'Small Business' ? 'is-selected' : ''
            }`}
          >
            <div style={{ marginLeft: '150px' }}>
              <div className="item_box">
                <div className="item_inner_box">
                  <p className="main_tt">Small Business</p>
                  <div className="plan-card__pricing">
                    <p className="stat">Starts at</p>
                    <p className="model__value">₹ 7999 / Year</p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`item_box_section ${
              selectedPlan === 'Enterprise' ? 'is-selected' : ''
            }`}
          >
            <div style={{ marginLeft: '150px' }}>
              <div className="item_box">
                <div className="item_inner_box">
                  <p className="main_tt">Enterprise</p>
                  <div className="plan-card__pricing">
                    <p className="stat">Starts at</p>
                    <p className="model__value">₹ 14999 / Year</p>
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
                      <li>300000 SMS, Email and WhatsApp notification count</li>
                    </ul>
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
