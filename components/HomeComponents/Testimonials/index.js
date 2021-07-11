import style from "./Testimonial.module.css";
import { Typography, makeStyles, Avatar } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import slider from "./style.module.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const UseStyles = makeStyles({
  heading: {
    fontSize: 50,
    fontWeight: "bolder",
    color: "#444",
  },
  caption: {
    fontSize: 18,
    color: "#444",
    marginTop: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    border: "2px solid gray",
    boxShadow: "1px 0 8px 0 rgb(0, 0, 0, 0.25)",
    marginTop: -20,
    marginBottom: 30,
  },
  reviewName: {
    color: "#444",
  },
  reviewText: {
    color: "#444",
    marginTop: 4,
    marginBottom: 7,
  },
  rating: {
    color: "#FDCC0D",
    fontSize: 30,
  },
});

const index = () => {
  const classes = UseStyles();
  return (
    <div className={style.testimonial_container}>
      <div className={style.background_heading}>
        <h1>What Our Client Says</h1>
      </div>
      <div className={style.heading}>
        <Typography variant="h3" className={classes.heading}>
          What Our Clinet Says
        </Typography>
      </div>
      <div className={style.content}>
        <Typography variant="caption" className={classes.caption}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas fuga
          reiciendis id incidunt exercitationem fugiat delectus repudiandae quis
          debitis, laborum mollitia quo? Veniam molestiae molestias repudiandae
          eligendi blanditiis iste, numquam vel illo saepe libero doloribus
          corporis culpa minus! Optio, ab quasi! Iusto aspernatur delectus quam
          nisi fuga accusamus rem praesentium?
        </Typography>

        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className={slider.mySwiper}
        >
          <SwiperSlide className={slider.swiper_slide}>
            <div className={slider.review_box}>
              <Avatar
                className={classes.avatar}
                src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
              />
              <Typography className={classes.reviewName} variant="h6">
                Laswin Lian
              </Typography>
              <Typography variant="body1" className={classes.reviewText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                atque quaerat asperiores laborum autem repudiandae ipsam sunt!
                Perferendis, cumque quo.
              </Typography>
              <div className={style.rating}>
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={slider.swiper_slide}>
            <div className={slider.review_box}>
              <Avatar
                className={classes.avatar}
                src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
              />
              <Typography className={classes.reviewName} variant="h6">
                Laswin Lian
              </Typography>
              <Typography variant="body1" className={classes.reviewText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                atque quaerat asperiores laborum autem repudiandae ipsam sunt!
                Perferendis, cumque quo.
              </Typography>
              <div className={style.rating}>
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={slider.swiper_slide}>
            <div className={slider.review_box}>
              <Avatar
                className={classes.avatar}
                src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
              />
              <Typography className={classes.reviewName} variant="h6">
                Laswin Lian
              </Typography>
              <Typography variant="body1" className={classes.reviewText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                atque quaerat asperiores laborum autem repudiandae ipsam sunt!
                Perferendis, cumque quo.
              </Typography>
              <div className={style.rating}>
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={slider.swiper_slide}>
            <div className={slider.review_box}>
              <Avatar
                className={classes.avatar}
                src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
              />
              <Typography className={classes.reviewName} variant="h6">
                Laswin Lian
              </Typography>
              <Typography variant="body1" className={classes.reviewText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                atque quaerat asperiores laborum autem repudiandae ipsam sunt!
                Perferendis, cumque quo.
              </Typography>
              <div className={style.rating}>
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={slider.swiper_slide}>
            <div className={slider.review_box}>
              <Avatar
                className={classes.avatar}
                src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
              />
              <Typography className={classes.reviewName} variant="h6">
                Laswin Lian
              </Typography>
              <Typography variant="body1" className={classes.reviewText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                atque quaerat asperiores laborum autem repudiandae ipsam sunt!
                Perferendis, cumque quo.
              </Typography>
              <div className={style.rating}>
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={slider.swiper_slide}>
            <div className={slider.review_box}>
              <Avatar
                className={classes.avatar}
                src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
              />
              <Typography className={classes.reviewName} variant="h6">
                Laswin Lian
              </Typography>
              <Typography variant="body1" className={classes.reviewText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                atque quaerat asperiores laborum autem repudiandae ipsam sunt!
                Perferendis, cumque quo.
              </Typography>
              <div className={style.rating}>
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={slider.swiper_slide}>
            <div className={slider.review_box}>
              <Avatar
                className={classes.avatar}
                src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
              />
              <Typography className={classes.reviewName} variant="h6">
                Laswin Lian
              </Typography>
              <Typography variant="body1" className={classes.reviewText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                atque quaerat asperiores laborum autem repudiandae ipsam sunt!
                Perferendis, cumque quo.
              </Typography>
              <div className={style.rating}>
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={slider.swiper_slide}>
            <div className={slider.review_box}>
              <Avatar
                className={classes.avatar}
                src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh"
              />
              <Typography className={classes.reviewName} variant="h6">
                Laswin Lian
              </Typography>
              <Typography variant="body1" className={classes.reviewText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                atque quaerat asperiores laborum autem repudiandae ipsam sunt!
                Perferendis, cumque quo.
              </Typography>
              <div className={style.rating}>
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
                <GradeIcon className={classes.rating} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default index;
