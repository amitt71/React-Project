import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CircleLoader from "react-spinners/CircleLoader";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chart from "./chart";
import CustomSelect from "./select";
import CustomButton from "./useStyle";
import { initPie, normalPredictVector } from "../dataManipulation/data";
import { buttonPredictStyle } from "../dataManipulation/style/buttonStyle";
import useGridStyles from "../dataManipulation/grid";
import "../css/bootstrap/bootstrap-grid.css";
import { css } from "@emotion/core";

const Leauge = props => {
  // params : select {HomeTeam : id/name, AwayTeam : id/name}
  const { homeTeamId, awayTeamId, url, teams, photo, name } = props;
  // data :  current data that presesnted by chartJS
  const [data, setData] = useState([1, 2, 1]);
  const [entireData, setEntireData] = useState(initPie());
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [loading, setLoading] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const handleDataChange = newData => {
    setData(newData);
  };

  const handleEntireData = entireNewData => {
    setEntireData(entireNewData);
  };

  async function handlePredict(homeTeam, awayTeam) {
    const valid = validateTeamSelection(homeTeam, awayTeam);
    if (valid === true) {
      setLoading(true);
      const new_url = `${url}/${homeTeam}/${awayTeam}/`;

      const result = await axios.get(new_url);

      const { data } = result;

      // const predcitResult = normalPredictVector(
      //   data.HomeTeam,
      //   data.Draw,
      //   data.AwayTeam
      // );

      const predcitResult = [data.HomeTeam, data.Draw, data.AwayTeam];

      handleDataChange(predcitResult);
      const updateDatasets = [...entireData.datasets];
      updateDatasets[0].data = predcitResult;
      setLoading(false);
      handleEntireData({
        labels: entireData.labels,
        datasets: updateDatasets
      });
    }
  }

  const validateTeamSelection = (homeTeam, awayTeam) => {
    if (homeTeam === "")
      if (awayTeam === "") return toast("You must choose home & away teams.");
      else {
        setHomeTeam("");
        return toast("You must choose home team.");
      }
    else if (awayTeam === "") {
      setAwayTeam("");
      return toast("You must choose away team.");
    } else if (homeTeam === awayTeam) {
      setHomeTeam("");
      setAwayTeam("");
      return toast("You must choose different teams.");
    } else return true;
  };

  const setTeamsforpredict = (homeTeam, awayTeam) => {
    setHomeTeam(homeTeam);
    setAwayTeam(awayTeam);
  };

  const gridClasses = useGridStyles();
  const buttonClasses = buttonPredictStyle();

  return (
    <div className="container">
      <div className={gridClasses.root}>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Paper className={gridClasses.paper} style={{ marginLeft: "50px" }}>
              <img
                style={{
                  width: "1050px",
                  height: "380px"
                }}
                src={photo}
                alt={name}
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
                <div className="sweet-loading">
                  <CircleLoader
                    css={override}
                    sizeUnit={"px"}
                    size={50}
                    color={"#ff5733"}
                    loading={loading}
                  />
                </div>
              </Grid>
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
