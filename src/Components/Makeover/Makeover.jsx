import React from "react";
import "./Makeover.css";

import I1 from "../../assets/images/mkover1.png";
import I2 from "../../assets/images/mkover2.png";
import I3 from "../../assets/images/mkover3.png";
import I4 from "../../assets/images/mkover4.png";
import I5 from "../../assets/images/mkover5.png";
import I6 from "../../assets/images/mkover6.png";
import I7 from "../../assets/images/mkover7.png";
import I8 from "../../assets/images/mkover8.png";
const Makeover = () => {
  return (
    <div className="makeover">
      <div className="box1">
        <div className="info_1">
          <h2>Prestigious home makeover specialists</h2>
        </div>
        <p>
          These variations emphasize the high recognition and quality of the
          home renovation services.
        </p>
      </div>
      <div className="box2">
        <img src={I1} alt="" className="imgg1" />
        <img src={I2} alt="" className="imgg1" />
        <img src={I3} alt="" className="imgg1" />
        <img src={I4} alt="" className="imgg1" />
      </div>
      <div className="box2">
        <img src={I5} alt="" className="imgg1" />
        <img src={I6} alt=""className="imgg1"  />
        <img src={I7} alt="" className="imgg1" />
        <img src={I8} alt="" className="imgg1" />
      </div>

      <div className="btn1">
        <button className="bt">View full portfolio</button>
        <button className="bt">Schedule discovery call</button>
      </div>
    </div>
  );
};

export default Makeover;

