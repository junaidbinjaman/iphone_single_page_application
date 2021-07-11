import React from "react";
import style from "./Service.module.css";
import { Typography, makeStyles } from "@material-ui/core";

const UseStyle = makeStyles({
  heading: {
    fontSize: 50,
    fontWeight: "bolder",
    color: "#444",
  },
  title: {
    color: "#444",
  },
  caption: {
    fontSize: 18,
    color: "#444",
  },
});

const Service = () => {
  const classes = UseStyle();
  return (
    <div className={style.service_container}>
      <div className={style.background_heading}>
        <h1>Our Services</h1>
      </div>
      <div className={style.heading}>
        <Typography className={classes.heading} variant="h2">
          Our Services
        </Typography>
        <div className={style.servicebox_container}>
          <div className={style.service_box}>
            <div className={style.servicebox_content}>
              <div className={style.divider}></div>
              <div className={style.box_content}>
                <Typography className={classes.title} variant="h4">
                  Get a New Phone
                </Typography>
                <Typography className={classes.caption} variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos praesentium impedit, ducimus assumenda quibusdam
                  labore hic non obcaecati, a, eaque aliquam ea dolor mollitia
                  iure amet laudantium veniam temporibus ex! Eius, odio rerum
                  excepturi aperiam nobis repellendus vitae unde, id distinctio
                  saepe accusantium cupiditate modi commodi tempore quaerat
                  omnis nostrum!
                </Typography>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "300px" }} className={style.service_box}>
            <div className={style.servicebox_content}>
              <div className={style.divider}></div>
              <div className={style.box_content}>
                <Typography className={classes.title} variant="h4">
                  Get a Used Phone
                </Typography>
                <Typography className={classes.caption} variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos praesentium impedit, ducimus assumenda quibusdam
                  labore hic non obcaecati, a, eaque aliquam ea dolor mollitia
                  iure amet laudantium veniam temporibus ex! Eius, odio rerum
                  excepturi aperiam nobis repellendus vitae unde, id distinctio
                  saepe accusantium cupiditate modi commodi tempore quaerat
                  omnis nostrum!
                </Typography>
              </div>
            </div>
          </div>
          <div className={style.service_box}>
            <div className={style.servicebox_content}>
              <div className={style.divider}></div>
              <div className={style.box_content}>
                <Typography className={classes.title} variant="h4">
                  Get Your Phone Repired
                </Typography>
                <Typography className={classes.caption} variant="caption">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos praesentium impedit, ducimus assumenda quibusdam
                  labore hic non obcaecati, a, eaque aliquam ea dolor mollitia
                  iure amet laudantium veniam temporibus ex! Eius, odio rerum
                  excepturi aperiam nobis repellendus vitae unde, id distinctio
                  saepe accusantium cupiditate modi commodi tempore quaerat
                  omnis nostrum!
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
