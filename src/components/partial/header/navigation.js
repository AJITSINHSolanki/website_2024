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
            &nbsp;&nbsp;+91 7434000130            
        </div>
    );
}

export default Navigation;
