import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Login from "./Login";
import Singup from "./Singup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function Users() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={1}>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Login />
        </Grid>
        
        <Grid item xs={12} sm={5}>
          <Singup />
        </Grid>

        
      </Grid>
    </div>
  );
}
