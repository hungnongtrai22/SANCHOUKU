import Link from "next/link";
// import ClientLogoSlider from "../../../src/components/ClientLogoSlider";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

import ClientLogoSlider from "../../../src/components/ClientLogoSlider";
import FeedbackTwoSlider from "../../../src/components/FeedbackTwoSlider";
import PageBanner from "../../../src/components/PageBanner";
import ExperienceTeam from "../../../src/components/slider/ExperienceTeam";
import PhotoGallery from "../../../src/components/slider/PhotoGallery";
import Layout from "../../../src/layout/Layout";
import { useLocales } from "../../../src/locales";
import FarmGallery from "../../../src/components/slider/FarmGallery";
const FramerDetail = () => {
  const { t } = useLocales();

  const [farmer, setFarmer] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady || !id) return;

    const getFarmer = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BE_HOST}/api/farmer/${id}`,
        );
        setFarmer(data.farmer);
      } catch (err) {
        console.error(err);
      }
    };

    getFarmer();
  }, [router.isReady, id]);
  if (!router.isReady) return null;

  const aboutFarmContent = DOMPurify.sanitize(farmer?.aboutFarmContent);
  return (
    <Layout>
      <PageBanner pageName={t("aboutUs")} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">{t("aboutCompany")}</span>
                  <h2>{farmer?.aboutFarmTitle}</h2>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: aboutFarmContent }}
                ></div>
                <div className="row mt-30">
                  {farmer?.category?.map((item, index)=><div key={index} className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a>
                            {item}
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>)}
                  {/* <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          <a>
                            {t("nuds")} &amp; {t("mushroom")}
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-eggs-1" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          {t("farmingProduct")}
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-social-care" />
                      </div>
                      <h4>
                        <Link legacyBehavior href="/service-details">
                          {t("driedFruit")}
                        </Link>
                      </h4>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="/assets/images/about/about-page.jpg"
                  alt="About"
                />
                <a
                  href={farmer?.video[0].url}
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <img
                  className="bg-shape"
                  src="/assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      <section className="feature-section pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="number">01</span>
                  <div className="image">
                    <img
                      src="/assets/images/features/feature1.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>{t("nuds")}</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    {t("read_more")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-two wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="number">02</span>
                  <div className="image">
                    <img
                      src="/assets/images/features/feature2.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>{t("driedFruit")}</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    {t("read_more")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="number">03</span>
                  <div className="image">
                    <img
                      src="/assets/images/features/feature3.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>
                    {t("agriculture")} &amp; {t("farming")}
                  </h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    {t("read_more")} <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                <img
                  className="image"
                  src="/assets/images/about/about-page-left.jpg"
                  alt="About"
                />
                <img
                  className="about-over"
                  src="/assets/images/about/about-left-over.png"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">{t("why")}</span>
                  <h2>
                    {farmer?.whyTitle}
                  </h2>
                </div>
                <div className="about-features mt-60">
                  <div className="row">
                    {farmer?.whyContent?.map((item, index)=><div key={index} className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-5s">
                        <span className="number">{index + 1}</span>
                        <div className="icon">
                          <i className="flaticon-offer" />
                        </div>
                        <h4>
                          <Link legacyBehavior href="/service-details">
                            {item.label}
                          </Link>
                        </h4>
                        <p>{item.value}</p>
                        <img src="/assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>)}
                    {/* <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-6s">
                        <span className="number">2</span>
                        <div className="icon">
                          <i className="flaticon-return-box" />
                        </div>
                        <h4>
                          <Link legacyBehavior href="/service-details">
                            {t("return")}
                          </Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="/assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="about-feature-item wow fadeInUp delay-0-7s">
                        <span className="number">3</span>
                        <div className="icon">
                          <i className="flaticon-24-hours" />
                        </div>
                        <h4>
                          <Link legacyBehavior href="/service-details">
                            {t("online")}
                          </Link>
                        </h4>
                        <p>Sit amet consectetur adipis cing elit sed eiusmoe</p>
                        <img src="/assets/images/about/arrow.png" alt="Arrow" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="/assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="/assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>
      {/* About Section End */}
      {/* Gallery Area Start */}
      <section className="gallery-area pt-90">
        <FarmGallery gallery={farmer?.gallery}/>
      </section>
      {/* Gallery Area End */}
      {/* Team Area Start */}
      {/* <section className="team-area pt-50 rpt-20 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section> */}
      {/* Team Area End */}

      {/* Feedback Section Start */}
      {/* <section className="feedback-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <span className="sub-title mb-20">{t('customerReview')}</span>
            <h2>{t('valuable')}</h2>
          </div>
        </div>
        <FeedbackTwoSlider />
      </section> */}
      {/* Feedback Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="/assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="/assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="/assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="/assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="/assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="/assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div>
    </Layout>
  );
};
export default FramerDetail;
