import React, { useRef, useState } from 'react';
import { HomeBannerCo } from '@/utils/constant';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

const HomeBanner = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            speed={5000}
            // autoplay={{
            //     delay: 3000,
            //     disableOnInteraction: false,
            // }}

            navigation={true}
            modules={[Autoplay, Navigation, EffectFade]}
            loop={true}
            // effect="fade"
            className="mySwiper home_banner_slider"
            id='home'
        >
            {HomeBannerCo?.map((item, key) => (
                <SwiperSlide key={key}>
                     {/* <div className='slider_item'> */}
                     <Link href={item.buttonUrl}  className='images_box'>
                            <Image src={item.images} alt="slider1" />
                            </Link>
                        
                        {/* <div className='slider_item_content'>
                            <p className='title'>{item.title}</p>
                            <p className='sub_text'>{item.content}</p>
                            <Link href={item.buttonUrl} className='button_p'><span>{item.buttonName}</span></Link>
                        </div> */}
                    {/* </div> */}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default HomeBanner;
