import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../styles/Carosel2.module.css";
import Image from "next/image";
import leon from "../assets/leon.png";
import baby from "../assets/baby.png";
import green from "../assets/green.png";
import tik from "../assets/tik.png";
import ontop from "../assets/ontop.png";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 3,
      speed: 500,
      arrows: false,
    };
    return (
      <div className={styles.lastslider}>
        <Slider {...settings}>
          <div className={styles.one}>
            <h3>1</h3>

            <Image src={leon} className={styles.leon} />
            <div className={styles.josiah}>
              <h6>Josiah leon</h6>
              <Image src={tik} className={styles.tik} />
              <Image src={ontop} className={styles.ontopIcon} />

              <p>
                Josiah Leon is an R&B influenced singer/songwriter based out of
                Central New York. <span>Read More...</span>{" "}
              </p>
            </div>
          </div>

          <div className={styles.one}>
            <h3>2</h3>
            <Image src={baby} className={styles.leon} />
            <div className={styles.josiah}>
              <h6>Josiah leon</h6>
              <Image src={tik} className={styles.tik} />
              {/* <Image src ={ontop} className={styles.ontopIcon}/> */}

              <p>
                Josiah Leon is an R&B influenced singer/songwriter based out of
                Central New York. <span>Read More...</span>{" "}
              </p>
            </div>
          </div>
          <div className={styles.one}>
            <h3>3</h3>
            <Image src={green} className={styles.leon} />
            <div className={styles.josiah}>
              <h6>Josiah leon</h6>
              <Image src={tik} className={styles.tik} />
              <Image src={ontop} className={styles.ontopIcon} />

              <p>
                Josiah Leon is an R&B influenced singer/songwriter based out of
                Central New York. <span>Read More...</span>{" "}
              </p>
            </div>
          </div>
          <div className={styles.one}>
            <h3>4</h3>
            <Image src={leon} className={styles.leon} />
            <div className={styles.josiah}>
              <h6>Josiah leon</h6>
              <Image src={tik} className={styles.tik} />
              <Image src={ontop} className={styles.ontopIcon} />

              <p>
                Josiah Leon is an R&B influenced singer/songwriter based out of
                Central New York. <span>Read More...</span>{" "}
              </p>
            </div>
          </div>
          <div className={styles.one}>
            <h3>5</h3>
            <Image src={baby} className={styles.leon} />
            <div className={styles.josiah}>
              <h6>Josiah leon</h6>
              <Image src={tik} className={styles.tik} />
              {/* <Image src ={ontop} className={styles.ontopIcon}/> */}

              <p>
                Josiah Leon is an R&B influenced singer/songwriter based out of
                Central New York. <span>Read More...</span>{" "}
              </p>
            </div>
          </div>
          <div className={styles.one}>
            <h3>6</h3>
            <Image src={green} className={styles.leon} />
            <div className={styles.josiah}>
              <h6>Josiah leon</h6>
              <Image src={tik} className={styles.tik} />
              {/* <Image src ={ontop} className={styles.ontopIcon}/> */}

              <p>
                Josiah Leon is an R&B influenced singer/songwriter based out of
                Central New York. <span>Read More...</span>{" "}
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
