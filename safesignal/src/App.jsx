import React from "react";
import BackgroundSetter from "./background/background";
import Navbar from "./navbar";
import HeroSection from "./HeroSection";
import Map from "./Component/map";

 function App(){
  return(
  <div className="relative">
  <div className="absolute">
    <Navbar />
  </div>
  <div className="absolute">
  <HeroSection/>
  <Map/>
  </div>
 
    <BackgroundSetter/>
  </div>
  )
 }export default App