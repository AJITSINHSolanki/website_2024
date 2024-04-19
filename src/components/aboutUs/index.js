import { useRef, useEffect, useState } from "react";
import { AboutImage, ProfileImg } from "../../../public/images";
import Counter from "./counter";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinBoxIcon } from "../icon";
import { CardData } from "@/utils/constant";

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

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check initial visibility

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div  style={{backgroundColor:'#dfecf8', paddingBottom:'50px'}}>
    <div className="container" >
      <div
        id="about-us"
        ref={myRef}
        className={`about_section fade-in ${isVisible ? "active" : ""}`}
      >
        {/* <div style={{ paddingTop: '40px', minHeight: '40px' }}></div> */}
        {/* <div style={{ paddingTop: "30px" }}></div> */}

        {/* <div className="auout_inner_box">
          <div>
            <p className="main_title">
              We empower marketers to create thoughtful <span>messages</span>
            </p>
          </div>
          
          <div className="images_box">
            <Image src={AboutImage} alt="about Image" />
          </div>
        </div> */}
        <div className=" About_content">
          <p className="main_title">
            We empower marketers to create thoughtful <span>messages</span>
          </p>
          <p className="about_text">
            <span>
              MyAlgoSoft team builds the cutting edge technology that compels
              the most effective solutions for your business needs.
              <br /> Our modus operandi combines the excellence with execution
              and stand head and shoulders above your competitors.
            </span>{" "}
            <br />
          </p>
        </div>
        {/* <Counter /> */}
        <div className="ceo_section">
          <div className="img_box">
            <Image src={ProfileImg} alt="ProfileImg" />
          </div>
          <div className="ceo_content">
            <p>
              <q>
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp;Every business that serves customers
                has the challenge or goal to make their life better. My Algo
                Soft <span>helps with edge cases</span> by using intent from
                behavior data to better help with the problems they came to
                solve. by using intent from behavior data to better help with
                the problems they came to solve.
              </q>
            </p>
            <ul className="team_points">
              <li>Team leader: .Net Core and Database</li>
              <li>Front-end developer: React and Flutter</li>
              <li>Backend engineer: Python and .Net Core</li>
            </ul>
            <Link
              className="myalgosoftceo"
              href="https://www.linkedin.com/in/ajitsinhsolanki/"
            >
              My Algosoft, CEO
            </Link>
            <div className="about_socialmedia">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/admin-myalgosoft-llp-104b7429b"
              >
                <span className="icon_box">
                  <LinkedinBoxIcon />
                </span>
              </Link>
              <Link target="_blank" href="https://github.com/AJITSINHSolanki">
                <span className="icon_box">
                  <GithubIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="cards-container">
            {CardData.map((card, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  <p className="card-title">{card.title}</p>
                  <p className="card-body">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div>
          <p className="about_text">
            <span>
              Still thinking if you should delve into our product and/or
              service!? Don’t hesitate in nodding your head since MyAlgoSoft
              stands out in many ways such as:
            </span>{' '}
            <br />
            <br />
          </p>
        </div> */}
        {/* <div className="about_card_container">
          <div className="about_card">
            <div className="background-text"> 
              <span>☎</span>
            </div>
            <p>
              24*7 availability and technical assistance (Microsoft Azure
              scalable product with 0 downtime)
            </p>
          </div>
          <div className="about_card">
            <div className="background-text">
              <span>₹</span>
            </div>
            <p>Cost effective subscription model (postpaid and prepaid)</p>
          </div>
          <div className="about_card">
            <div className="background-text">
              <span>00</span>
            </div>
            <p>Quick barcode 1d and 2D reading support</p>
          </div>
          <div className="about_card">
            <div className="background-text">
              <span>[]</span>
            </div>
            <p>Personalized template and billing</p>
          </div>
          <div className="about_card">
            <div className="background-text">
              <span>★</span>
            </div>
            <p>Higher customer satisfaction</p>
          </div>
          <div className="about_card">
            <div className="background-text">
              <span>⩸</span>
            </div>
            <p>
              Healthcare App for Patients & Doctors: Manage tasks, appointments
              and schedules more efficiently.
            </p>
          </div>
        </div> */}
      </div>
    </div></div>
  );
};

export default AboutUs;
