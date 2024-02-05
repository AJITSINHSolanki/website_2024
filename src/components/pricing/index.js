import FAQ from "../faq";
import ComparePlans from "./comparePlans";
import PriceBox from "./priceBox";

const Pricing = () => {
    return (
        <>
            <div className="main_title_box">
                <p className="sub_title">Pricing</p>
                <h1 className="main_title">A platform that grows <span>with you.</span></h1>
                <p className="content">Focus on building stronger customer relationships by connecting first-party data to every
                    tool in your tech stack with Data Pipelines, a customer data platform (CDP). No credit card required, start
                    for free.</p>
            </div>
            <PriceBox />
            <ComparePlans />
            <FAQ />
        </>
    )
}
export default Pricing;