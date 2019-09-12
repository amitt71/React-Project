import React from "react";
import LeaugeNew from "./LeaugeNew";
import { bundesliga } from "../dataManipulation/leaugesTeam";
import { url } from "../dataManipulation/data";
import photo from "../images/leauges/germany.jpg";
const Italy = () => {
  return (
    <LeaugeNew
      homeTeamId={"BUNDESLIGA_H"}
      awayTeamId={"BUNDESLIGA_A"}
      url={`${url}/Germany`}
      teams={bundesliga()}
      photo={photo}
    />
  );
};

export default Italy;
