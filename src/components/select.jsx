import React from "react";
import CustomButton from "./useStyle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { chooseTeamsButton } from "./../dataManipulation/style/buttonStyle";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const DialogSelect = props => {
  const { homeTeamId, awayTeamId, teams, setTeamsforpredict } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    homeTeam: "",
    awayTeam: ""
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: String(event.target.value) });
  };

  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = needToBeSave => {
    if (needToBeSave) {
      setTeamsforpredict(state.homeTeam, state.awayTeam);
      setState({ ...state, open: false });
    } else {
      const newState = { ...state };
      newState.homeTeam = "";
      newState.awayTeam = "";
      setState({ state: newState, open: false });
    }
  };

  return (
    <div>
      <CustomButton
        onClick={handleClickOpen}
        chosenStyle={chooseTeamsButton}
        name={
          state.homeTeam !== "" && state.awayTeam
            ? `${state.homeTeam} vs. ${state.awayTeam}`
            : "Choose teams"
        }
      />

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={state.open}
        onClose={handleClose}
      >
        <DialogTitle>Ready to predict?</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="homeTeam">Home team</InputLabel>
              <Select
                id={homeTeamId}
                name={homeTeamId}
                value={state.homeTeam}
                onChange={handleChange("homeTeam")}
                input={<Input id="homeTeam-native-simple" />}
              >
                {teams.map(team => {
                  return (
                    <option key={`${team}_H`} value={`${team}`}>
                      {team}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="awayTeam">Away team</InputLabel>
              <Select
                id={awayTeamId}
                name={awayTeamId}
                value={state.awayTeam}
                onChange={handleChange("awayTeam")}
                input={<Input id="awayTeam-native-simple" />}
              >
                {teams.map(team => {
                  return (
                    <option key={`${team}_A`} value={`${team}`}>
                      {team}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogSelect;
