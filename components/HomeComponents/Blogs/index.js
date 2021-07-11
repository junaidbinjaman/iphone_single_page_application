import React from "react";
import style from "./blog.module.css";
import { Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useState } from "react";

const UseStyle = makeStyles({
  heading: {
    fontSize: 50,
    color: "#444",
    fontWeight: "bolder",
  },
  description: {
    fontSize: 18,
    color: "#444",
  },
  title: {
    fontWeight: "bolder",
    paddingLeft: 30,
    marginTop: 10,
    marginBottom: 10,
  },
});

const Blog = () => {
  const [fullContent, setFullContent] = useState(false);
  const classes = UseStyle();
  const img =
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg";
  const imgUrl = () => {
    return img;
  };
  const handleFullContent = () => {
    setFullContent(!fullContent);
  };
  return (
    <div className={style.blog_container}>
      <div className={style.background_heading}>
        <h1>Recent Blogs</h1>
      </div>
      <div className={style.heading}>
        <Typography className={classes.heading} variant="h3">
          Recent Blogs
        </Typography>
      </div>
      <div className={style.postbox_row}>
        <div className={style.box}>
          <Image
            loader={imgUrl}
            src="me.png"
            alt="Picture of the author"
            width={400}
            height={300}
          />
          <Typography className={classes.title} variant="h5">
            What should you know!!
          </Typography>
          <div
            className={
              fullContent ? style.blog_description_full : style.blog_description
            }
          >
            <Typography className={classes.description} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi
              in ullam adipisci aliquid numquam quia, earum quas commodi
              accusantium quis voluptatibus magni praesentium similique debitis?
              Saepe sunt repellat unde, odio necessitatibus, id, vitae eaque
              doloribus sapiente quas modi recusandae?
            </Typography>
          </div>

          <a className={style.read_more} onClick={handleFullContent}>
            {fullContent ? "Show More" : "Show Less"}
          </a>
          <div className={style.blog_info}>
            <Typography variant="caption">Author: Junaid Jwolt</Typography>
            <Typography variant="caption">Date: july 11, 2021</Typography>
            <Typography variant="caption">Comments: 330</Typography>
          </div>
        </div>
        <div className={style.box}>
          <Image
            loader={imgUrl}
            src="me.png"
            alt="Picture of the author"
            width={400}
            height={300}
          />
          <Typography className={classes.title} variant="h5">
            What should you know!!
          </Typography>
          <div
            className={
              fullContent ? style.blog_description_full : style.blog_description
            }
          >
            <Typography variant="body1" className={classes.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi
              in ullam adipisci aliquid numquam quia, earum quas commodi
              accusantium quis voluptatibus magni praesentium similique debitis?
              Saepe sunt repellat unde, odio necessitatibus, id, vitae eaque
              doloribus sapiente quas modi recusandae?
            </Typography>
          </div>

          <a className={style.read_more} onClick={handleFullContent}>
            {fullContent ? "Show More" : "Show Less"}
          </a>
          <div className={style.blog_info}>
            <Typography variant="caption">Author: Junaid Jwolt</Typography>
            <Typography variant="caption">Date: july 11, 2021</Typography>
            <Typography variant="caption">Comments: 330</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
