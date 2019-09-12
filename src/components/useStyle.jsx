import React from "react";
import Button from "@material-ui/core/Button";

export const CustomButton = props => {
  const { name, onClick, chosenStyle } = props;
  const classes = chosenStyle();
  return (
    <Button className={classes.root} onClick={onClick} fullWidth>
      {name}
    </Button>
  );
};

export default CustomButton;
