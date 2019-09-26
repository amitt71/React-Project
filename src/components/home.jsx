import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <React.Fragment>
      <div>
        <div className=" site-hero">
          <div className="container">
            <div className="row align-items-center">
              <h1
                data-aos="fade-up"
                data-aos-delay="10"
                style={{
                  whiteSpace: "pre-wrap"
                }}
              >
                Welcome to my React Application.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
