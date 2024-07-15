import React from "react";
import "./Container1.css";
import Logo from "../../assets/images/Group.png";
import Img1 from "../../assets/images/user-octagon.png";
import Img2 from "../../assets/images/call-calling.png";
import Img3 from "../../assets/images/home-hashtag.png";

import { motion } from "framer-motion";
const Container1 = () => {
  return (
    <div className="main1" id="home">
      <motion.div
        className="header1"
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="logo1">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar1">
          <a href="#home">Home</a>
          <a href="#">About Us</a>
          <a href="#service">Sevices</a>
          <a href="#">Portfolio</a>
        </div>
       <a href="#footer"> <button className="contact_btn" >Contact Us</button></a>
      </motion.div>
      <motion.div className="info1" initial={{ opacity: 0, x: 400 }}
      transition={{duration:1.5}}
      animate={{opacity:1,x:0}}>
        <p>ELEGENT DWLLING MAKEOVER </p>
        <h2>
          Artistry in Renovation <br />
          Making your Vision a Reality
        </h2>
      </motion.div>
      <div className="bottom-div">
        <div className="items_div">
          <div className="item">
            <div className="img1">
              <img src={Img1} alt="" />
            </div>
            <div className="data">
              <p>Build by</p>
              <h3>Terry Deskin</h3>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <div className="img1">
              <img src={Img2} alt="" />
            </div>
            <div className="data">
              <p>Call</p>
              <h3>469.835.4656</h3>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <div className="img1">
              <img src={Img3} alt="" />
            </div>
            <div className="data">
              <p>location </p>
              <h3>North Dallas</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container1;
