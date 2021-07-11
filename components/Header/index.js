import React from "react";
import style from "./Header.module.css";
import Link from "next/link";

const index = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.col_left}>
          <h1>Hello, Phone</h1>
        </div>
        <div className={style.col_right}>
          <ul>
            <Link href="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link href="/">
              <li>
                <a>About</a>
              </li>
            </Link>
            <Link href="/">
              <li>
                <a>Services</a>
              </li>
            </Link>
            <Link href="/">
              <li>
                <a>Portfolios</a>
              </li>
            </Link>
            <Link href="/">
              <li>
                <a>Testimonials</a>
              </li>
            </Link>
            <Link href="/">
              <li>
                <a>Blog</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
