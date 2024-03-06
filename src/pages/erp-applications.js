import Layout from '@/components/layout';
import Head from 'next/head';
import { Service9 } from '../../public/images';
import {
  ChooseErp,
  ERPCapabilities,
  ERPdescription,
  HomePara,
  ServicesInfo,
  TechnologyCon,
  data,
} from '@/utils/constant';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import LinkedinIcon from '@/components/icon/linkedinIcon';
import { LinkedinBoxIcon } from '@/components/icon';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { BeatLoader } from 'react-spinners';

const PageLoading = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <BeatLoader
          color="#0162C8"
          cssOverride={{}}
          size={30}
          speedMultiplier={1}
        />
      </div>
    </>
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

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <>
      <Head>
        <title> MyAlgoSoft ERP Applications </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="services_details_box">
          <p className="title">
            MyAlgoSoft ERP Software &amp; Solutions for Healthcare
          </p>
          <p className="content">
            Streamline business operations with the best ERP software for the
            healthcare industry.
          </p>
        </div>

        <div className="container">
          <div className="detail_s_box">
            <img src={Service9.src} alt="Product and Web Development" />
          </div>
        </div>

        <div className="home_text">
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

        <div
          ref={myRef}
          id="erp"
          className={`services_section fade-in ${isVisible ? 'active' : ''}`}
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
                  <div className="services_item">
                    <div key={key}>
                      <div className="images_box">
                        <Image src={item.image} style={{ height: '190px' }} />
                      </div>

                      <div
                        className="content-box"
                        style={{ minHeight: 'min-content', height: '350px' }}
                      >
                        <div className="description">
                          <p className="title">{item.title}</p>
                          <ol
                            style={{
                              listStyleType: 'disc',
                              paddingLeft: '20px',
                            }}
                          >
                            {item.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ marginRight: ' -80px' }}>
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
                marginTop: '50px',
                marginBottom: '50px',
                whiteSpace: 'nowrap',
              }}
            >
              {data.length > 0 ? (
                data.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      width: '200px',
                      textAlign: 'center',
                      display: 'inline-block',
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                    <div>
                      <p>{item.title}</p>
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

        <div
          className=" "
          style={{
            background: '#f0f6fb',
            padding: '50px',
            marginBottom: '50px',
          }}
        >
          <div className="sub_and_title">
            <p className="main_title">
              Why Choose MyAlgoSoft ERP<span>?</span>
            </p>
          </div>

          <div className="container">
            <div
              style={{
                marginBottom: '50px',
                marginTop: '50px',
                textAlign: 'start',
              }}
            >
              <ol style={{ listStyleType: 'disc' }}>
                {
                  ChooseErp.length > 0 ?(
                    ChooseErp.map((item, index) => (
                      <li key={index}>
                        <p>{item}</p>
                      </li>
                    ))
                  ) : (<PageLoading/>)
                }
             

                
              </ol>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ERPApplications;
