import Link from "next/link";
// import Logo from "../logo";
import { ContactUsinfo, HeaderMenu, SocialIcon } from "@/utils/constant";
import { Certificate } from "../../../../public/images";
import { useState } from "react";
import { CloseIcon } from "@/components/icon";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_row footer_first_se">
            <div className="footer_box-col-3">
              {/* <Link href="/" className="footer_logo">
                <Logo />
                <span className="text-hide">Logo</span>
              </Link> */}
            </div>
            <div className="footer_box-col-6">
              <div className="f-heading-text">
                <p>Lets start a project together</p>
                {/* <span>Pore et dolore magna aliqua.</span> */}
              </div>
            </div>
            <div className="footer_box-col-3">
              <div className="footer_button">
                <Link href="mailto:admin@apsthreeai.ai" className="button_p">
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="footer_row footer_two_se">
            <div className="footer_box-col-4">
              <div className="footer-widget-info">
                <p>
                  Call APS THREEAI LLP (My Algosoft) at (+91) 74340 00130 for ERP software for
                  healthcare industry, ERP software for pharmaceutical company,
                  cloud based ERP software for pharmaceutical company, ERP
                  software for hospitals.
                </p>
                <ul className="social_icon">
                  {SocialIcon?.map((item, key) => (
                    <li key={key}>
                      <Link href={item.url} target={item.target}>
                        {<item.icon />}{" "}
                        <span className="text-hide">social</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer_box-col-4">
              <div className="footer-widget-menu">
                <p className="footer-widget-title">Useful Link</p>
                <ul>
                  {HeaderMenu.slice(1)?.map((item, key) => (
                    <li key={key}>
                      <Link href={item.url}>{item.name}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_box-col-4">
              <div className="footer-widget-contact">
                <p className="footer-widget-title">Contact Us</p>
                <ul>
                  {ContactUsinfo?.map((item, key) => (
                    <li key={key}>
                      <div className="icon">{<item.icon />}</div>
                      {item.url ? (
                        <Link href={item.url}>{item.description}</Link>
                      ) : (
                        <p className="description">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        © {currentYear}{" "}
        <button className="my_algo_soft" onClick={openPopup}>
          APS THREEAI LLP.
        </button>{" "}
        All Rights Reserved. Powered By MyAlgoSoft <br/> Call APS THREEAI LLP (My Algosoft) at (+91) 74340 00130 for ERP software for healthcare industry, ERP software for
pharmaceutical company, ERP software for hospitals, ERP software for invoice management, ERP
software for Billing and invoicing, ERP software for drug researcher company, ERP software
development services
      </div>

      <div className={`popup_model ${isPopupOpen ? "open" : ""}`}>
        <div className="model_item">
          <img src={Certificate.src} alt="certificate" />
          <button className="close_button" onClick={closePopup}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
