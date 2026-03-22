import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../src/components/Pagination";

import ClientLogoSlider from "../src/components/ClientLogoSlider";
import Counter from "../src/components/Counter";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { useLocales } from "../src/locales";
const Info = () => {
  const { t } = useLocales();
  const [farmers, setNewFarmers] = useState([]);
  const getAllFarmerHandler = useCallback(
    async () => {
      // console.log("Month",date.getMonth());
      // console.log("Year",date.getFullYear());
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_HOST}/api/farmer/list`
      );
            console.log("TEST", data.farmers);

      setNewFarmers(data.farmers);
    },
    []
    // [date]
  );

  useEffect(() => {
    getAllFarmerHandler();
  }, []);
  return (
    <Layout>
      <PageBanner pageName={t("info")} />
      {/* Feedback Section Start */}
      <section className="feedback-section pt-130 rpt-90 pb-0 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">{t("farmer")}</span>
            <h2>{t("info_farmer")}</h2>
          </div>
        </div>
        <FeedbackTwoSlider farmers={farmers}/>
      </section>
      {/* Feedback Section End */}

      <section className="who-we-are rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="who-we-are-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">{t("standard")}</span>
                  <h2>{t("standard_cgap")}</h2>
                </div>
                <p>{t("cgap_content")}</p>
                <ul className="list-style-two pt-10 pb-45">
                  <li>{t("cgap_subcontent1")}</li>
                  <li>{t("cgap_subcontent2")}</li>
                  <li>{t("cgap_subcontent3")}</li>
                  <li>{t("cgap_subcontent4")}</li>
                  {/* <li>{t('cgap_subcontent5')}</li>
                  <li>{t('cgap_subcontent6')}</li>
                  <li>{t('cgap_subcontent7')}</li>
                  <li>{t('cgap_subcontent8')}</li>
                  <li>{t('cgap_subcontent9')}</li>
                  <li>{t('cgap_subcontent10')}</li>
                  <li>{t('cgap_subcontent11')}</li>
                  <li>{t('cgap_subcontent12')}</li>
                  <li>{t('cgap_subcontent13')}</li>
                  <li>{t('cgap_subcontent14')}</li>
                  <li>{t('cgap_subcontent15')}</li>
                  <li>{t('cgap_subcontent16')}</li>
                  <li>{t('cgap_subcontent17')}</li>
                  <li>{t('cgap_subcontent18')}</li> */}
                </ul>
                <a
                  href="/assets/files/TC C-GAP.xlsx"
                  download
                  className="read-more"
                >
                  {t("read_more")} <i className="fas fa-angle-double-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="who-we-are-image wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/who-we-are.png"
                  alt="Who We Are"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="who-we-are-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/who-we-are-1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/team/team-profile-bg.png"
            alt="Shape"
          />
        </div>
      </section>

      {/* Team Area End */}

      {/* Counter Area Start */}
      {/* <div className="counter-area rel z-2 bg-light-green text-white pt-60 pb-25">
        <div className="container">
          <div className="counter-wrap">
            <div className="counter-item">
              <span
                className="count-text k-plus"
                data-speed={3000}
                data-stop={35}
              >
                <Counter end={35} />
              </span>
              <span>Saticfied Customer</span>
            </div>
            <div className="counter-item">
              <span
                className="count-text k-plus"
                data-speed={3000}
                data-stop={48}
              >
                <Counter end={48} />
              </span>
              <span>Sale Products</span>
            </div>
            <div className="counter-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={23}
              >
                <Counter end={23} />
              </span>
              <span>Years Experience</span>
            </div>
            <div className="counter-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={67}
              >
                <Counter end={67} />
              </span>
              <span>Team Members</span>
            </div>
            <div className="counter-item">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={38}
              >
                <Counter end={38} />
              </span>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
      </div> */}
      {/* Counter Area End */}
      {/* Team Profile Section Start */}
      {/* <section className="team-profile rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="team-profile-image rmb-65 wow fadeInLeft delay-0-2s">
                <img src="assets/images/team/team-profile.jpg" alt="Profile" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-profile-content wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Skills Experience</span>
                  <h2>We Are Professional &amp; Experience For Farming</h2>
                </div>
                <p>
                  Sed perspiciatis unde omnis natus voluptatem accusantiu dolore
                  mque laudantium totam rem aperiam eaue abillo inventor
                  veritatis architecto beatae vitae dicta sunt explicabo epsam
                </p>
                <div className="circle-counter">
                  <div className="team-skill-item">
                    <ProgressBar color={"#76a713"} value={"76"} />
                    <h4>Agriculture and Farming</h4>
                  </div>
                  <div className="team-skill-item">
                    <ProgressBar
                      color={"#ff7800"}
                      value={"83"}
                      extraCls={"two"}
                    />
                    <h4>Vegetables and Fruits</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="team-profile-bg"
          src="assets/images/team/team-profile-bg.png"
          alt="bg"
        />
      </section> */}
      {/* Team Profile Section End */}

      {/* Gallery Area Start */}
      <section className="gallery-area pt-100 rpt-100">
        <PhotoGallery />
      </section>
      {/* Gallery Area End */}

      <section className="news-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">{t("history")}</span>
            {/* <h2>{t("info_farmer")}</h2> */}
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center blog-grid">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news1.jpg" alt="News" />
                  <span className="date">
                    <b>25</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news2.jpg" alt="News" />
                  <span className="date">
                    <b>28</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news3.jpg" alt="News" />
                  <span className="date">
                    <b>30</b> July
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news4.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news5.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news6.jpg" alt="News" />
                  <span className="date">
                    <b>09</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news7.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news8.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news9.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link legacyBehavior href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination justify-content-center flex-wrap">
            <Pagination
              paginationCls={".blog-grid .col-xl-4"}
              defaultSort={6}
            />
          </ul>
        </div>
        <div className="news-shapes">
          <img
            className="onion"
            src="assets/images/shapes/onion.png"
            alt="Onion"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="leaf-left"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="litchi"
            src="assets/images/shapes/litchi.png"
            alt="Litchi"
          />
        </div>
      </section>
      {/* 
       <section className="team-page-area pt-130 rpt-100 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section> */}

      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div>
    </Layout>
  );
};
export default Info;
