import { useRef, useEffect, useState } from 'react';
import { OurTeam } from "@/utils/constant";
import Image from 'next/image';
import { BeatLoader } from "react-spinners";


const PageLoading = () => {
    return (
      <>
  <div style={{ textAlign: 'center', marginRight:'-60px'}}>
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


const Team = () => {

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
        <div ref={myRef} id="team" className={`team_section fade-in ${isVisible ? 'active' : ''}`}>
            <div className="container">
                <div className='sub_and_title'>
                    <p className="main_title">Meet Our <span>Team</span></p>
                    <p className='sub_text'>We are a group of passionate professionals who are dedicated to making a difference in our industry.</p>
                </div>
                <div className="our_team_list">
                    {
                        OurTeam.length > 0 ? (OurTeam?.map((item, key) => (
                            <div key={key} className="our_team_item">
                                <div className="images_box">
                                    <Image src={item.images} alt={item.name} />
                                </div>
                                <div className="our_teans_detail">
                                    <p className="team-name">{item.dissertation}</p>
                                    {/* <p className="team_dissertation">{item.dissertation}</p> */}
                                    <p className="content">{item.description}</p>
                                </div>
                            </div>))) : (<PageLoading/>)
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Team;