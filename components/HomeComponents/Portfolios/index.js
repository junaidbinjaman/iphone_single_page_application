import style from "./Portfolios.module.css";
import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import sliderCss from "./style.module.css";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const UseStyle = makeStyles({
  heading: {
    fontSize: 50,
    fontWeight: "bolder",
    color: "#444",
  },
});

const myLoader = () => {
  return "https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg";
};

const index = () => {
  const classes = UseStyle();

  return (
    <div className={style.conatiner}>
      <div className={style.background_heading}>
        <h1>Previous Works</h1>
      </div>
      <div className={style.heading}>
        <h1 className={classes.heading}>Previous Works</h1>
        <div className={sliderCss.slider_container}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
          >
            <SwiperSlide
              style={{
                backgroundImage:
                  "url(https://tidbits.com/uploads/2020/11/M1-product-card.jpg)",
              }}
              className={sliderCss.swiper_slide}
            >
              <div>
                <h1>Get a M1 Cheap</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage:
                  "url(https://www.macworld.com/wp-content/uploads/2021/07/ipad-Pro-2021-sizes-2.jpg?quality=50&strip=all&w=1024)",
              }}
              className={sliderCss.swiper_slide}
            >
              <div>
                <h1>iPad Pro</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage:
                  "url(https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/04/apple-pencil-1-and-2-hero1.jpeg)",
              }}
              className={sliderCss.swiper_slide}
            >
              <di>
                <h1>Apple Pencil</h1>
              </di>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg)",
              }}
              className={sliderCss.swiper_slide}
            >
              <di>
                <h1>Advanced Camera</h1>
              </di>
            </SwiperSlide>
            <SwiperSlide
              style={{
                backgroundImage:
                  "url(https://english.sakshi.com/sites/default/files/article_images/2020/11/8/iphone-1604816535.jpg)",
              }}
              className={sliderCss.swiper_slide}
            >
              <di>
                <h1>iPhone 12 Pro Max</h1>
              </di>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default index;
