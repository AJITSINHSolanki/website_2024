import { useRef, useEffect, useState } from 'react';
import { AboutImage, ProfileImg } from '../../../public/images';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon, LinkedinBoxIcon } from '../icon';
import { HomePara } from '@/utils/constant';

const HomeMain = () => {
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
    checkVisibility(); // Check initial visibility

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div
      id="home"
      ref={myRef}
      className={`about_section fade-in ${isVisible ? 'active' : ''}`}
      style={{ backgroundColor: '#d8e7f6' }}
    >
      <div className="container home_content">
        <p className="main_title">
          We Manage Your Health Data <span>Digitally</span>
        </p>
      </div>
      <div  className="home_text"  >
        {HomePara.map((item, key) => (
            <p key={key}>
              <span>{item.text}</span> <br/> <br/>
            </p>
        ))}
         
      </div>
    </div>
  );
};

export default HomeMain;
