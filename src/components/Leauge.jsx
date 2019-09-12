import React, { useState } from "react";
import axios from "axios";
import Chart from "./chart";
import { initPie, normalPredictVector } from "../dataManipulation/data";
import Theming from "./useStyle";

const Leauge = props => {
  // params : select {HomeTeam : id/name, AwayTeam : id/name}
  const { homeTeamId, awayTeamId, url, teams, photo } = props;
  // data :  current data that presesnted by chartJS
  const [data, setData] = useState([1, 2, 1]);
  const [entireData, setEntireData] = useState(initPie());
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  let H_id = 1; //home team id --> when rendring Home teams with map()
  let A_id = 1; //Away team id --> when rendring Away teams with map()

  const handleHomeTeamChange = e => {
    setHomeTeam(e.target.value);
  };
  const handleAwayTeamChange = e => {
    setAwayTeam(e.target.value);
  };

  const handleDataChange = newData => {
    setData(newData);
  };

  const handleEntireData = entireNewData => {
    setEntireData(entireNewData);
  };

  async function handlePredict(homeTeam, awayTeam) {
    const new_url = `${url}/${homeTeam}/${awayTeam}`;
    const { data } = await axios.get(new_url);

    const predcitResult = normalPredictVector(
      data.HomeTeam,
      data.Draw,
      data.AwayTeam
    );

    handleDataChange(predcitResult);
    const updateDatasets = [...entireData.datasets];
    updateDatasets[0].data = predcitResult;
    handleEntireData({ labels: entireData.labels, datasets: updateDatasets });
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
            alt="PL"
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
                  id={homeTeamId}
                  name={homeTeamId}
                  className="custom-select"
                  onChange={handleHomeTeamChange}
                >
                  <option defaultValue="">Home Team</option>
                  {teams.map(team => {
                    return (
                      <option key={H_id++} value={`${team}`}>
                        {team}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-field col s12">
                <select
                  id={awayTeamId}
                  name={awayTeamId}
                  className="custom-select"
                  onChange={handleAwayTeamChange}
                >
                  <option defaultValue="">Away Team</option>
                  {teams.map(team => {
                    return (
                      <option key={A_id++} value={`${team}`}>
                        {team}
                      </option>
                    );
                  })}
                </select>
              </div>
              <Theming
                // id="id"

                name="Predict"
                onClick={() => handlePredict(homeTeam, awayTeam)}
              ></Theming>
            </div>
          </div>
        </div>
      </div>
      <Chart
        entireData={entireData}
        predict={data}
        handleDataChange={handleDataChange}
      />
    </div>
  );
};

export default Leauge;
