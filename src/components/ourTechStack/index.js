import { useRef, useEffect, useState } from "react";
import { OurTechStackItem } from "@/utils/constant";
import Image from "next/image";
import { BeatLoader } from "react-spinners";

const PageLoading = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginRight: "-40px" }}>
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

const OurTechStack = () => {
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
      id="our-tech-stack"
      className={`our_techstack_section  fade-in ${isVisible ? "active" : ""}`}
    >
      <div style={{ paddingTop: "0px", minHeight: "0px" }}></div>
      <div className="container">
        <p className="main_title">
          Technology <span>Platform</span>
        </p>
        <div className="our_techstack_list">
          {OurTechStackItem.length > 0 ? (
            OurTechStackItem?.map((item, key) => (
              <div key={key} className="our_techstack_item">
                <div className="images_box">
                  <Image src={item.images} alt={item.title} />
                </div>
                <p className="title_box">{item.title}</p>
                <div className="progress"></div>
              </div>
            ))
          ) : (
            <PageLoading />
          )}
          {/* {OurTechStackItem?.map((item, key) => (<div key={key} className="our_techstack_item">
                        <div className="images_box">
                            <Image src={item.images} alt={item.title} />
                        </div>
                        <p className="title_box">{item.title}</p>
                        <div className="progress">
                        </div>
                    </div>))} */}
        </div>
      </div>
    </div>
  );
};

export default OurTechStack;
