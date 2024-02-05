import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
  });

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    ``
    // const sanitizedValue = value.replace(/[^A-Za-z\s.,!?'"()-]/g, '');

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.number) {
      newErrors.number = "Phone number is required";
    }

    if (!formData.query) {
      newErrors.query = "Query is required";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e, "eeeeeee");
    if (validateForm()) {
      console.log("Form data:", formData);
      return await fetch("/api/sendMail", {
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
        .then((response) => response.json())
        .then((success) => {
          console.log(success, "sucsdsd");
          setFormData({
            name: "",
            email: "",
            number: "",
            query: "",
          })
          setSuccessMessage('Thank you for inquiry')
          if (success.error == "") {
          }
        })
        .catch((error) => {
          console.log(error, "erororo");
        });
    } else {
    }
  };

  return (
    <div id="contact" className="contact_section">
      <div className="container">
        <div className="title_contact">
          <p className="sub_title">Stay Connected</p>
          <p className="main_title">
            <span>Contact Us</span>
          </p>
        </div>

        <div className="contact_box">
          <div className="map_box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.0682003862453!2d72.5426400243274!3d23.094599117517316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83182ca2717f%3A0xf8eb0fb8aa61b3c1!2sSHUKAN%20PLATINUM%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1699288887709!5m2!1sen!2sin"
              border="0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form className="contact_form" onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="name" className="text-hide">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name *"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form_group">
              <label htmlFor="email" className="text-hide">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email *"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form_group">
              <label htmlFor="number" className="text-hide">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="Your Phone Number *"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
              {errors.number && <span className="error">{errors.number}</span>}
            </div>
            <div className="form_group">
              <label htmlFor="query" className="text-hide">
                Query
              </label>
              <textarea
                name="query"
                id="query"
                cols="30"
                rows="5"
                placeholder="Your query *"
                value={formData.query}
                onChange={handleChange}
              ></textarea>
              {errors.query && <span className="error">{errors.query}</span>}
            </div>

            {successMessage &&
              <div className="success_message_box">
                <div className="icon">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_253_16)">
                      <path d="M13.7066 3.29297C14.0973 3.68359 14.0973 4.31797 13.7066 4.70859L5.70664 12.7086C5.31602 13.0992 4.68164 13.0992 4.29102 12.7086L0.291016 8.70859C-0.0996094 8.31797 -0.0996094 7.68359 0.291016 7.29297C0.681641 6.90234 1.31602 6.90234 1.70664 7.29297L5.00039 10.5836L12.2941 3.29297C12.6848 2.90234 13.3191 2.90234 13.7098 3.29297H13.7066Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_253_16">
                        <rect width="14" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="text">
                  <p>Success</p>
                  {successMessage}
                </div>

              </div>
            }
            <button type="submit" className="button_p">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
