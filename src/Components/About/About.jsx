import React from "react";
import "./About.css";

import Ab1 from "../../assets/images/about.png";
import Ab2 from "../../assets/images/about-logo.png";
import Arrw from "../../assets/images/ArrowUpRight_white.png";
const About = () => {
  return (
    <div className="about">
      <div className="left">
        <h2>About portrait renovation</h2>
        <p>
          With Terry Deskin at the helm, Portrait Renovations was set up with
          the vision of being a home renovation company with a difference. Our
          incredible team of dedicated professionals genuinely cares about how
          your home is going to look and feel and is committed to delivering
          quality results. We believe in making home renovations a positive
          experience for every family and always go above and beyond in ensuring
          your comfort throughout the entire process.
        </p>
      </div>
      <div className="right-abt">
        <img src={Ab1} alt="" className="abt_img"/>
        <div className="logo">
          <img src={Ab2} alt="" />
        </div>{" "}
        <div className="abt-more">
          <h2>About More</h2>
          <div className="round">
            <img src={Arrw} alt=""className="arrw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
