import React from "react";
import Leauge from "./Leauge";
import { bbva } from "../dataManipulation/leaugesTeam";
import { url } from "../dataManipulation/data";
import photo from "../images/leauges/Spanish leauge.jpg";
const Spain = () => {
  return (
    <Leauge
      homeTeamId={"BBVA_H"}
      awayTeamId={"BBVA_A"}
      url={`${url}/Spain`}
      teams={bbva()}
      photo={photo}
      name={"Spain"}
    />
  );
};

export default Spain;
