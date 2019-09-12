import React, { useEffect } from "react";
import AOS from "aos";
import photo from "../images/Amit.jpg";
import "aos/dist/aos.css";
import "../css/style.css";
import "../fonts/icomoon/style.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="row align-items-center speaker">
      <div
        className="col-lg-6 mb-5 mb-lg-0"
        data-aos="fade"
        data-aos-delay="100"
      >
        <img
          src={photo}
          alt="Amit"
          className="img-fluid"
          style={{ marginLeft: "50px", marginTop: "50px" }}
        />
      </div>
      <div className="col-lg-6 ml-auto">
        <h2 className="names" data-aos="fade-right" data-aos-delay="200">
          Amit Turgeman
        </h2>
        <div class="bio pl-lg-5">
          <span
            class=" text-primary d-block mb-3"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Looking for a job
          </span>
          <p class="mb-4" data-aos="fade-right" data-aos-delay="400">
            {" "}
            A little bit about myself.
          </p>
          <p data-aos="fade-right" data-aos-delay="500">
            Follow me &mdash;
            <a href="https://www.facebook.com/amit.turgeman.9" class="p-2">
              <span class="icon-facebook"></span>
            </a>
            <a href="https://twitter.com/turgrman" class="p-2">
              <span class="icon-twitter"></span>
            </a>
            <a href="https://github.com/amitt71" class="p-2">
              <span class="icon-github"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
