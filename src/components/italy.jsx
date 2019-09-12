import React from "react";
import LeaugeNew from "./LeaugeNew";
import { serieA } from "../dataManipulation/leaugesTeam";
import { url } from "../dataManipulation/data";
import photo from "../images/leauges/serie A.jpg";
const Italy = () => {
  return (
    <LeaugeNew
      homeTeamId={"SERIE_A_H"}
      awayTeamId={"SERIE_A_A"}
      url={`${url}/Italy`}
      teams={serieA()}
      photo={photo}
    />
  );
};

export default Italy;
