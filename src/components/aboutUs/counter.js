const { AboutConter, AboutContent } = require("@/utils/constant")

const Counter = () => {
    return (
        <div className="about_counter_section">
            <div className="about_counter">
                {AboutConter?.map((item, key) => (
                    <div key={key} className="counter_item">
                        <div className="counter_item_box">
                            <p className="counter_text">{item.number}</p>
                            <p className="counter_title">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="about_content_box">
                {AboutContent?.map((item, key) => (
                    <div key={key} className="about_content_item">
                        <div className="about_content_item_box">
                            <p className="title_box">{item.title}</p>
                            <p className="text_sub">{item.subText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Counter;