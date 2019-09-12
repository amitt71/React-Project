export const initPie = () => {
  const data = {
    labels: ["Home Team", "Draw", "Away Team"],
    datasets: [
      {
        data: [1, 2, 1],
        backgroundColor: ["#f02652", "#1486f7", "#AB29B5"],
        hoverBackgroundColor: ["#f02652", "#1486f7", "#AB29B5"]
      }
    ]
  };
  return data;
};

export const url = `http://127.0.0.1:5000/predict`;

export const normalPredictVector = (homePredict, drawPredict, awayPredict) => {
  const sum = homePredict + drawPredict + awayPredict;
  return [homePredict / sum, drawPredict / sum, awayPredict / sum];
};
