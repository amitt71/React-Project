import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const Chart = props => {
  const { entireData, predict } = props;
  const [data, setData] = useState(entireData);
  const [localPredict, setLocalPredict] = useState(predict);
  const [draw, setRedarw] = useState(false);

  let pieChart = React.useRef();

  useEffect(() => {
    const sholudDraw =
      entireData.datasets[0].data !== localPredict ? true : false;
    setRedarw(sholudDraw);
    setLocalPredict(entireData.datasets[0].data);
  }, [entireData.datasets, localPredict]);
  // const newData = canvas => {
  //   const ctx = canvas.getContext("2d");
  //   const gradient = ctx.createLinearGradient(0, 0, 100, 0);
  //   const updateData = { ...data };
  //   updateData.datasets[0].backgroundColor = gradient;
  //   return updateData;
  // };

  //  console.log(pieChart.current);

  return (
    <Pie
      id="pie"
      data={data}
      redraw={draw}
      height={100}
      options={{ responsive: true }}
      ref={pieChart}
    />
  );
};

export default Chart;
