import { ComparePlansInfo, PricingInfo, UserLimits } from '@/utils/constant';
import { PCloseImg, PRightImg } from '../../../public/images';
import Image from 'next/image';
import PageLoader from '../Loader/PageLoader';

const ComparePlans = () => {
  return (
    <div className="container">
      <div className="custio-feature-grid">
        <div className="feature-grid ">
          <div className="feature-grid__label_item">
            <div className="feature-grid__label"> Cost per Year/Month</div>
            <div className="feature-grid__col_2">
              {PricingInfo.length > 0 ? (
                PricingInfo.map((item, index) => (
                  <div key={index} className="feature_text">
                    {item.text}
                  </div>
                ))
              ) : (
                <div className="feature_text" style={{ marginRight: '150px' }}>
                  {' '}
                  <PageLoader />
                </div>
              )}
            </div>
          </div>
          <div className="feature-grid__label_item">
            <div className="feature-grid__label">
              <ul>
                User limit per subscription (Yearly)
                <li>Inventory </li>
                <li>Transaction </li>
                <li>Notification </li>
              </ul>
            </div>
            <div className="feature-grid__col_2">
              {UserLimits.length > 0 ? (
                UserLimits.map((item, index) => (
                  <div key={index} className="feature_text">
                    <ul style={{ padding: '5px', textAlign: 'left' }}>
                      <li>Count : </li>
                      <li>{item.Inventory}</li>
                      <li>{item.Transaction}</li>
                      <li>{item.Notification}</li>
                    </ul>
                  </div>
                ))
              ) : (
                <div className="feature_text" style={{ marginRight: '150px' }}>
                  {' '}
                  <PageLoader />
                </div>
              )}
            </div>
          </div>

          { 
          ComparePlansInfo.length > 0 ? (
            ComparePlansInfo?.map((item, key) => (
              <div key={key} className="feature-grid__label_item">
                <div className="feature-grid__label">{item.title}</div>
                <div className="feature-grid__col_2">
                  <div className="feature_text">
                    {item.stapeOne === true ? (
                      <Image src={PRightImg} alt="close" />
                    ) : (
                      <Image src={PCloseImg} alt="right" />
                    )}
                  </div>
                  <div className="feature_text">
                    {item.stapeTwo === true ? (
                      <Image src={PRightImg} alt="close" />
                    ) : (
                      <Image src={PCloseImg} alt="right" />
                    )}
                  </div>
                  <div className="feature_text">
                    {item.stapeThree === true ? (
                      <Image src={PRightImg} alt="close" />
                    ) : (
                      <Image src={PCloseImg} alt="right" />
                    )}
                  </div>
                </div>
              </div>
            ))
          ): ( <div className="feature_text" style={{ marginRight: '150px' }}>
          <PageLoader />
        </div>)}
        </div>
      </div>
    </div>
  );
};

export default ComparePlans;
