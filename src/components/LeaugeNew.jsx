import React, { useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chart from "./chart";
import CustomSelect from "./select";
import CustomButton from "./useStyle";
import { initPie, normalPredictVector } from "../dataManipulation/data";
import { buttonPredictStyle } from "./../dataManipulation/style/buttonStyle";
import useGridStyles from "./grid";
import "../css/bootstrap/bootstrap-grid.css";

const LeaugeNew = props => {
  // params : select {HomeTeam : id/name, AwayTeam : id/name}
  const { homeTeamId, awayTeamId, url, teams, photo } = props;
  // data :  current data that presesnted by chartJS
  const [data, setData] = useState([1, 2, 1]);
  const [entireData, setEntireData] = useState(initPie());
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

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

  const setTeamsforpredict = (homeTeam, awayTeam) => {
    setHomeTeam(homeTeam);
    setAwayTeam(awayTeam);
  };

  const gridClasses = useGridStyles();
  const buttonClasses = buttonPredictStyle();
  return (
    <div className="container">
      <div className={gridClasses.root}>
        <Grid container spacing={1}>
          <Grid item xs={0}>
            <Paper className={gridClasses.paper}>
              <img
                style={{
                  width: "1000px",
                  height: "380px"
                }}
                src={photo}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div className="row align-items-stretch program">
        <div
          className="col-12 border-top border-bottom py-5"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="row align-items-stretch">
            <div className="input-field col s2">
              <Grid container spacing={0} justify="space-evenly">
                <Grid item xs={4} sm={4}>
                  <Paper className={buttonClasses.paper}>
                    <CustomSelect
                      homeTeamId={homeTeamId}
                      awayTeamId={awayTeamId}
                      teams={teams}
                      setTeamsforpredict={setTeamsforpredict}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Paper className={buttonClasses.paper}>
                    <CustomButton
                      name="Predict"
                      onClick={() => handlePredict(homeTeam, awayTeam)}
                      chosenStyle={buttonPredictStyle}
                    ></CustomButton>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Chart
        entireData={entireData}
        predict={data}
        handleDataChange={handleDataChange}
      />
    </div>
  );
};

export default LeaugeNew;