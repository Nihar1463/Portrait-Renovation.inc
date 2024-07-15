import React from "react";

import Container1 from "./Components/Langing_page/Container1";
import "./App.css";
import Service from "./Components/Service/Service";
import Banner from "./Components/Banner/Banner";

import Level_main from "./Components/Levels/Level_main";
import Makeover from "./Components/Makeover/Makeover";
import About from "./Components/About/About";
import Homeowner from "./Components/Homeowner/Homeowner";
import Footer from "./Components/Footer/Footer";
import Faq from "./Components/FAQ/Faq";


const App = () => {
  return (
    <div className="app">
      <Container1 />
      <Service />
      <Banner />
      <Level_main />
      <Makeover />
      <About />
      <Homeowner />
      <Faq/>
      <Footer />
    </div>
  );
};

export default App;
