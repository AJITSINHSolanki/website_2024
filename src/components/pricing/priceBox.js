import { useState } from 'react';
import { PCloseImg, PRightImg } from '../../../public/images';
import Image from 'next/image';
import {
  EnterpriseBenifits,
  FreeBenefits,
  SmallBusinessBenifits,
} from '@/utils/constant';
import PageLoader from '../Loader/PageLoader';

const PriceBox = () => {
  return (
    <>
      <div className="container">
        <div className="price_box_section">
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
                      href="https://myerphome.com/auth/signup"
                      target="_blank"
                      className="button_strat_get"
                    >
                      Get a demo
                    </a>
                    <div className="cio-plan-card__details">
                      <ul>
                        <li>3000 Inventory count</li>
                        <li>3000 Maximum Invoice/Bill count</li>
                        <li>300 SMS, Email and WhatsApp Limit</li>
                      </ul>
                      <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                        {FreeBenefits.length > 0 ? (
                          FreeBenefits.map((item, index) => (
                            <li
                              key={index}
                              style={{
                                listStyleImage: `url(${PRightImg.src})`,
                              }}
                            >
                              {item}
                            </li>
                          ))
                        ) : (
                          <div
                            className="cio-plan-card__details"
                            style={{ padding: '15px' }}
                          >
                            {' '}
                            <PageLoader />
                          </div>
                        )}
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
                      <p className="model__below">Billed annually (Price does not include Tax [GST-18%]) </p>
                    </div>
                    <a
                      href="https://myerphome.com/auth/signup"
                      target="_blank"
                      className="button_strat_get"
                    >
                      Get a demo
                    </a>
                    <div className="cio-plan-card__details">
                      <ul>
                        <li>100000 Inventory count</li>
                        <li>50000 Maximum Invoice/Bill count</li>
                        <li>2000 SMS, Email and WhatsApp Limit</li>
                      </ul>
                      <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                        {SmallBusinessBenifits.length > 0 ? (
                          SmallBusinessBenifits.map((item, index) => (
                            <li
                              key={index}
                              style={{
                                listStyleImage: `url(${PRightImg.src})`,
                              }}
                            >
                              {item}
                            </li>
                          ))
                        ) : (
                          <div
                            className="cio-plan-card__details"
                            style={{ padding: '15px' }}
                          >
                            {' '}
                            <PageLoader />
                          </div>
                        )}
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
                      <p className="model__below">Billed annually (Price does not include Tax [GST-18%]) </p>
                    </div>
                    <a
                      href="https://myerphome.com/auth/signup"
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
                          300000 SMS, Email and WhatsApp Limit
                        </li>
                      </ul>
                      <ul style={{ listStyle: 'none', paddingLeft: '15px' }}>
                        {EnterpriseBenifits.length > 0 ? (
                          EnterpriseBenifits.map((item, index) => (
                            <li
                              key={index}
                              style={{
                                listStyleImage: `url(${PRightImg.src})`,
                              }}
                            >
                              {item}
                            </li>
                          ))
                        ) : (
                          <div
                            className="cio-plan-card__details"
                            style={{ padding: '15px' }}
                          >
                            {' '}
                            <PageLoader />
                          </div>
                        )}
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
