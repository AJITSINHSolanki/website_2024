import Link from 'next/link';
import { HeaderMenu } from './../../../utils/constant';
import { useRouter } from "next/router";

const Navigation = ({ closeMenu, activeSection }) => {
    const router = useRouter();

    return (
        <div className='menu_list'>            
            <div className="menu_destop">
                {HeaderMenu?.map((item, key) => (
                    <Link
                        key={key}
                        href={item.url}
                        onClick={(e) => { closeMenu(); }}
                        className={`link_menu ${router.asPath === item.url || (activeSection === item.name && item.name === 'Pricing') ? "active" : ""}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <Link href="tel:7434000130" className='button_p'><span>+91 7434000130</span></Link>
            <Link href="mailto:admin@apsthreeai.ai" className='button_p'><span>Enquire</span></Link>
        </div>
    );
}

export default Navigation;