import Image from "next/image";
import Slider from "react-slick";
import { Blog_1, Blog_2 } from "../../../public/images";
import Link from "next/link";

const BlogSection = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        easing: "ease-in",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const blogPosts = [
        {
            image: Blog_1,
            title: "How ERP Software Changed the Healthcare Industries",
            href: "/blogs/1",
        },
        {
            image: Blog_2,
            title: "Software is the backbone of New age Healthcare",
            href: "/blogs/ERP-software-for-the-healthcare-industry",
        }    ];

    return (
        <div className="w-full py-6 flex items-center">
            <Slider className="w-full p-4" {...settings}>
                {blogPosts.map((post, index) => (
                    <Link
                        href={post.href}
                        key={index}
                        className="w-full sm:w-[calc(50%_-_0.5rem)] sm:px-5"
                    >
                        <div className="shrink-0 p-4 rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 sm:shadow-lg cursor-pointer">
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="h-80 w-full rounded-2xl object-cover"
                            />
                            <p className="mt-4 text-lg sm:text-xl font-semibold">
                                {post.title}
                            </p>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
};

export default BlogSection;
