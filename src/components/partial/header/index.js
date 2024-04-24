import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icon";
// import Logo from "../logo";
import Navigation from "./navigation";
import Link from "next/link"; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    const toggleMenu = () => {
        if (isMenuOpen) {
            document.body.classList.remove("remove-scroll");
        } else {
            document.body.classList.add("remove-scroll");
        }
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop < 600) {
                setActiveSection('Home');
            } else if (scrollTop < 2000) {
                setActiveSection('About Us');
            } else if (scrollTop < 4300) {
                setActiveSection('Services');
            } else if (scrollTop < 6000) {
                setActiveSection('Blog');
            } else {
                setActiveSection('Contact');
            }

            if (scrollTop > 120) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header ${isSticky ? "is-sticky" : ""}`}>
            <div className="header_container"> 
                <div className="inner_header">
                    {/* <Link href="/" className="logo">
                        <Logo />
                        <span className="text-hide">Logo</span>
                    </Link> */}
                    <div className="companyname">APS THREEAI LLP</div>
                    <div className="menu_icon" onClick={toggleMenu}>
                        &nbps;&nbps;&nbps;<MenuIcon />
                    </div>
                    <div className={`menu_bar ${isMenuOpen ? 'active' : ''}`}>
                        <div className='title_close_icon'>
                            <div className='mobile_title'>Menus</div>
                            <div className="close_icon" onClick={toggleMenu}><CloseIcon /></div>
                        </div>
                        <Navigation closeMenu={toggleMenu} activeSection={activeSection} />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Header;
