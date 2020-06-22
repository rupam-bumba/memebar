import React, { useEffect ,useState ,useContext } from "react";

import { Redirect } from "react-router-dom";

// cookie managers
import cookie from "js-cookie";

import {GrobalContex} from "../../context/GlobalContex"



import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

// link other pages
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  papers: {
    maxWidth: 600,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default function More() {
  const classes = useStyles();
  const [GlobalContexValue, setGlobalContexValue] = useContext(GrobalContex)
  // const [test, settest] = useState()

  const [islogoutsuccess, setislogoutsuccess] = useState(false)



  const handellogout = (event) => {
    event.preventDefault()
    console.log("| 34 Debug | handellogout");
    
    cookie.remove('auth-token');
    cookie.remove('_id');
    cookie.remove('login');

    console.log("| 42 Debug | Cookies removed  ");
    setislogoutsuccess(true)
    window.location.reload();



    // cookie.set("auth-token", result.data.token, { expires: 13 });
    //     cookie.set("_id", result.data.userID, { expires: 13 });
    //     cookie.set("login", true, { expires: 13 });
  };

  // useEffect(() => {
  //   axios
  //     .get(GlobalContexValue.url+"api/more")
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log("Axios " + err);
  //     });
  // }, []);

  return (

    
    
    <div className={classes.root}>

      {
        // if loged in  redirect to /HOME TODO:
        islogoutsuccess && <Redirect to="/home" />
        // cookie.get('login')&& "|Debug| login"

      }
      <Grid container spacing={3}>
        {/* right side gride */}
        <Grid item xs={0} sm={3}>
          <Typography variant="h4" component="h6" align="center" gutterBottom>
            More
          </Typography>
        </Grid>

        {/*     main  gride    */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.papers}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>P</Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  <Link to="/profile">Profile</Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.papers}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>S</Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  <Link to="/Setings">Setings</Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.papers}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>A</Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  <Link to="/About">About</Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.papers}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar></Avatar>
              </Grid>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  <form onSubmit={handellogout}>
                    <button
                      type="submit"
                      style={
                        {
                          background: "none",
                          color: "red",
                          border: "none",
                          padding: "0",
                          font: "inherit",
                          cursor: "pointer",
                          outline: "inherit"
                        }
                      }
                    >
                      Logout
                    </button>
                  </form>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/*  left side gride  */}
        <Grid item xs={0} sm={3}>
          {/* <Paper className={classes.paper}>left</Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
