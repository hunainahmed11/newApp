import React, { useState } from "react";
import Image from "next/image";
import searchicon from "../assets/searchicon.png";
import notification from "../assets/notification.png";
import harold from "../assets/harold.png";
import revohloo from "../assets/revohloo.png";
import dropdown from "../assets/dropdown.png";
import topbannr from "../assets/topbannr.png";
import playicon from "../assets/playicon.png";
import styles from "../styles/content.module.css";

import Carosel from "./Carosel";
import Carosel2 from "./Carosel2";
import Footer from "./Footer";

function Content() {
  return (
    <>
      <div className=" container overflow-x-hidden   ">
        <div
          className={`bg-[#bc2049] absolute h-14 right-0 w-[93%] grid items-center  justify-items-center `}
        >
          <h5 className="text-[20px] text-white ">
            {" "}
            Artists Join Revohloo... For More Visibility & New Fans!
          </h5>
        </div>
        <div className={`${styles.backgroundImage} `}>
          <div className={styles.insideimage}>
            <Image src={searchicon} className={styles.searchIcon} />
            <input
              type="text"
              id="first"
              className={styles.search_box}
              placeholder="Search on Revolhoo"
            ></input>

            <Image
              src={notification}
              className=" w-6 h-8 top-8 right-8 relative"
              alt={"?"}
            />
            <p>Harold John</p>
            <Image
              src={harold}
              className="w-16 h-16 top-4 relative left-24"
              alt={"?"}
            />
            <Image
              src={dropdown}
              className="w-3 h-2 relative mt-12 left-28"
              alt="?"
            />
          </div>
          <div className="absolute top-[700px] left-[280px] container">
            <Image src={revohloo} className={styles.revohloo_btn} alt={"?"} />

            <h1 className="text-[50px] text-white font-bold mt-2">
              Know My name.
              <span className="text-[18px] font-normal">
                (5 months)
                <br />
                <h6 className="w-[62%] mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500.
                </h6>
              </span>
            </h1>
            <div className={styles.playpart}>
              <Image src={playicon} className={styles.play} alt={"?"} />
              <h6>Play now</h6>
            </div>
            <div className={styles.Inspired}>
              <h6>
                INSPIRED BY YOUR <span>BROWSING HISTORY</span>
              </h6>
            </div>
            <div className="w-[100%] relative left-[45px]">
            <Carosel />
            </div>
            <div className={styles.HotNews}>
                      <h6>
                        HOT $ <span>NEWS!</span>
                      </h6>
                    </div>
                    <div className={styles.secondcarosel}>
                <Carosel />
              </div>

{/* section3 */}
<div className={styles.PopularArtist}>
                      <h6>
                        Popular <span>Artists</span>
                      </h6>
                      <div className={styles.dropdown}>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Genres
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>

                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Release Year
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Release Year
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Enter Search Criteria
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
{/* section3 end */}
<div className={styles.thirdslider}>
                  <Carosel2 />
                 
                </div>
         


              </div>
              </div>
              </div>
             
      
    </>
  )
}

export default Content;
