import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <div className=" site-hero">
        <div className="container">
          <div className="row align-items-center">
            <h1 data-aos="fade-up" data-aos-delay="10">
              Welcome to my React Application.
            </h1>
          </div>
        </div>
      </div>
      <div className="sweet-loading">
        <CircleLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={"#ff5733"}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Home;
