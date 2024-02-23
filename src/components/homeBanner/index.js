import React, { useRef, useState } from 'react';
import { HomeBannerCo } from '@/utils/constant';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import HomeMain from "../home"; 

const HomeBanner = () => {
    const imageHeight = 600;  

    return (
        <div>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                speed={5000}
                navigation={true}
                modules={[Autoplay, Navigation, EffectFade]}
                loop={true}
                className="mySwiper home_banner_slider"
                id='home'
            >
                {HomeBannerCo?.map((item, key) => (
                    <SwiperSlide key={key}>
                        <Link href={item.buttonUrl} className='images_box'>
                            <Image
                                src={item.images}
                                alt="slider1"
                                style={{ height: `${imageHeight}px` }}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <HomeMain />
            </div>
        </div>
    );
}

export default HomeBanner;
