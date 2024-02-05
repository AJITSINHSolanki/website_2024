import { useRef, useEffect, useState } from 'react';
import { AboutImage, ProfileImg } from "../../../public/images";
import Counter from "./counter";
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon, LinkedinBoxIcon } from '../icon';

const AboutUs = () => {

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
        <div id="about-us"
            ref={myRef}
            className={`about_section fade-in ${isVisible ? 'active' : ''}`}
        >
            <div className="container">
                <div className="auout_inner_box">
                    <div className="about_fist_sec">
                        <p className="sub_title">ABOUT</p>
                        <p className="main_title">We empower marketers to create thoughtful <span>messages</span></p>
                    </div>
                    <div className="images_box">
                        <Image src={AboutImage} alt="about Image" />
                    </div>
                </div>
                <Counter />
                <div className="ceo_section">
                    <div className="img_box">
                        <Image src={ProfileImg} alt="ProfileImg" />
                    </div>
                    <div className="ceo_content">
                        <p><q>   &nbsp; &nbsp; &nbsp; &nbsp;Every business that serves customers has the challenge or goal to make their life better. My Algo Soft <span>helps with edge cases</span>  by using intent from behavior data to better help with the problems they came to solve.  by using intent from behavior data to better help with the problems they came to solve.</q></p>
                        <ul className='team_points'>
                            <li>Team leader: .Net Core and Database</li>
                            <li>Front-end developer: React and Flutter</li>
                            <li>Backend engineer: Python and .Net Core</li>
                        </ul>
                        <Link className='myalgosoftceo' href="https://www.linkedin.com/in/ajitsinhsolanki/">My Algosoft, CEO</Link>
                        <div className='about_socialmedia'>
                            <Link target="_blank" href='https://www.linkedin.com/in/admin-myalgosoft-llp-104b7429b'>
                                <span className='icon_box'>
                                    <LinkedinBoxIcon />
                                </span>
                            </Link>
                            <Link target="_blank" href='https://github.com/AJITSINHSolanki'>
                                <span className='icon_box'>
                                    <GithubIcon />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;