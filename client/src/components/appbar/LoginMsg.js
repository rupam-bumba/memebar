import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navstyle: {
    textDecoration: "none",
    color: "white",
    paddingTop: 4,
    size : 100
  },
}));

export default function LoginMsg() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color = "secondary">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            You are not loged in 
          </Typography>
          <Button color="inherit">
          <Link to="/Users" className={classes.navstyle}>
             LOGIN
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}