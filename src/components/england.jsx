import React from "react";
import LeaugeNew from "./LeaugeNew";
import { pl } from "../dataManipulation/leaugesTeam";
import { url } from "../dataManipulation/data";
import photo from "../images/leauges/English Premier League.jpg";
const Newengland = () => {
  return (
    // <Leauge
    //   homeTeamId={"PL_H"}
    //   awayTeamId={"PL_A"}
    //   url={`${url}/England`}
    //   teams={pl()}
    //   photo={photo}
    // />
    <LeaugeNew
      homeTeamId={"PL_H"}
      awayTeamId={"PL_A"}
      url={`${url}/England`}
      teams={pl()}
      photo={photo}
    />
  );
};

export default Newengland;
