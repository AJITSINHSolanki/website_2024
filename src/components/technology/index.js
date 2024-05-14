import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { TechnologyCon } from "@/utils/constant";
import Image from "next/image";
import { BeatLoader } from "react-spinners";

const PageLoading = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginRight: "-20px" }}>
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

const Technology = () => {
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
    <></>
    // <div
    //   ref={myRef}
    //   id="technology"
    //   className={`technology_section fade-in ${isVisible ? "active" : ""}`}
    // >
    //   <div className="container">
    //     <div className="technology_section_pri">
    //       <p className="main_title">
    //         Technology And <span>DBMS</span>
    //       </p>
    //     </div>
    //     <Swiper
    //       spaceBetween={30}
    //       slidesPerView={1}
    //       centeredSlides={false}
    //       breakpoints={{
    //         640: {
    //           slidesPerView: 2,
    //           spaceBetween: 30,
    //         },
    //       }}
    //       autoplay={{
    //         delay: 5000,
    //         disableOnInteraction: false,
    //       }}
    //       navigation={false}
    //       pagination={{
    //         clickable: true,
    //       }}
    //       modules={[Navigation, Autoplay, Pagination]}
    //       loop={true}
    //       // effect="fade"

    //       className="mySwiper technology_list"
    //     >
    //       {TechnologyCon.length > 0 ? (
    //         TechnologyCon?.map((item, key) => (
    //           <SwiperSlide key={key} className="technology_item">
    //             <div className="border_line"></div>
    //             <div className="technology_inner">
    //               <div className="icon_box">
    //                 <div className="icon">
    //                   <Image src={item.images} alt={item.title} />
    //                 </div>
    //               </div>
    //               <div className="main_conntent">
    //                 <p className="title_box">
    //                   <span>{item.id}</span>
    //                   {item.title}
    //                 </p>
    //                 <p className="description">{item.description}</p>
    //               </div>
    //             </div>
    //           </SwiperSlide>
    //         ))
    //       ) : (
    //         <PageLoading />
    //       )}
    //       {/* {TechnologyCon?.map((item, key) => (
    //                     <SwiperSlide key={key} className="technology_item">
    //                         <div className="border_line"></div>
    //                         <div className="technology_inner">
    //                             <div className="icon_box">
    //                                 <div className="icon">
    //                                     <Image src={item.images} alt={item.title} />
    //                                 </div>
    //                             </div>
    //                             <div className="main_conntent">
    //                                 <p className="title_box"><span>{item.id}</span>{item.title}</p>
    //                                 <p className="description">{item.description}</p>
    //                             </div>
    //                         </div>
    //                     </SwiperSlide>
    //                 ))} */}
    //     </Swiper>
    //   </div>
    // </div>
  );
};

export default Technology;
