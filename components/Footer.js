import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-12">
          <div className={styles.footer}>
            <div className={styles.ftrcontent}>
              <Image src={logo} className={styles.footerlogo} alt={"?"}/>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500.
            </p>
            <p>1245 Farmington Avenue #1025, West Hartford, CT 06107</p>
            <div className={styles.follow}>
              <h6>Follow Us:</h6>
              <div className={styles.insta}>
                <FaInstagram size={25} className={styles.instagram} alt={"?"}/>
              </div>
              <div className={styles.insta}>
                <FaFacebook size={25} className={styles.instagram} alt={"?"}/>
              </div>
              <div className={styles.insta}>
                <FaTwitter size={25} className={styles.instagram} alt={"?"}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2022 Revohloo, Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
