import React from "react";
import Leauge from "./Leauge";
import { serieA } from "../dataManipulation/leaugesTeam";
import { url } from "../dataManipulation/data";
import photo from "../images/leauges/serie A.jpg";
const Italy = () => {
  return (
    <Leauge
      homeTeamId={"SERIE_A_H"}
      awayTeamId={"SERIE_A_A"}
      url={`${url}/Italy`}
      teams={serieA()}
      photo={photo}
      name={"Italy"}
    />
  );
};

export default Italy;
