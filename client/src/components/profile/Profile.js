import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Face from "./Face";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={0} sm={3}>
          {/* 
                      8888888b.  8888888 .d8888b.  888    888 88888888888 
                      888   Y88b   888  d88P  Y88b 888    888     888     
                      888    888   888  888    888 888    888     888     
                      888   d88P   888  888        8888888888     888     
                      8888888P"    888  888  88888 888    888     888     
                      888 T88b     888  888    888 888    888     888     
                      888  T88b    888  Y88b  d88P 888    888     888     
                      888   T88b 8888888 "Y8888P88 888    888     888      
                */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Face />
        </Grid>

        <Grid item xs={0} sm={3}>
          {/* 
                  888      8888888888 8888888888 88888888888 
                  888      888        888            888     
                  888      888        888            888     
                  888      8888888    8888888        888     
                  888      888        888            888     
                  888      888        888            888     
                  888      888        888            888     
                  88888888 8888888888 888            888    
              */}
        </Grid>
      </Grid>
    </div>
  );
}
