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

export const url = `https://thawing-wave-94414.herokuapp.com/predict`;
