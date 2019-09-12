import React from "react";
import LeaugeNew from "./LeaugeNew";
import { bbva } from "../dataManipulation/leaugesTeam";
import { url } from "../dataManipulation/data";
import photo from "../images/leauges/Spanish leauge.jpg";
const Spain = () => {
  return (
    <LeaugeNew
      homeTeamId={"BBVA_H"}
      awayTeamId={"BBVA_A"}
      url={`${url}/Spain`}
      teams={bbva()}
      photo={photo}
    />
  );
};

export default Spain;
