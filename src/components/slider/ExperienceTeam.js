import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useLocales } from "../../locales";
import axios from "axios";

const ExperienceTeam = () => {
  // Tạo ref để truy cập vào Slider instance
  const sliderRef = useRef(null);
  const {t, currentLang} = useLocales();
    const [employees, setEmployees] = useState([]);


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
    slidesToShow: employees?.length > 4 ? 4: employees?.length,
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

  const getAllEmployeeHandler = useCallback(
    async () => {
      // console.log("Month",date.getMonth());
      // console.log("Year",date.getFullYear());
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_HOST}/api/employee/list`
      );
            console.log("TEST", data.employees);

      setEmployees(data.employees);
    },
    []
    // [date]
  );

  useEffect(() => {
    getAllEmployeeHandler();
  }, []);

  console.log("Test", employees);

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
        {employees?.map((item, index) => <div key={index} className="team-member wow fadeInUp delay-0-2s">
          <div className="image">
            <img src={item.image[0].url} alt="Team Member" style={{width: "220px", height: "220px"}}/>
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
          <h4>{currentLang.value === 'jp'? item.nameJP : item.name}</h4>
          <span className="designation">{currentLang.value === 'jp'? item.positionJP : item.position}</span>
          <img
            className="team-bg"
            src="assets/images/team/team-member-bg.png"
            alt="Bg"
          />
        </div>)}
      
      </Slider>
    </Fragment>
  );
};

export default ExperienceTeam;