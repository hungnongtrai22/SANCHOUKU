import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../../../src/components/PageBanner";
import Layout from "../../../src/layout/Layout";
import { newsSlider } from "../../../src/sliderProps";
import { useLocales } from "../../../src/locales";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const DiaryDetails = () => {
  const { t, currentLang } = useLocales();
  const formatDateVI = (dateInput) => {
    const date = new Date(dateInput);

    const day = date.getDate();
    const month = date.getMonth() + 1; // tháng bắt đầu từ 0
    const year = date.getFullYear();

    return `${day} Thg ${month}, ${year}`;
  };

  const formatDateJP = (dateInput) => {
    const date = new Date(dateInput);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}年${month}月${day}日`;
  };

  const [diary, setDiary] = useState(null);
  const [diaries, setNewDiaries] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady || !id) return;

    const getDiary = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BE_HOST}/api/diary/${id}`,
        );

        setDiary(data.diary);
      } catch (err) {
        console.error(err);
      }
    };

    getDiary();
  }, [router.isReady, id]);

  const getAllDiariesHandler = useCallback(
    async () => {
      // console.log("Month",date.getMonth());
      // console.log("Year",date.getFullYear());
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BE_HOST}/api/diary/list`,
      );
      // console.log("TEST", data.diaries);

      setNewDiaries(data.diaries);
    },
    [],
    // [date]
  );

  useEffect(() => {
    getAllDiariesHandler();
  }, []);
  if (!router.isReady) return null;
  console.log(diary);
  const clean = DOMPurify.sanitize(
    currentLang.value === "jp" ? diary?.detailJP : diary?.detail,
  ).replace(/&nbsp;/g, " ");
  return (
    <Layout>
      <PageBanner pageName={t("history")} />
      <section className="news-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 mt-65">
              <div className="blog-details-content">
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">
                      {currentLang === "jp"
                        ? formatDateJP(diary?.date)
                        : formatDateVI(diary?.date)}
                    </a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" />
                    {/* <a href="#">Comments (5k)</a> */}
                  </li>
                </ul>
                <h3 className="title">
                  {currentLang === "jp" ? diary?.titleJP : diary?.title}
                </h3>
                <div className="image my-35">
                  <img src={diary?.avatar[0].url} alt="Blog" />
                </div>
                {/* <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  cones sequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui do lorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
                <br />
                <h4>Ultimate Digital Clean-Up Checklist Are You Prepared</h4>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam estqui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam
                </p>
                <ul className="list-style-one mt-25">
                  <li>The Complete Guide To Switching From HTTP To HTTPS</li>
                  <li>
                    Ultimate Digital Clean-Up Checklist: Are You Prepared For
                    The New Year?
                  </li>
                  <li>
                    How To Roll Out New Features Without Hurting Loyal Users
                  </li>
                  <li>Character Sets: The Ultimate Guide</li>
                  <li>How To Choose A Font — A Step-By-Step Guide!</li>
                </ul>
                <blockquote>
                  Use Google CrUX To Analyze And Compare Performance Of JS
                  Frameworks
                </blockquote>
                <p>
                  No one rejects, dislikes, or avoids pleasure itself, because
                  it is pleasure, but because those who do not know how to
                  pursue pleasure rationally encounter consequences that are
                  extremely painful son agains there anyone who loves or pursues
                  or desires to obtain pain{" "}
                </p> */}
                <div dangerouslySetInnerHTML={{ __html: clean }}></div>
                <div className="tag-share mt-35 pt-20 pb-10 mb-55">
                  <div className="tags">
                    <h6>{t("topic")} : </h6>
                    <Link href="/blog-grid">
                      {currentLang === "jp" ? diary?.topicJP : diary?.topic}
                    </Link>
                    {/* <Link legacyBehavior href="/blog-grid">
                      Vegetables
                    </Link>
                    <Link legacyBehavior href="/blog-grid">
                      Fruits
                    </Link> */}
                  </div>
                  <div className="social-style-one">
                    <h6>{t("share")} : </h6>
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-facebook-f" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-twitter" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-youtube" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-instagram" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="next-prev-post mb-55">
                  {diaries.length > 0 && (
                    <div className="prev-post wow fadeInLeft delay-0-2s">
                      <div className="image">
                        <img src={diaries[0].avatar[0].url} />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href={`/diary/${diaries[0]._id}`}>
                            {currentLang === "jp"
                              ? diaries[0].titleJP
                              : diaries[0].title}
                          </Link>
                        </h6>
                        <span className="name">
                          {currentLang === "jp"
                            ? diaries[0].topicJP
                            : diaries[0].topic}
                        </span>
                      </div>
                    </div>
                  )}
                  <Link legacyBehavior href="/info">
                    <a className="show-all">
                      <i className="far fa-ellipsis-h" />
                      <i className="far fa-ellipsis-h" />
                      <i className="far fa-ellipsis-h" />
                    </a>
                  </Link>
                  {diaries.length > 1 && (
                    <div className="next-post wow fadeInRight delay-0-2s">
                      <div className="image">
                        <img src={diaries[1].avatar[0].url} />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href={`/diary/${diaries[1]._id}`}>
                            {currentLang === "jp"
                              ? diaries[1].titleJP
                              : diaries[1].title}
                          </Link>
                        </h6>
                        <span className="name">
                          {currentLang === "jp"
                            ? diaries[1].topicJP
                            : diaries[1].topic}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <hr />
                <div className="section-title mt-50 mb-40 text-center">
                  <h3>{t("history")}</h3>
                </div>
                <Slider {...newsSlider} className="news-slider mb-60">
                  {diaries.length > 0 &&
                    diaries.map((item, index) => (
                      <div
                        className={`news-item wow fadeInUp delay-0-${index % 2 === 0 ? "2" : "4"}s`}
                      >
                        <div className="image">
                          <img
                            src={item.avatar[0].url}
                            alt="News"
                          />
                          <span className="date">
                            {currentLang === 'jp' && <><b>{new Date(item?.date).getDate()} 日</b> {new Date(item?.date).getDate()} 月</>}
                            {currentLang !== 'jp' && <><b>{new Date(item?.date).getDate()}   </b> Th {new Date(item?.date).getMonth() + 1}</>}
                          </span>
                        </div>
                        <div className="content">
                          <span className="sub-title">{currentLang === "jp" ? item?.topicJP : item?.topic}</span>
                          <h4>
                            <Link  href={`/diary/${item?._id}`}>
                               {currentLang === "jp" ? item?.titleJP : item?.title}
                            </Link>
                          </h4>
                          <Link legacyBehavior href={`/diary/${item?._id}`}>
                            <a className="read-more">
                              {t("read_more")}{" "}
                              <i className="fas fa-angle-double-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    ))}
                </Slider>
                <hr />
                {/* <form
                  onSubmit={(e) => e.preventDefault()}
                  id="comment-form"
                  className="comment-form pt-45 wow fadeInUp delay-0-2s"
                  name="comment-form"
                  action="#"
                  method="post"
                >
                  <div className="section-title mb-35">
                    <span className="sub-title mb-15">Send Message</span>
                    <h3>Leave a Comments</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="full-name"
                          name="full-name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="blog-email"
                          name="blog-email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email Address"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="website"
                          name="website"
                          className="form-control"
                          defaultValue=""
                          placeholder="Website"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Comments"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn style-two">
                          Send Comments
                          <i className="fas fa-angle-double-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="blog-sidebar mt-65">
                <div className="widget widget-about wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/widgets/about.jpg" alt="Author" />
                  </div>
                  <h4>Somalia D. Silva</h4>
                  <span className="sub-title">CO-Founder</span>
                  <p>
                    Amet consecte adipiscing elitse doeiusmod tempor incididunt
                    labre et dolore magna aliqua lacus{" "}
                  </p>
                  <div className="social-style-one">
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-facebook-f" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-twitter" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-youtube" />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a>
                        {" "}
                        <i className="fab fa-instagram" />
                      </a>
                    </Link>
                  </div>
                  <img
                    src="assets/images/widgets/about-bg.png"
                    alt="BG"
                    className="bg"
                  />
                </div>
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder="Search keywords"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Category
                  </h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        Organic Fruits
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        Fresh Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        Crisp Bread &amp; Cake
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        Sea Foods
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        Chiken Eggs
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        Milk &amp; Meat
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Recent News
                  </h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget3.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            Design And Buildsc Newsletter Mind
                          </Link>
                        </h6>
                        <span className="name">By Westfield</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget1.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            Universal Principles User Experience
                          </Link>
                        </h6>
                        <span className="name">By Braswell</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget2.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link legacyBehavior href="/blog-details">
                            Roll Out New Featuc Without Hurting
                          </Link>
                        </h6>
                        <span className="name">By Mendonca</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Popular Tags
                  </h4>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="/blog-grid">
                      Farming
                    </Link>
                    <Link legacyBehavior href="/blog-grid">
                      Organic
                    </Link>
                    <Link legacyBehavior href="/blog-grid">
                      Vegetables
                    </Link>
                    <Link legacyBehavior href="/blog-grid">
                      Fresh Food
                    </Link>
                    <Link legacyBehavior href="/blog-grid">
                      Fruits
                    </Link>
                    <Link legacyBehavior href="/blog-grid">
                      Sea Foods
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default DiaryDetails;
