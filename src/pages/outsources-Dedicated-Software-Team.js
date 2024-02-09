import Layout from "@/components/layout";
import Head from "next/head";
import { Service11, Service13, Service2,ServiceDetails } from "../../public/images";
import ServicesSlider from "@/components/servicesSlider";

const OutsourceTeam = () => {
    return(
        // <div>
        //   DoctorApplications 
        // </div>

        <>
        <Head>
            <title>Outsources Dedicated Software Team</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div className="services_details_box">
                <p className="title">Outsources Dedicated Software Team</p>
                <p className="content">Experience top-tier expertise with our outsourced dedicated software team, delivering tailored solutions and innovative development services for your project's success.</p>
            </div>

            <div className="container">
                <div className="detail_s_box">
                    <img src={Service13.src} alt="Product and Web Development" />
                </div>
            </div>
            <div className="service-detail">
            <div className="container">
                <div className="about-service7-body">
                    <div className="about-service7-content">
                        <p className="section-header">SOFTWARE DEVELOPMENT</p>
                        <p className="section-title">Engine of progress</p>
                        <div className="content_info">
                            <p>Software development is the stab process of designing, programming, solids to testing, and maintaining software as the applications and systems. It empowers us to turn ideas</p>
                            <p>Software developers, often rest referred to as coders or programmers, are sat the creative minds behind the digital innovations we use daily. They possess a unique blend of</p>
                            <p>Developers write lines of code by state using programming languages such as Python, Java, JavaScript, and C++, </p>
                        </div>
                    </div>
                    <div className="about-service7-img">
                        <img src={ServiceDetails.src} alt="ServiceDetails" />
                    </div>
                </div>
            </div>
            </div>
           
            <ServicesSlider />
        </Layout>
    </>
    )
}

export default OutsourceTeam;