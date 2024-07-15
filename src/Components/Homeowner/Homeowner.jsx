import React from "react";
import "./Homeowner.css";

import Ph1 from "../../assets/images/own_phtoto.png";
import Arl from "../../assets/images/left.png";
import ArR from "../../assets/images/_arrow-right.png";
import Qut from "../../assets/images/Frame.png";
import Str from "../../assets/images/star.png";
const Homeowner = () => {
  return (
    <div className="homeowner_main">
      <div className="black">
        <div className="box_howner">
          <div className="info_howner">
            <h2>Hear from our
            satisfied homeowners</h2>
          </div>
          <p>
          These revies aim to highlight positive customer experiences and build trust with potential clients.
          </p>
        </div>
        <div className="flex_info">
          <div className="phto_left">
            <img src={Ph1} alt="" />
            <div className="arrow1">
              <div className="ar_round">
                <img src={Arl} alt="" />
              </div>
              <div className="ar_round">
                <img src={ArR} alt="" />
              </div>
            </div>
          </div>
          <div className="right_1">
            <img src={Qut} alt="" className="qutt" />
            <div className="abt-in">
              <div className="head">
                <p className="p1">Davis Schleifer</p>
                <img src={Str} alt="" />
              </div>
              <p className="p2">
                We recently met Kyle & Kim at a business conference for
                contractors and I was really impressed. They know what it takes
                to put together a great project, and hearing about the structure
                and processes they have in place for their business leaves me no
                doubt that they're the #1 choice!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeowner;
