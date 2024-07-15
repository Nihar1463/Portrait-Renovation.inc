import React from "react";
import "./Service.css";

import Card from "./Card";
import { SERVICE_DATA } from "../Constant/Data";


const Service = () => {
  return (
    <div className="service" id="service">
      <div className="service_info">
        <h1>Service</h1>
        <p className="pr1">Our goal here at Portrait Renovations, Inc is to look after our customer in all aspects of the project. To provide the best quality in servicing our customers with workmanship, material quality, seasoned installers and deadlines to keep projects on schedule.</p>
        <p className="pr1">We also provide a schedule from start to finish with all scope of work. This is crucial in keeping the project moving with out delay. It also helps with making sure all materials needed are onsite a head of the installer.</p>

      </div>
      <div className="cards">
        {SERVICE_DATA.map((v, i) => {
          return <Card data={v} key={i}/>;
        })}
      </div>    
    </div>
  );
};

export default Service;
