import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../styles/carosel.module.css";
import Image from "next/image";
import honesty from "../assets/honesty.png";
import fresh from "../assets/fresh.png";
import thunda from "../assets/thunda.png";
import alicia from "../assets/alicia.png";
import tik from "../assets/tik.png";
import playicon from "../assets/playicon.png";

export default class Carosel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500,
      arrows: false,
    };
    return (
      <div className={styles.imgslider}>
        <Slider {...settings}>
          {/* slider pic1 */}
          <div className={styles.caroselimg}>
            <Image src={honesty} className={styles.honsty} />
            <div className={styles.imgheading}>
              <h6>
                HONESTY <br />
                3rd Twin
              </h6>
              <Image src={tik} className={styles.tik} />

              <div className={styles.playdiv}>
                <Image src={playicon} className={styles.playimg} />
                <h6>PlayNow</h6>
              </div>
            </div>
            <h6 className={styles.likes}>2681 View | 18 Likes</h6>
          </div>
          {/* slider pic2 */}
          <div className={styles.caroselimg}>
            <Image src={fresh} className={styles.honsty} />
            <div className={styles.imgheading}>
              <h6>
                HONESTY <br />
                3rd Twin
              </h6>
              <Image src={tik} className={styles.tik} />

              <div className={styles.playdiv}>
                <Image src={playicon} className={styles.playimg} />
                <h6>PlayNow</h6>
              </div>
            </div>
            <h6 className={styles.likes}>2071 View | 15 Likes</h6>
          </div>
          {/* slider pic3 */}
          <div className={styles.caroselimg}>
            <Image src={thunda} className={styles.honsty} />
            <div className={styles.imgheading}>
              <h6>
                HONESTY <br />
                3rd Twin
              </h6>
              <Image src={tik} className={styles.tik} />

              <div className={styles.playdiv}>
                <Image src={playicon} className={styles.playimg} />
                <h6>PlayNow</h6>
              </div>
            </div>
            <h6 className={styles.likes}>1733 View | 15 Likes</h6>
          </div>
          {/* slider pic4 */}
          <div className={styles.caroselimg}>
            <Image src={honesty} className={styles.honsty} />
            <div className={styles.imgheading}>
              <h6>
                HONESTY <br />
                3rd Twin
              </h6>
              <Image src={tik} className={styles.tik} />

              <div className={styles.playdiv}>
                <Image src={playicon} className={styles.playimg} />
                <h6>PlayNow</h6>
              </div>
            </div>
            <h6 className={styles.likes}>1599 View | 5 Likes</h6>
          </div>
          {/* slider pic 5 */}
          <div className={styles.caroselimg}>
            <Image src={fresh} className={styles.honsty} />
            <div className={styles.imgheading}>
              <h6>
                HONESTY <br />
                3rd Twin
              </h6>
              <Image src={tik} className={styles.tik} />

              <div className={styles.playdiv}>
                <Image src={playicon} className={styles.playimg} />
                <h6>PlayNow</h6>
              </div>
            </div>
            <h6 className={styles.likes}>2681 View | 18 Likes</h6>
          </div>
        </Slider>
      </div>
    );
  }
}
