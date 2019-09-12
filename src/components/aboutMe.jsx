import React from "react";
import "../css/style.css";
import photo from "../images/Amit.jpg";
const AboutMe = () => {
  return (
    <div class="row align-items-center speaker">
      <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
        <img src={photo} alt="Amit" class="img-fluid" />
      </div>
      <div class="col-lg-6 ml-auto">
        <h2 class="names" data-aos="fade-right" data-aos-delay="200">
          Amit Turgeman
        </h2>
        <div class="bio pl-lg-5">
          <span
            class="text-uppercase text-primary d-block mb-3"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Web Designer
          </span>
          <p class="mb-4" data-aos="fade-right" data-aos-delay="400">
            {" "}
            A little bit about myself.
          </p>
          <p data-aos="fade-right" data-aos-delay="500">
            Follow Amit &mdash;
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
