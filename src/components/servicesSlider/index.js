import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { ServicesInfo } from '@/utils/constant';
import Image from 'next/image';
import { RightArrowIcon } from '../icon';

const ServicesSlider = () => {
    return (
        <div className="blog_section" id="blog">
            <div className="container">
                <div className='sub_and_title'>
                    <p className="main_title">Our <span>Services</span></p>
                </div>
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
                    speed={1000}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    // pagination={{
                    //     clickable: false,
                    // }}
                    modules={[Navigation, Autoplay,]}
                    effect="fade"
                    className="blog_list">

                    {ServicesInfo?.map((item, key) => (
                        <SwiperSlide className='services_list_s'>
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
                                    <Link href={item.link} className="title">{item.title}</Link>
                                    <p className="description">{item.description}</p>
                                    <Link href={item.link} className='read_more_button'>Read More <span className='icon'><RightArrowIcon /></span></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ServicesSlider;