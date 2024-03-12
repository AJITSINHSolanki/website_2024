import React, { useEffect, useRef, useState } from 'react';

const Features = () => {
  const myRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (myRef.current) {
        const top = myRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div
      id="about-us"
      ref={myRef}
      className={`about_section fade-in ${isVisible ? 'active' : ''}`}
    >
      <div className="container">
        <div className="technology_section_pri">
          <p className="main_title">
            Application <span>Features </span>
          </p>
        </div>

        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div style={{ display: 'flex', gap: '50px' }}>
            <div style={{ alignItems: 'center' }}>
              <div style={{ width: '200px', textAlign: 'center' }}>
                <span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="3.5em"
                    width="3.5em"
                  >
                    <path d="M14.5 3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" />
                    <path d="M7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0zM7 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z" />
                  </svg>
                </span>
              </div>

              <div style={{ width: '200px', textAlign: 'center' }}>
                <p>Inventory Management & </p>
                <p>Tracking</p>
              </div>
            </div>
            <div style={{ alignItems: 'center' }}>
              <div style={{ width: '200px', textAlign: 'center' }}>
                <span>
                  <svg
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="3.5em"
                    width="3.5em"
                  >
                    <path d="M13 16H7a1 1 0 000 2h6a1 1 0 000-2zm-4-6h2a1 1 0 000-2H9a1 1 0 000 2zm12 2h-3V3a1 1 0 00-.5-.87 1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0l-3 1.72-3-1.72a1 1 0 00-1 0A1 1 0 002 3v16a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zM5 20a1 1 0 01-1-1V4.73l2 1.14a1.08 1.08 0 001 0l3-1.72 3 1.72a1.08 1.08 0 001 0l2-1.14V19a3 3 0 00.18 1zm15-1a1 1 0 01-2 0v-5h2zm-7-7H7a1 1 0 000 2h6a1 1 0 000-2z" />
                  </svg>
                </span>
              </div>

              <div style={{ width: '200px', textAlign: 'center' }}>
                <p>Billing – Bill/Invoice, </p>
                <p> Tax and Quick Bill Management System</p>
              </div>
            </div>
            <div style={{ alignItems: 'center' }}>
              <div style={{ width: '200px', textAlign: 'center' }}>
                <span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="3.5em"
                    width="3.5em"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                    <path d="M11 3 H13 A2 2 0 0 1 15 5 V5 A2 2 0 0 1 13 7 H11 A2 2 0 0 1 9 5 V5 A2 2 0 0 1 11 3 z" />
                    <path d="M9 17v-5M12 17v-1M15 17v-3" />
                  </svg>
                </span>
              </div>

              <div style={{ width: '200px', textAlign: 'center' }}>
                <p>Analytics </p>
                <p> Report</p>
              </div>
            </div>
            <div style={{ alignItems: 'center' }}>
              <div style={{ width: '200px', textAlign: 'center' }}>
                <span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="3.5em"
                    width="3.5em"
                  >
                    <path d="M21 5 A9 3 0 0 1 12 8 A9 3 0 0 1 3 5 A9 3 0 0 1 21 5 z" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </span>
              </div>

              <div style={{ width: '200px', textAlign: 'center' }}>
                <p>Centralized </p>
                <p> Database</p>
              </div>
            </div>
            <div style={{ alignItems: 'center' }}>
              <div style={{ width: '200px', textAlign: 'center' }}>
                <span>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="3.5em"
                    width="3.5em"
                  >
                    <path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 01-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 01140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0166.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z" />
                  </svg>
                </span>
              </div>

              <div style={{ width: '200px', textAlign: 'center' }}>
                <p>Cloud Based </p>
                <p>Management </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
