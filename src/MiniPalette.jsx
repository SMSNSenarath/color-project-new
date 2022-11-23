import React from "react";
import { withStyles } from "@mui/material";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>MINI PALETTE</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette); //a higher-order component which means take the minipalette and export new version of that
