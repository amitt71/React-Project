import React, { useState } from "react";
import axios from "axios";
import Chart from "./chart";
import { initPie } from "../initData/data";
import { pl } from "../initData/leaugesTeam";
import photo from "../images/English Premier League.jpg";

const England = () => {
  const [datasets, setDatasets] = useState(initPie().datasets);
  const [data, setData] = useState(initPie().datasets[0].data);
  const [labels, setLables] = useState(initPie().labels);
  const [entireData, setEntireData] = useState({ labels, datasets });
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  let homeTeamId = 1;
  let awayTeamId = 1;

  const handleHomeTeamChange = e => {
    setHomeTeam(e.target.value);
  };
  const handleAwayTeamChange = e => {
    setAwayTeam(e.target.value);
  };

  const handleDataChange = data => {
    setData(data);
  };

  const handleSetdataChange = dataset => {
    setDatasets(dataset);
  };

  const handleEntireData = entireData => {
    setEntireData(entireData);
  };

  async function handlePredict(homeTeam, awayTeam) {
    const new_url = `http://127.0.0.1:5000/predict/England/${homeTeam}/${awayTeam}`;

    const { data } = await axios.get(new_url);
    const predcitResult = [data.HomeTeam, data.Draw, data.AwayTeam];
    handleDataChange(predcitResult);
    const updateDatasets = [...datasets];
    updateDatasets[0].data = predcitResult;
    handleSetdataChange(updateDatasets);
    handleEntireData({ labels, datasets });
  }

  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4" data-aos="fade-up">
            <div id="England" className="site-section-heading" />
          </div>
          <img
            src={photo}
            alt="Image"
            className="img-fluid"
            align="right"
            style={{ marginTop: "2%" }}
          />
        </div>

        <div className="row align-items-stretch program">
          <div
            className="col-12 border-top border-bottom py-5"
            data-aos="fade"
            data-aos-delay="200"
          >
            <div className="row align-items-stretch">
              <div className="input-field col s12">
                <select
                  id="PL_H"
                  name="PL_H"
                  className="custom-select"
                  onChange={handleHomeTeamChange}
                >
                  <option defaultValue="">Home Team</option>
                  {pl().map(team => {
                    return (
                      <option key={homeTeamId++} value={`${team}`}>
                        {team}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-field col s12">
                <select
                  id="PL_A"
                  name="PL_A"
                  className="custom-select"
                  onChange={handleAwayTeamChange}
                >
                  <option defaultValue="">Away Team</option>
                  {pl().map(team => {
                    return (
                      <option key={awayTeamId++} value={`${team}`}>
                        {team}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                id="England_btn"
                className="btn btn-primary btn-sm"
                onClick={() => handlePredict(homeTeam, awayTeam)}
              >
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>
      <Chart entireData={entireData} predict={data} />
    </div>
  );
};

export default England;
