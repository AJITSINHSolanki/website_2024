import { useRef, useEffect, useState } from 'react';
import { OurTechStackItem } from "@/utils/constant";
import Image from 'next/image';

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

        window.addEventListener('scroll', checkVisibility);
        checkVisibility();

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);


    return (
        <div ref={myRef} id="our-tech-stack" className={`our_techstack_section  fade-in ${isVisible ? 'active' : ''}`}>
            <div className="container">
                <p className="main_title">Our Tech <span>Stack</span></p>
                <div className="our_techstack_list">
                    {OurTechStackItem?.map((item, key) => (<div key={key} className="our_techstack_item">
                        <div className="images_box">
                            <Image src={item.images} alt={item.title} />
                        </div>
                        <p className="title_box">{item.title}</p>
                        <div className="progress">
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default OurTechStack;