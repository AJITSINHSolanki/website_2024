import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { BlogInfo, BlogInfoSlider } from '@/utils/constant';

const BlogSlider = () => {
    return (
        <div className="blog_section" id="blog">
            <div className="container">
                <div className='sub_and_title'>
                    <p className="main_title">Our <span>Blog</span></p>
                </div>
                {/* <div className='blog_list blog_list_not_sli'>
                    {BlogInfo?.map((item, key) => (
                        <div key={key} className="blog_item">
                            <div className="blog_item-inner">
                                <div className="item--featured">
                                    <Link rel="stylesheet" href={item.url} >
                                        <img src={item.img.src} alt="Blog Imgs" />
                                    </Link>
                                </div>
                                <div className="item--holder item--main">
                                    <Link rel="stylesheet" href={item.url} >
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={false}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    // pagination={{
                    //     clickable: false,
                    // }}
                    modules={[Navigation, Autoplay, ]}
                    effect="fade"
                    className="blog_list">
                    {BlogInfoSlider?.map((item, key) => (
                        <SwiperSlide>
                            <div key={key} className="blog_item">
                                <div className="blog_item-inner">
                                    <div className="item--featured">
                                        <Link rel="stylesheet" href={item.url} >
                                            <img src={item.img.src} alt="Blog Imgs" />
                                        </Link>
                                    </div>
                                    <div className="item--holder item--main">
                                        <Link rel="stylesheet" href={item.url} >
                                            {item.title}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BlogSlider;