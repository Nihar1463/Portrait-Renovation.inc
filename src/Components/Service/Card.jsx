
import React from "react";
import "./Card.css";

import I1 from "../../assets/images/ArrowUpRight.png";
import Imgg1 from "../../assets/images/Rectangle 17.jpg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="main-box">
      <motion.div
        className="left_S"
        ref={leftRef}
        initial={{ opacity: 0, x: -500 }}
        animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -500 }}
        transition={{ duration: 1.5 }}
      >
        <div className="details">
          <h3 className="p1">{props.data.title}</h3>
          <div className="para">
            {props.data.para.map((v, i) => {
              return <p key={i}>{v}</p>;
            })}
          </div>
          <div className="read-more">
            <p>Read more</p>
            <img src={I1} alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="right_S"
        ref={rightRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={rightInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="photo">
          <img src={props.data.img} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

