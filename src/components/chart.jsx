import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const Chart = props => {
  const { entireData, predict } = props;
  const [localPredict, setLocalPredict] = useState(predict);
  const [draw, setRedarw] = useState(false);

  // let pieChart = React.useRef();

  useEffect(() => {
    const sholudDraw =
      entireData.datasets[0].data !== localPredict ? true : false;
    setRedarw(sholudDraw);
    setLocalPredict(entireData.datasets[0].data);
  }, [entireData.datasets, localPredict]);

  return (
    <Pie
      id="pie"
      data={entireData}
      redraw={draw}
      height={100}
      options={{ responsive: true }}
      // ref={pieChart}
    />
  );
};

export default Chart;
