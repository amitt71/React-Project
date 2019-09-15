import React from "react";
import Leauge from "./Leauge";
import { bundesliga } from "../dataManipulation/leaugesTeam";
import { url } from "../dataManipulation/data";
import photo from "../images/leauges/germany.jpg";
const Germany = () => {
  return (
    <Leauge
      homeTeamId={"BUNDESLIGA_H"}
      awayTeamId={"BUNDESLIGA_A"}
      url={`${url}/Germany`}
      teams={bundesliga()}
      photo={photo}
      name={"Germany"}
    />
  );
};

export default Germany;
