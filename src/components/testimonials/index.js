import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { TestimonialsInfo } from "@/utils/constant";
import { StarIcon } from "../icon";
import { QuorteImg } from "../../../public/images";
import Image from "next/image";
import { BeatLoader } from "react-spinners";

const PageLoading = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginLeft: "370px", width: "100%" }}>
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

const Testimonials = () => {
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

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div
      ref={myRef}
      className={`testimonials_section fade-in ${isVisible ? "active" : ""}`}
    >
      <div className="container">
        <div className="testimonials_ttp">
          <p className="sub_title">Testimonial</p>
          <p className="main_title">
            What Our Clients <span>Say</span>
          </p>
        </div>
        <div className="testimonial_list">
          {TestimonialsInfo.length > 0 ? (
            TestimonialsInfo?.map((item, key) => (
              <div key={key} className="testimonial-item">
                <div className="testimonial_inner">
                  <p className="description">“{item.content}”</p>
                  <div className="author-box">
                    <div className="img_box">
                      <Image src={item.images} alt={item.name} />
                    </div>
                    <div className="author-content">
                      <p className="name">{item.name}</p>
                      <p className="dissertation">{item.dissertation}</p>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <Image src={QuorteImg} alt="QuorteImg" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <PageLoading />
          )}
          {/* {TestimonialsInfo?.map((item, key) => (
                        <div key={key} className="testimonial-item">
                            <div className="testimonial_inner">
                                <p className="description">“{item.content}”</p>
                                <div className='author-box'>
                                    <div className="img_box">
                                        <Image src={item.images} alt={item.name} />
                                    </div>
                                    <div className="author-content">
                                        <p className='name'>{item.name}</p>
                                        <p className='dissertation'>{item.dissertation}</p>
                                    </div>
                                </div>
                                <div className='quote-icon'>
                                    <Image src={QuorteImg} alt="QuorteImg" />
                                </div>
                            </div>
                        </div>
                    ))} */}
        </div>
        {/* <Swiper
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
                    speed={5000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    navigation={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Autoplay, Pagination,]}
                    loop={true}
                    effect="fade"

                    className="mySwiper testimonial_list">
                    {TestimonialsInfo?.map((item, key) => (
                        <SwiperSlide key={key} className="testimonial-item">
                            <div className="testimonial_inner">
                                <div className="rating">
                                    <span className='icon'><StarIcon /></span>
                                    <span className='icon'><StarIcon /></span>
                                    <span className='icon'><StarIcon /></span>
                                    <span className='icon'><StarIcon /></span>
                                    <span className='icon'><StarIcon /></span>
                                </div>
                                <p className="description">“{item.content}”</p>
                                <div className='author-box'>
                                    <div className="img_box">
                                        <Image src={item.images} alt={item.name} />
                                    </div>
                                    <div className="author-content">
                                        <p className='name'>{item.name}</p>
                                        <p className='dissertation'>{item.dissertation}</p>
                                    </div>
                                </div>
                                <div className='quote-icon'>
                                    <Image src={QuorteImg} alt="QuorteImg" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper> */}
      </div>
    </div>
  );
};

export default Testimonials;
