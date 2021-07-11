import React from "react";
import style from "./HeroArea.module.css";
import { Button, Typography, makeStyles } from "@material-ui/core";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const UseStyle = makeStyles({
  Heading: {
    fontSize: 70,
    color: "#444",
  },
  subTitle: {
    color: "#6d4c41",
    fontSize: 20,
    letterSpacing: 5,
    width: "fit-content",
    fontWeight: "bold",
  },
  button: {
    fontSize: 20,
    marginTop: 30,
  },
});

const index = () => {
  const classes = UseStyle();
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.col_left}>
          <Typography variant="h3" className={classes.Heading}>
            iPhone 12 Pro Max
          </Typography>
          <Typography
            className={classes.subTitle}
            variant="caption"
            display="block"
            gutterBottom
          >
            This is what can give you a real feel
          </Typography>
          <div>
            <Button
              color="primary"
              className={classes.button}
              variant="contained"
            >
              <LocalMallIcon /> &nbsp; Get Your Phone
            </Button>
          </div>
        </div>
        <div className={style.col_right} gutterBottom>
          <ul>
            <li>
              <h2>I</h2>
            </li>
            <li>
              <h2>P</h2>
            </li>
            <li>
              <h2>h</h2>
            </li>
            <li>
              <h2>o</h2>
            </li>
            <li>
              <h2>n</h2>
            </li>
            <li>
              <h2>e</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
