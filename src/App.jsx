import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroVdo from "./assets/hero.mp4";
import Explore from "./components/Explore";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

// const bgImage = {
//   backgroundImage: `url(${HeroVdo})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "bottom",
//   backgroundSize: "cover",
//   position: "relative",
// };
const App = () => {
  return (
    <div className="overflow-x-hidden relative text-white">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 h-full w-full  xl:w-full lg:w-full md:w-full md:h-[50%] lg:h-[50%] xl:h-[50%] object-cover -z-10"
        src={HeroVdo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Page content */}
      <Navbar />
      <Hero />

      {/* Dark background starts below */}
      <div className="bg-brandDark">
        <Explore />
        <Journal />
        <Footer />
      </div>
    </div>


  );
};

export default App;