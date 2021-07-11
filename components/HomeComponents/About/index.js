import React from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";
import style from "./About.module.css";

const UseStyle = makeStyles({
  heading: {
    fontSize: 50,
    fontWeight: "bolder",
    color: "#444",
  },
});

const index = () => {
  const classes = UseStyle();
  return (
    <div className={style.about_container}>
      <div className={style.background_heading}>
        <h2 className={classes.heading}>About The Phone</h2>
      </div>
      <div className={style.heading}>
        <Typography className={classes.heading} variant="h2">
          About The Phone
        </Typography>
        <p className={style.caption}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text.
        </p>
      </div>

      <div className={style.wrapper}>
        <h1>Our Partner Stores</h1>
        <div className={style.cols}>
          <div
            className={style.col}
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className={style.container}>
              <div
                className={style.front}
                style={{
                  backgroundImage:
                    "url(https://static.highsnobiety.com/thumbor/LZcSn13-t8IpIw9-TYh6Hhpf72o=/1200x720/static.highsnobiety.com/wp-content/uploads/2020/05/01145431/apple-q2-2020-report-feat.jpg)",
                }}
              >
                <div className={style.inner}>
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className={style.back}>
                <div className={style.inner}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                  <br />
                  <Button variant="contained">Contact Seller</Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style.col}
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className={style.container}>
              <div
                className={style.front}
                style={{
                  backgroundImage:
                    "url(https://www.tuck.dartmouth.edu/images/made/uploads/articles/apple-store_1500_1000_70.jpg)",
                }}
              >
                <div className={style.inner}>
                  <p>Rocogged</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className={style.back}>
                <div className={style.inner}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                  <br />
                  <Button variant="contained">Contact Seller</Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style.col}
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className={style.container}>
              <div
                className={style.front}
                style={{
                  backgroundImage:
                    "url(https://cdn.idropnews.com/wp-content/uploads/2021/02/15093758/Apple-Store-Royal-Hawaiian.jpg)",
                }}
              >
                <div className={style.inner}>
                  <p>Clossyo</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className={style.back}>
                <div className={style.inner}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                  <br />
                  <Button variant="contained">Contact Seller</Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style.col}
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className={style.container}>
              <div
                className={style.front}
                style={{
                  backgroundImage:
                    "url(https://cdn-0.idownloadblog.com/wp-content/uploads/2018/09/2018-09-24-image-25.jpg)",
                }}
              >
                <div className={style.inner}>
                  <p>Rendann</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className={style.back}>
                <div className={style.inner}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                  <br />
                  <Button variant="contained">Contact Seller</Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style.col}
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className={style.container}>
              <div
                className={style.front}
                style={{
                  backgroundImage:
                    "url(https://images.macrumors.com/t/Gg-KJfcJCO5EAaTzUeQBZ_-FtII=/1600x1200/smart/article-new/2020/05/apple-store-italy.jpg)",
                }}
              >
                <div className={style.inner}>
                  <p>Reflupper</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className={style.back}>
                <div className={style.inner}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                  <br />
                  <Button variant="contained">Contact Seller</Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style.col}
            ontouchstart="this.classList.toggle('hover');"
          >
            <div className={style.container}>
              <div
                className={style.front}
                style={{
                  backgroundImage:
                    "url(https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/05/apple-store-vienna-austria.jpg)",
                }}
              >
                <div className={style.inner}>
                  <p>Acirassi</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className={style.back}>
                <div className={style.inner}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Alias cum repellat velit quae suscipit c.
                  </p>
                  <br />
                  <Button variant="contained">Contact Seller</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
