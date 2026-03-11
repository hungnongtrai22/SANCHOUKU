import { Fragment, useRef } from "react";
import Slider from "react-slick";
import { useLocales } from "../../locales";

const ExperienceTeam = () => {
  // Tạo ref để truy cập vào Slider instance
  const sliderRef = useRef(null);
  const {t} = useLocales();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    focusOnSelect: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className="team-header mb-35">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="section-title mb-25 text-lg-left text-center">
              <span className="sub-title mb-15">{t('meet')}</span>
              <h2>{t('experience')}</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-right text-center">
            <div className="slider-arrows mb-25">
              <button onClick={previous} className="slick-arrow team-prev">
                <i className="fas fa-arrow-left" />
              </button>
              <button onClick={next} className="slick-arrow team-next">
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Slider
        {...settings}
        ref={sliderRef} // Gán ref vào đây
        className="team-active"
      >
        <div className="team-member wow fadeInUp delay-0-2s">
          <div className="image">
            <img src="assets/images/team/member1.jpg" alt="Team Member" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <h4>Joseph C. Roberson</h4>
          <span className="designation">Senior Farmer</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>
        <div className="team-member wow fadeInUp delay-0-3s">
          <div className="image">
            <img src="assets/images/team/member2.jpg" alt="Team Member" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <h4>Timothy N. Allison</h4>
          <span className="designation">Junior Manager</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>
        <div className="team-member wow fadeInUp delay-0-4s">
          <div className="image">
            <img src="assets/images/team/member3.jpg" alt="Team Member" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <h4>Richard L. McDonald</h4>
          <span className="designation">Business Consultant</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>
        <div className="team-member wow fadeInUp delay-0-5s">
          <div className="image">
            <img src="assets/images/team/member4.jpg" alt="Team Member" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <h4>Gregory J. Vansant</h4>
          <span className="designation">CO- Founder</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>
        <div className="team-member wow fadeInUp delay-0-6s">
          <div className="image">
            <img src="assets/images/team/member1.jpg" alt="Team Member" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <h4>Joseph C. Roberson</h4>
          <span className="designation">Senior Farmer</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>
        <div className="team-member wow fadeInUp delay-0-7s">
          <div className="image">
            <img src="assets/images/team/member2.jpg" alt="Team Member" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <h4>Timothy N. Allison</h4>
          <span className="designation">Junior Manager</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>
        <div className="team-member wow fadeInUp delay-0-8s">
          <div className="image">
            <img src="assets/images/team/member3.jpg" alt="Team Member" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <h4>Richard L. McDonald</h4>
          <span className="designation">Business Consultant</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>
        <div className="team-member wow fadeInUp delay-0-9s">
          <div className="image">
            <img src="assets/images/team/member4.jpg" alt="Team Member" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <h4>Gregory J. Vansant</h4>
          <span className="designation">CO- Founder</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>
      </Slider>
    </Fragment>
  );
};

export default ExperienceTeam;