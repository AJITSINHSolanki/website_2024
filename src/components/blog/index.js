import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { BlogInfo } from '@/utils/constant';
import { RightArrowIcon } from '../icon';
import { BeatLoader } from 'react-spinners';
import { useEffect, useRef, useState } from "react";

const PageLoading = () => {
  return (
    <div style={{ textAlign: 'center', marginRight: '-800px' }}>
      <BeatLoader color="#0162C8" cssOverride={{}} size={30} speedMultiplier={1} />
    </div>
  );
};

const Blog = () => {
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
    <div className="container">  
      <div className={`blog_section fade-in ${isVisible ? 'active' : ''}`} id="blog"  ref={myRef}>
      <div style={{ paddingTop: '40px', minHeight: '40px',  }}> 
</div>

        <div className="sub_and_title" >
          <p className="main_title">
            Our <span>Blog</span>
          </p>
        </div>
        {/* <div className="blog_list blog_list_not_slider" style={{ paddingBottom: '120px' }}> */}
        <div className="blog_list blog_list_not_slider"  >
          {BlogInfo.length > 0 ? (
            BlogInfo?.map((item, key) => (
              <div key={key} className="blog_item">
                <div className="blog_item-inner">
                  <div className="item--featured">
                    <Link rel="stylesheet" href={item.url}>
                      <img src={item.img.src} alt="Blog Imgs" />
                    </Link>
                  </div>
                  <div className="item--holder item--main">
                    <Link rel="stylesheet" href={item.url}>
                      {item.title}
                    </Link>
                    <Link href={item.url} className="read_more_button">
                      <RightArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <PageLoading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
 