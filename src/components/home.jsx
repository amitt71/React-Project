import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <div className=" site-hero">
        <div className="container">
          <div className="row align-items-center">
            <h1 data-aos="fade-up" data-aos-delay="10">
              Welcome to my React Application. Server side not deployed yet.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
