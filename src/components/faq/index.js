import { FAQPage } from "../../utils/constant";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (key) => {
    setOpenIndex(key === openIndex ? null : key);
  };

  return (
    <div className="container">
      <div className="faq_section">
        <div className="title_faq">
          <p className="main_title">FAQs</p>
        </div>
        <div className="faq_content_inner">
          {FAQPage?.map((item, key) => (
            <div
              key={key}
              className={`faq_item ${openIndex === key ? "active" : ""}`}
            >
              <div className="faq_header" onClick={() => toggleAccordion(key)}>
                {item.title}
              </div>
              {openIndex === key && (
                <div className="faq_content">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
