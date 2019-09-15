import React from "react";
import Leauge from "./Leauge";
import { pl } from "../dataManipulation/leaugesTeam";
import { url } from "../dataManipulation/data";
import photo from "../images/leauges/English Premier League.jpg";
const England = () => {
  return (
    // <Leauge
    //   homeTeamId={"PL_H"}
    //   awayTeamId={"PL_A"}
    //   url={`${url}/England`}
    //   teams={pl()}
    //   photo={photo}
    // />
    <Leauge
      homeTeamId={"PL_H"}
      awayTeamId={"PL_A"}
      url={`${url}/England`}
      teams={pl()}
      photo={photo}
      name={"England"}
    />
  );
};

export default England;
