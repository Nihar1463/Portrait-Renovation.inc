
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Level_card.css";

const Level_card = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <motion.div
      className="lvl_card"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="contain"
        whileHover={{ translateY: -5, scale: 1.05, filter: "brightness(70%)" }}
      >
        <img src={props.level.img} alt="" />

        <div className="div1">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {props.level.h2}
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {props.level.heading}
          </motion.span>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {props.level.p}
      </motion.p>
    </motion.div>
  );
};

export default Level_card;

