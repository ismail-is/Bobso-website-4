import React from 'react';
import CountUp from 'react-countup';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
  require('./../../images/gallery/pic8.jpg'),
  require('./../../images/gallery/pic6.jpg'),
  require('./../../images/gallery/pic9.jpg'),
  require('./../../images/gallery/pic2.jpg'),
  require('./../../images/gallery/pic3.jpg'),
];
const img1 = require('./../../images/background/ptn-1.png');
const bnr1 = require('./../../images/background/bg-map.png');

class About2 extends React.Component {
  outline = (size) => ({
    fontSize: size,
    fontWeight: 800,
    color: 'transparent',
    WebkitTextStroke: '1.5px #000',
    display: 'inline-block',
    lineHeight: 1,
  });

  render() {
    const plusStyle = { color: 'red', WebkitTextStroke: 0, marginLeft: 4 };

    return (
      <>
        {/* ───────────── INTERNAL CSS ───────────── */}
        <style>{`
          .about2-counter-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            text-align: center;
          }

          @media (min-width: 768px) {
            .about2-counter-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .about2-counter-grid .mt-icon-box-wraper {
            padding: 0.5rem 0;
          }

          @media (max-width: 767.98px) {
            .services-half-section-bottom {
              margin-top: -120px !important;
            }
          }
        `}</style>

        {/* ───────────── SECTION ───────────── */}
        <div
          className="section-full p-t80 p-b50 bg-white mobile-page-padding"
          style={{ backgroundColor: 'white' }}
        >
          <div className="services-half-section-top">
            <div className="container">{/* Optional top content */}</div>
          </div>

          {/* ───── COUNTER SECTION ───── */}
          <div
            className="services-half-section-bottom p-t80 p-b50 bg-white"
            style={{ marginTop: '-440px' }}
          >
            <div className="container">
              <div className="about2-counter-grid">
                {/* 1 */}
                <div className="text-primary mt-icon-box-wraper">
                  <div className="icon-content">
                    <div className="counter" style={this.outline(60)}>
                      <CountUp end={45} duration={5} />
                      <span style={plusStyle}>+</span>
                    </div><br/>
                    <span className="font-16 fw-semibold d-block">
                      Drilling Fields
                    </span>
                  </div>
                </div>

                {/* 2 */}
                <div className="text-primary mt-icon-box-wraper">
                  <div className="icon-content">
                    <div className="counter" style={this.outline(60)}>
                      <CountUp end={8} duration={5} />k
                      <span style={plusStyle}>+</span>
                    </div><br/>
                    <span className="font-16 fw-semibold d-block">
                      Crane Equipments
                    </span>
                  </div>
                </div>

                {/* 3 */}
                <div className="text-primary mt-icon-box-wraper">
                  <div className="icon-content">
                    <div className="counter" style={this.outline(60)}>
                      <CountUp end={2} duration={5} />k
                      <span style={plusStyle}>+</span>
                    </div><br/>
                    <span className="font-16 fw-semibold d-block">
                      Metal Factory
                    </span>
                  </div>
                </div>

                {/* 4 */}
                <div className="text-primary mt-icon-box-wraper">
                  <div className="icon-content">
                    <div className="counter" style={this.outline(60)}>
                      <CountUp end={6} duration={5} />k
                      <span style={plusStyle}>+</span>
                    </div><br/>
                    <span className="font-16 fw-semibold d-block">
                      Special Machinery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ───── END COUNTER SECTION ───── */}
        </div>
      </>
    );
  }
}

export default About2;
