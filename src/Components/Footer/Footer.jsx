import React from "react";
import "./Footer.css";


import Lg1 from "../../assets/images/insta.png";
import Lg2 from "../../assets/images/fb.png";
import Lg3 from "../../assets/images/pinirst.png";
import Lg4 from "../../assets/images/linkdin.png";
import I from "../../assets/images/Group.png";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="bx">
        <h2>Ready for a home makeover? Reach out to us today!</h2>
      </div>
      <div className="input-div">
        <input type="text" placeholder="Enter your email here..." />
        <button className="send">Send</button>
      </div>
      <div className="social_icn">
       <a href="https://www.instagram.com/" target="_blank"> <img src={Lg1}alt="" /></a>
        <a href="https://www.facebook.com/" target="_blank"><img src={Lg2}alt="" /></a>
        <a href="https://in.pinterest.com/" target="_blank"><img src={Lg3}alt="" /></a>
        <a href="https://www.linkedin.com/" target="_blank"><img src={Lg4}alt="" /></a>
      </div>
      <div className="bottom_div">
        <div className="lft">
            <img src={I} alt="" />
            <a href="#home">Home</a>
            <a href="#">About Us</a>
            <a href="#service">Service</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="rght">
            <p>©2024 Portrait Renovations, ins · All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
