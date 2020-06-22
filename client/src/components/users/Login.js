import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import {GrobalContex} from "../../context/GlobalContex"


import clsx from "clsx"; // un used
// contex from src >> contex
import { UserDataContex } from "../../context/UserDataContex";
// cookie managers
import cookie from "js-cookie";

// axios fatching lib
import axios from "axios";

// material-ui packges
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
// import Input from "@material-ui/core/Input";
// import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// styleing component
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

//main
export default function Login() {
  const classes = useStyles();
  const [GlobalContexValue, setGlobalContexValue] = useContext(GrobalContex)
  // const [UserData, setUserData] = useContext(UserDataContex);
  // const [isloging, setisloging] = useState(false)
  //
  const [logintrigger, setlogintrigger] = useState(false);
  const [reLoadOnce, setreLoadOnce] = useState(false)


  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  // seting values
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log("|63 DEBUG | " + JSON.stringify(values));
  };
  // password EYE show hide
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  //password key press
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //form handel on submit
  const handleFormSubmit = (evnt) => {
    evnt.preventDefault();
    console.log("|76 DEBUG | " + "Login Submit form call >> ");
    setlogintrigger(!logintrigger);
    console.log("|78 DEBUG | " + logintrigger);
  };

  // faching token values value
  useEffect(() => {
    console.log("|83 DEBUG | [logintrigger] useEffect relode ");
    console.log("|84 DEBUG | [in useEffect]" + JSON.stringify(values));

    axios
      .post(GlobalContexValue.url+"/api/user/login", {
        email: values.email,
        password: values.password,
      })
      // suscessfull user fached data
      .then((result) => {
        console.log("|93 DEBUG | axios >> user >> login >> ");
        console.log("|94 DEBUG | "+result.data);

        // set cookes
        cookie.set("auth-token", result.data.token, { expires: 13 });
        cookie.set("_id", result.data.userID, { expires: 13 });
        cookie.set("user_name", result.data.user_name, { expires: 13 });

        cookie.set("login", true, { expires: 13 });
        // console.log('|100 DEBUG| contex api userData updated >>>> '+JSON.stringify(UserData));

        setreLoadOnce(true)
        window.location.reload();
      })
      .catch((err) => {
        // console.log("|105 DEBUG| axios >> user >> error >> ");
        // console.log("|106 DEBUG|" + err);
        // TODO: error heandeling
      });
  }, [logintrigger,reLoadOnce]);

  // front end viwe
  return (
    <div className={classes.root}>

      {
        // if loged in  redirect to /HOME TODO:
        cookie.get('login')&& <Redirect to="/home" />  
        // cookie.get('login')&& "|Debug| login"

      }

      <h2>Log in</h2>

      <div>
        <form onSubmit={handleFormSubmit}>
          <FormControl // email
            fullWidth
            className={
              (clsx(classes.margin, classes.textField), classes.margin)
            }
            variant="outlined"
          >
            <TextField
              id="outlined-search"
              label="Email"
              type="search"
              variant="outlined"
              onChange={handleChange("email")}
            />
          </FormControl>

          <FormControl // Password
            fullWidth
            className={
              (clsx(classes.margin, classes.textField), classes.margin)
            }
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <FormControl // Login  Button
            className={classes.margin}
            variant="outlined"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              LogIn
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
}
