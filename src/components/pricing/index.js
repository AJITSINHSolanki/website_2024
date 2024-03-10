import FAQ from '../faq';
import ComparePlans from './comparePlans';
import PriceBox from './priceBox';

const Pricing = () => {
  return (
    <>
      <div className="main_title_box">
        {/* <p className="sub_title">Pricing</p> */}
        <h1 className="main_title">
           ERP - <span> simple, transparent pricing.</span>
        </h1>
        <p className="content">
          We understand that every healthcare organization hospital,
          pharmaceuticals, R&D companies, laboratories, and medical
          stores, has unique needs and budgets when it comes to managing
          operations. That's why we offer flexible and affordable ERP software
          pricing models to meet different requirements.
        </p>
      </div>
      <PriceBox />
      {/* <ComparePlans /> */}
      <FAQ />
    </>
  );
};
export default Pricing;
