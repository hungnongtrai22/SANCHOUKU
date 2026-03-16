import { Fragment, useState } from "react";
import Slider from "react-slick";
import { useLocales } from "../../locales";
const CustomerReviews = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const {t} = useLocales();
  const props = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
  };
  return (
    <Fragment>
      <div className="feedback-content-area rmb-65 wow fadeInLeft delay-0-2s">
        <div className="section-title mb-50">
          <span className="sub-title mb-20">{t('sub_title')}</span>
          <h2>{t('main_title')}</h2>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          style={{ backgroundSize: `${slideIndex}% 100%` }}
        >
          <span className="slider__label sr-only">50% completed</span>
        </div>

        <Slider {...props} className="feedback-active mt-20">
          <div className="feedback-item">
            <p>
              {t('pr')}
            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/fb-author1.png" alt="Authro" />
              <div className="title">
                <h4>Nguyen Van A</h4>
                <span>CEO &amp; Founder</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              {t('pr2')}
            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/fb-author1.png" alt="Authro" />
              <div className="title">
                <h4>Nguyen Van A</h4>
                <span>Co-Founder</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              {t('pr3')}
            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/fb-author1.png" alt="Authro" />
              <div className="title">
                <h4>Nguyen Van A</h4>
                <span>CEO &amp; Founder</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};
export default CustomerReviews;
