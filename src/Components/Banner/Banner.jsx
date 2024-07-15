
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Banner.css";

import Grd1 from "../../assets/images/gridphoto1.png";
import Grd2 from "../../assets/images/gridphoto2.png";
import Grd3 from "../../assets/images/gridphoto3.png";
import Grd4 from "../../assets/images/gridphoto4.png";

const Banner = () => {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="main_banner">
      <div className="black_div">
        <motion.div
          className="banner_left"
          ref={leftRef}
          initial={{ opacity: 0, y: 50 }}
          animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <p>We also do the smaller projects and will assist you with ideas to help you to stay on your budget.</p>
        </motion.div>
        <div className="banner_right">
          <img src={Grd1} alt="" />
          <img src={Grd2} alt="" />
          <img src={Grd3} alt="" />
          <img src={Grd4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
