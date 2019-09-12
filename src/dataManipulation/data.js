export const initPie = () => {
  const data = {
    labels: ["Home Team", "Draw", "Away Team"],
    datasets: [
      {
        data: [1, 2, 1],
        backgroundColor: ["#FF8E53", "#6bfef7", "#FE6B8B"],
        hoverBackgroundColor: ["#FF8E53", "#6bfef7", "#FE6B8B"]
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
