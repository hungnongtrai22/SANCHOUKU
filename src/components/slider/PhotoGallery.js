import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useLocales } from "../../locales";
import axios from "axios";

const PhotoGallery = (props) => {
  const { t } = useLocales();
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const [images, setImages] = useState([]);

  const getImagesHandler = useCallback(
    async () => {
      // console.log("Month",date.getMonth());
      // console.log("Year",date.getFullYear());
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_HOST}/api/center/list`,
      );
      console.log("Year", data);

      setImages(data.centers[0].images);
    },
    [],
    // [date]
  );

  useEffect(() => {
    getImagesHandler();
  }, []);

  return (
    <Fragment>
      {!props.noHeader && (
        <div className="container">
          <div className="gallery-header mb-35">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="section-title mb-25">
                  <span className="sub-title mb-15">
                    {t("photo") || "Photo Gallery"}
                  </span>
                  <h2>{t("insite") || "Insite Photo Gallery"}</h2>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <div className="slider-arrows mb-25">
                  <button
                    onClick={previous}
                    className="gallery-prev slick-arrow"
                  >
                    <i className="fas fa-arrow-left" />
                  </button>
                  <button onClick={next} className="gallery-next slick-arrow">
                    <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <Slider {...settings} ref={sliderRef} className="gallery-active">
          {images.map((item, index) => (
            <div
              className={`gallery-item wow fadeInUp delay-0-${(index + 1) * 2}s`}
            >
              <img
                src={item.url}
                alt="Gallery"
                style={{
                  width: "375px",
                  height: "436px",
                  objectFit: "cover", // hoặc contain
                }}
              />
              {/* <div className="gallery-over">
                <div className="content">
                  <h4>Organic Fruits</h4>
                  <p>Fresh Food</p>
                </div>
                <Link legacyBehavior href="/portfolio-details">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};

export default PhotoGallery;
