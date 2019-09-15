import React from "react";
import photo from "../images/Amit.jpg";

const AboutMe = () => {
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
        <div className="bio pl-lg-5">
          <span
            className=" text-primary d-block mb-3"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Looking for a job
          </span>
          <p className="mb-4" data-aos="fade-right" data-aos-delay="400">
            {" "}
            A little bit about myself.
          </p>
          <p data-aos="fade-right" data-aos-delay="500">
            Follow me &mdash;
            <a href="https://www.facebook.com/amit.turgeman.9" className="p-2">
              <span className="icon-facebook"></span>
            </a>
            <a href="https://twitter.com/turgrman" className="p-2">
              <span className="icon-twitter"></span>
            </a>
            <a href="https://github.com/amitt71" className="p-2">
              <span className="icon-github"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
