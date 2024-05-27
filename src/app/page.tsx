import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Homepage from "./Homepage";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
    title: "Apsthreeai.ai | Cloud based ERP Software for Healthcare Industry, Pharmaceutical Industry, Hospitals",
};

export default function Home() {
    return (
        <>
            <Homepage />
            <ToastContainer
                autoClose={3000}
                position="top-right"
                theme="light"
                limit={5}
                stacked
                pauseOnFocusLoss={false}
                pauseOnHover
                className="mt-14"
            />
        </>
    );
}
