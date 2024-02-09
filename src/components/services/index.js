import { useRef, useEffect, useState } from 'react';
import { ServicesInfo } from '@/utils/constant';
import Image from 'next/image';
import Link from 'next/link';
import { RightArrowIcon } from '../icon';

const Services = () => {
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
    <div
      ref={myRef}
      id="services"
      className={`services_section fade-in ${isVisible ? 'active' : ''}`}
    >
      <div className="container">
        <p className="main_title">
          Our Services & <span>Products</span>
        </p>
        <p className="service_text">
          At MyAlgoSoft you not only receive the splendid healthcare ERP
          products but also get the excellent services to amplify your business.
          Our products and services are categorized as:
        </p>
        <div className="services_list">
          {ServicesInfo?.map((item, key) => (
            <div key={key} className="services_item">
              <div className="images_box">
                <Link href={item.link} className="img">
                  <Image src={item.img} alt={item.title} />
                </Link>
                {/* <div className="icon-box">
                                <span className="icon">{<item.icon />}</span>
                            </div> */}
              </div>
              <div className="content-box">
                <Link href={item.link} className="title">
                  {item.title}
                </Link>
                <p className="description">{item.description}</p>
                <Link href={item.link} className="read_more_button">
                  Read More{' '}
                  <span className="icon">
                    <RightArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
