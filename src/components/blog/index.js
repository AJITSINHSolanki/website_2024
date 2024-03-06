import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { BlogInfo } from '@/utils/constant';
import { RightArrowIcon } from '../icon';
import { BeatLoader } from "react-spinners";

const PageLoading = () => {
    return (
      <>
  <div style={{ textAlign: 'center', marginRight:'-800px'}}>
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


const Blog = () => {
    return (
        <div className="blog_section" id="blog">
            <div className="container">
                <div className='sub_and_title'>
                    <p className="main_title">Our <span>Blog</span></p>
                </div>
                <div className='blog_list blog_list_not_slider'>
                    {
                        BlogInfo.length > 0 ? (BlogInfo?.map((item, key) => (
                            <div key={key} className="blog_item">
                                <div className="blog_item-inner">
                                    <div className="item--featured">
                                        <Link rel="stylesheet" href={item.url} >
                                            <img src={item.img.src} alt="Blog Imgs" />
                                        </Link>
                                    </div>
                                    <div className="item--holder item--main">
                                        <Link rel="stylesheet" href={item.url} >
                                            {item.title}
                                        </Link>
                                        <Link href={item.url} className='read_more_button'><RightArrowIcon /></Link>
                                    </div>
                                </div>
                            </div>
                        ))): (<PageLoading/>)
                    }
                    {/* {BlogInfo?.map((item, key) => (
                        <div key={key} className="blog_item">
                            <div className="blog_item-inner">
                                <div className="item--featured">
                                    <Link rel="stylesheet" href={item.url} >
                                        <img src={item.img.src} alt="Blog Imgs" />
                                    </Link>
                                </div>
                                <div className="item--holder item--main">
                                    <Link rel="stylesheet" href={item.url} >
                                        {item.title}
                                    </Link>
                                    <Link href={item.url} className='read_more_button'><RightArrowIcon /></Link>
                                </div>
                            </div>
                        </div>
                    ))} */}
                </div>
               
            </div>
        </div>
    )
}

export default Blog;