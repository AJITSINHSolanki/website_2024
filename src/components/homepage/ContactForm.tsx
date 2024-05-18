import React from "react"
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { RiMailFill } from "react-icons/ri";

const ContactForm: React.FC = () => {
    return (
        <div className="w-full mt-14 sm:h-[500px] p-2 flex flex-col sm:flex-row items-start rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg">
            <div className="w-full sm:w-1/3 h-full contact-us-banner rounded-2xl">
                <div className="w-full h-full p-8 text-white">
                    <p className="text-2xl font-semibold">
                        Contact Information
                    </p>
                    <p className="text-lg font-extralight">
                        Say something to start a live chat!
                    </p>
                    <div className="mt-10 flex flex-col items-start gap-4">
                        <div className="flex items-center gap-4">
                            <BiSolidPhoneCall className="w-5 h-5" />
                            <p>+91 74340 00130</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <RiMailFill className="w-5 h-5" />
                            <p>admin@apsthreeai.ai</p>
                        </div>
                        <div className="w-full flex items-center gap-4">
                            <HiLocationMarker className="w-5 h-5" />
                            <div className="w-4/5">
                                H-203, Shukan Platinum Appt, Opp. Satyam
                                Hospital, Nr. Vandemataram City, Ahmedabad,
                                Gujarat, India - 382481
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form className="w-full sm:w-2/3 h-full p-8 flex flex-col justify-between">
                <div className="">
                    <div className="w-full flex items-center gap-10">
                        <div className="w-1/2">
                            <label htmlFor="firstName" className="text-xl">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="lastName" className="text-xl">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                            />
                        </div>
                    </div>
                    <div className="mt-8 w-full flex flex-col sm:flex-row items-center gap-10">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="email" className="text-xl">
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="phone" className="text-xl">
                                Phone No
                            </label>
                            <input
                                type="text"
                                name="phone"
                                className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                            />
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <label htmlFor="message" className="text-xl">
                            Message
                        </label>
                        <input
                            type="text"
                            name="message"
                            className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                        />
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <button
                        type="button"
                        className="w-60 px-4 py-2 rounded-lg shadow-lg text-white text-lg font-semibold bg-primary-pink"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
