import { makeStyles } from "@material-ui/core/styles";

export const buttonPredictStyle = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 50,
    padding: "0 70px",
    fontWeight: "bold"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center"
  }
}));

export const chooseTeamsButton = makeStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
    border: 0,
    borderRadius: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 50,
    padding: "0 50px",
    fontWeight: "bold"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center"
  }
}));
