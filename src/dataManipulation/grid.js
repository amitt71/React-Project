import { makeStyles } from "@material-ui/core/styles";

const useGridStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    margin: "1%"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default useGridStyles;
