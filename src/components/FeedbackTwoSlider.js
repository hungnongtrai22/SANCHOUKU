import Slider from "react-slick";
import Link from "next/link";
import DOMPurify from "dompurify";
import { flex } from "@mui/system";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { feedbackTwoActive } from "../sliderProps";
import { useLocales } from "../locales";
import { htmlToText } from "html-to-text";

const FeedbackTwoSlider = ({farmers}) => {
  const { t } = useLocales();
  const images = [
    "assets/images/gellery/gallery1.jpg",
    "assets/images/gellery/gallery4.jpg",
    "assets/images/gellery/portfolio3.jpg",
    "assets/images/gellery/portfolio9.jpg",
    "assets/images/gellery/portfolio4.jpg",
    "assets/images/gellery/portfolio5.jpg",
  ];
  console.log("images", images);
  return (
    <Slider {...feedbackTwoActive} className="feedback-two-active mt-20">
      {farmers?.map((item, index) => {
          const clean = DOMPurify.sanitize(item.shortIntroduce).replace(/&nbsp;/g, " ");
          

        return <div key={item._id} className="feedback-item style-two wow fadeInUp delay-0-2s">
        <div className="content-image">
          <div dangerouslySetInnerHTML={{ __html: clean }}>
            
          </div>
          <div className="image">
            <img
              src={item?.avatar[0]?.url}
              alt="Authro"
            />
             <img
              className="bg"
              src="assets/images/reviews/feedback-author-bg.png"
              alt="Background"
            /> 
          </div>
        </div>
        <div
          className="content-image"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <PhotoProvider>
            {item.gallery.map((it, ind) => {
              return (
                <PhotoView key={ind} src={it.url}>
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      overflow: "hidden",
                      borderRadius: "12px", // bo tròn 4 góc
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={it.url}
                      alt="Author"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                </PhotoView>
              );
            })}
          </PhotoProvider>
        </div>
        <div className="feedback-author">
          <div className="icon">
            <i className="flaticon-quote" />
          </div>
          <div className="title">
            <h4>
              <Link legacyBehavior href={`/farmer/${item._id}`}>{item.name}</Link></h4>
            <span>{item.nameFarm}</span>
          </div>
          <div className="ratting">
            <h6>{t("qualityFoods")}</h6>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
      </div>
      })}
     
    </Slider>
  );
};
export default FeedbackTwoSlider;
