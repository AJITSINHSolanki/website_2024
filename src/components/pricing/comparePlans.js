import { ComparePlansInfo, PricingInfo, UserLimits } from '@/utils/constant';
import { PCloseImg, PRightImg } from '../../../public/images';
import Image from 'next/image';

const ComparePlans = () => {
  return (
    <div className="container">
      <div className="custio-feature-grid">
        <p className="main_title">
          Compare <span>Plans</span>
          {/* <svg width="105" height="9" viewBox="0 0 105 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="uk-position-absolute">
                        <path
                            d="M100.933 3.97463C101.971 3.52152 102.978 3.64581 103.886 4.43596C104.249 4.77127 104.694 4.72942 104.979 5.34566C105.037 5.44966 104.958 5.73059 104.958 5.73059C104.827 5.81129 104.696 5.89199 104.565 5.97269C102.032 5.95067 99.5573 6.03265 97.0821 6.11463C93.7156 6.28032 90.3065 6.05332 86.945 6.12278C85.0415 6.17844 83.0851 6.03386 81.1867 5.99329C79.2252 5.94495 77.2587 5.99284 75.2922 6.04073C73.9023 5.96607 72.5704 5.99541 71.1754 6.01698C69.3399 5.98417 67.4414 5.9436 65.5429 5.90302C63.5815 5.85468 61.615 5.90257 59.6536 5.85423C58.0698 5.8525 56.481 5.947 54.8342 5.9375C52.7419 5.96985 50.7124 6.00998 48.62 6.04233C47.0362 6.0406 45.5154 6.04663 43.9316 6.0449C42.5997 6.07424 41.3306 6.11134 39.9986 6.14068C38.4098 6.23518 36.889 6.24122 35.3001 6.33572C33.4595 6.39914 31.5509 6.55104 29.7052 6.7107C26.6483 7.01147 23.5863 7.40847 20.4665 7.70147C17.7923 7.95262 15.1131 8.3 12.439 8.55114C9.89582 8.72159 7.4156 8.8998 4.87751 8.97402C3.86025 9.0422 2.85822 8.82167 1.85112 8.69738C1.15873 8.61194 0.61256 8.15709 0.21768 7.23661C0.0491709 6.82837 -0.0563995 6.4279 0.031949 5.9545C0.120297 5.48109 0.33454 5.02323 0.654341 4.96584C1.73963 4.80919 2.77214 4.45231 3.84727 4.48813C4.22494 4.53474 4.54474 4.47735 4.92748 4.42772C7.16101 4.1222 9.45749 3.82445 11.691 3.51893C13.9875 3.22118 16.3418 3.02742 18.6332 2.82591C19.016 2.77628 19.3358 2.71889 19.7083 2.86173C20.5215 3.05895 21.2921 2.86346 22.1307 2.57951C22.4505 2.52212 22.7074 2.45696 23.0272 2.39956C24.6739 2.40906 26.2729 2.1221 27.8719 1.83513C29.0201 1.68625 30.1684 1.53738 31.3745 1.4925C33.0892 1.41354 34.8039 1.33457 36.5085 1.44808C37.3268 1.54906 38.0973 1.35358 38.9258 1.26209C39.5603 1.24354 40.2628 1.13652 40.8974 1.11797C42.9898 1.08561 45.0192 1.04549 47.1065 1.10937C49.1938 1.17325 51.3441 1.24489 53.5573 1.32431C54.6375 1.2639 55.7807 1.21125 56.8609 1.15084C57.4954 1.13229 58.067 1.10597 58.7015 1.08741C58.8903 1.11072 59.0792 1.13402 59.336 1.06886C60.7411 0.854823 62.1838 1.12972 63.5787 1.10815C64.334 1.20137 65.1574 1.20612 65.9178 1.2031C68.3878 1.21735 70.863 1.13537 73.328 1.24586C74.3401 1.27391 75.3472 1.3982 76.3544 1.52249C76.795 1.57687 77.2356 1.63124 77.6863 1.49315C78.7138 1.23251 79.794 1.1721 80.8691 1.20792C83.659 1.16478 86.3808 1.2101 89.1027 1.25543C89.5433 1.30981 89.9839 1.36418 90.4874 1.42633C91.1169 1.50401 91.6783 1.67015 92.3026 1.84407C94.3067 2.28511 96.326 2.43746 98.3402 2.68603C99.5361 2.83363 99.5991 2.8414 100.933 3.97463Z"
                            fill="currentColor"></path>
                    </svg> */}
        </p>
        <div className="feature-grid ">
          <div className="feature-grid__label_item">
            <div className="feature-grid__label"> Cost per Year/Month</div>
            <div className="feature-grid__col_2">
              {PricingInfo.map((item, index) => (
                <div key={index} className="feature_text">
                  {item.text}
                </div>
              ))}
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
              {UserLimits.map((item, index) => (
                <div key={index} className="feature_text">
                  <ul style={{ padding: '5px', textAlign: 'left' }}>
                    <li>Count : </li>
                    <li>{item.Inventory}</li>
                    <li>{item.Transaction}</li>
                    <li>{item.Notification}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {ComparePlansInfo?.map((item, key) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparePlans;
