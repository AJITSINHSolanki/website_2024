import { whatsAppShare } from "@/utils/helper";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { RiMailFill } from "react-icons/ri";
import { toast } from "react-toastify";
import * as yup from "yup";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    phone: string;
};

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Enter message here"),
    phone: yup
        .string()
        .length(10, "Phone No. should be of 10 digits")
        .required("Enter your phone number")
        .matches(/^[0-9]+$/, "Phone number is not valid"),
});

const ContactForm: React.FC = () => {
    const form = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            await axios.post(
                "/api/contact",
                {
                    name: data.firstName + " " + data.lastName,
                    email: data.email,
                    number: data.phone,
                    message: data.message,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            form.reset();
            toast.success("Message sent successfully");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            toast.error("Something went wrong");
        }
    };

    const openWhatsApp = () => {
        whatsAppShare("Hi");
    }

    
    return (
        <div className="w-full mt-14 sm:h-[500px] p-2 flex flex-col sm:flex-row items-start rounded-2xl backdrop-filter backdrop-blur-sm bg-opacity-10 bg-clip-padding bg-gray-500 shadow-lg">
            <div className="w-full sm:w-1/3 h-full contact-us-banner rounded-2xl">
                <div className="w-full h-full p-8 text-white">
                    <p className="text-2xl font-semibold">Contact Us</p>
                    <p className="text-lg font-extralight">
                        Fill the form for trying our demo
                    </p>
                    <div className="mt-10 flex flex-col items-start gap-4">
                        <div className="flex items-center gap-4 cursor-pointer" onClick={openWhatsApp}>
                            <BiSolidPhoneCall className="w-5 h-5" />
                            {<p>
                                <a href="tel:+916356561125">Call Us - +916356561125</a>
                            </p>}                            
                        </div>
                        <a href="mailto:admin@apsthreeai.ai" className="flex items-center gap-4 cursor-pointer">
                            <RiMailFill className="w-5 h-5" />
                            <span>admin@apsthreeai.ai</span>
                        </a>
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
                                First Name &nbsp;
                                <span className="text-sm text-primary-red">
                                    {form.formState.errors.firstName?.message
                                        ? `*(${form.formState.errors.firstName?.message})`
                                        : ""}
                                </span>
                            </label>
                            <input
                                type="text"
                                {...form.register("firstName")}
                                className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="lastName" className="text-xl">
                                Last Name &nbsp;
                                <span className="text-sm text-primary-red">
                                    {form.formState.errors.lastName?.message
                                        ? `*(${form.formState.errors.lastName?.message})`
                                        : ""}
                                </span>
                            </label>
                            <input
                                type="text"
                                {...form.register("lastName")}
                                className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                            />
                        </div>
                    </div>
                    <div className="mt-8 w-full flex flex-col sm:flex-row items-center gap-10">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="email" className="text-xl">
                                Email &nbsp;
                                <span className="text-sm text-primary-red">
                                    {form.formState.errors.email?.message
                                        ? `*(${form.formState.errors.email?.message})`
                                        : ""}
                                </span>
                            </label>
                            <input
                                type="text"
                                {...form.register("email")}
                                className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="phone" className="text-xl">
                                Phone No &nbsp;
                                <span className="text-sm text-primary-red">
                                    {form.formState.errors.phone?.message
                                        ? `*(${form.formState.errors.phone?.message})`
                                        : ""}
                                </span>
                            </label>
                            <input
                                type="text"
                                {...form.register("phone")}
                                maxLength={10}
                                className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                            />
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <label htmlFor="message" className="text-xl">
                            Message &nbsp;
                            <span className="text-sm text-primary-red">
                                {form.formState.errors.message?.message
                                    ? `*(${form.formState.errors.message?.message})`
                                    : ""}
                            </span>
                        </label>
                        <input
                            type="text"
                            {...form.register("message")}
                            className="w-full p-2 outline-none bg-transparent border-b border-b-black"
                        />
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center">
                    <button
                        type="button"
                        onClick={form.handleSubmit(handleSubmit)}
                        className="w-60 flex justify-center items-center px-4 py-2 rounded-lg shadow-lg text-white text-lg font-semibold bg-primary-pink"
                        disabled={isLoading}
                    >
                        <span className="flex items-center gap-2 text-center leading-normal">
                            {isLoading ? (
                                <AiOutlineLoading3Quarters className="animate-spin" />
                            ) : (
                                "Submit"
                            )}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
