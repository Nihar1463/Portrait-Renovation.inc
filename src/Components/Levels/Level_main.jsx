import React from "react";
import "./Level_main.css";
import { LEVELS_CARDS } from "../Constant/Data";
import Level_card from "./Level_card";
const Level_main = () => {
  return (
    <div className="level_div">
      <div className="box">
        <h2>Elevate to the next level</h2>
        <p>
          Our team of experienced experts ensures an efficient and exceptional
          client experience, providing trustworthy guidance throughout the
          process.
        </p>
      </div>
      <div className="cards_LVL">
        {LEVELS_CARDS.map((v,i)=>{
            return <Level_card level={v} key={i}/>
        })}
      </div>
      <div className="btn">
        <button className="bt">Schedule discovery call</button>
        <button className="bt">See financing option</button>
      </div>
    </div>
  );
};

export default Level_main;
