import { BeatLoader } from 'react-spinners';
const { AboutConter, AboutContent } = require('@/utils/constant');

const PageLoading = () => {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '30px' }}>
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
const Counter = () => {
  return (
    <div className="about_counter_section">
      <div className="about_counter">
        {AboutConter.length > 0 ? (
          AboutConter?.map((item, key) => (
            <div key={key} className="counter_item">
              <div className="counter_item_box">
                <p className="counter_text">{item.number}</p>
                <p className="counter_title">{item.title}</p>
              </div>
            </div>
          ))
        ) : (
          <PageLoading />
        )}
      </div>
      <div className="about_content_box">
        {
            AboutContent.length > 0 ? (AboutContent?.map((item, key) => (
                <div key={key} className="about_content_item">
                  <div className="about_content_item_box">
                    <p className="title_box">{item.title}</p>
                    <p className="text_sub">{item.subText}</p>
                  </div>
                </div>
              ))) : ( <PageLoading />)
        }
        
      </div>
    </div>
  );
};

export default Counter;
