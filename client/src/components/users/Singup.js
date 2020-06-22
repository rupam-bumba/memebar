import React, { useState, useEffect, useContext } from "react";
// cross access
import clsx from "clsx";
// factching
import axios from "axios";

import { GrobalContex } from "../../context/GlobalContex";

// material-ui
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
    width: 400,
  },
}));

export default function Singup() {
  const classes = useStyles();

  const [GlobalContexValue, setGlobalContexValue] = useContext(GrobalContex);
  const [Singuptrigger, setSinguptrigger] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    showPassword: false,
  });

  //sungup successsull then relode effect hook
  const [SingupSuccessfull, setSingupSuccessfull] = useState(false);

  const handleChange = (prop) => (event) => {
    // useState Handeling
    setValues({ ...values, [prop]: event.target.value });
    console.log("====>>>>" + JSON.stringify(values));
  };

  const handleClickShowPassword = () => {
    // password toggler
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    // password eye
    event.preventDefault();
  };

  const handleFromSubmit = (evnt) => {
    evnt.preventDefault();
    console.log("handleFromSubmit");
    setSinguptrigger(!Singuptrigger);
    console.log("| 72 Debug |" + Singuptrigger);
  };

  useEffect(() => {
    console.log("| 76 Debug | UseEffect Reloding...");
    axios
      .post(GlobalContexValue.url + "/api/user/singup", {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      })
      .then((result) => {
        console.log(" | 85 Debug | axios >> result :" + JSON.stringify(result));

        setSingupSuccessfull(true);
        /*
          TODO: add the contex  to the token
        */
      })
      .catch((err) => {
        console.log("axios > User > singup > " + err);
      });
  }, [Singuptrigger]);

  return (
    <div className={classes.root}>
      <h2>Sing up</h2>
      <div>
        <form onSubmit={handleFromSubmit}>
          <FormControl //First name
            fullWidth
            className={
              (clsx(classes.margin, classes.textField), classes.margin)
            }
            variant="outlined"
          >
            <TextField
              id="outlined-search"
              label="First name"
              type="search"
              variant="outlined"
              onChange={handleChange("firstname")}
            />
          </FormControl>

          <FormControl //Last name
            fullWidth
            className={
              (clsx(classes.margin, classes.textField), classes.margin)
            }
            variant="outlined"
          >
            <TextField
              id="outlined-search"
              label="Last name"
              type="search"
              variant="outlined"
              onChange={handleChange("lastname")}
            />
          </FormControl>

          <FormControl //email"
            fullWidth
            className={
              (clsx(classes.margin, classes.textField), classes.margin)
            }
            variant="outlined"
          >
            <TextField
              id="outlined-search"
              label="email"
              type="email"
              variant="outlined"
              onChange={handleChange("email")}
            />
          </FormControl>

          <FormControl // password
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
            <p>
              <b>NOTE:</b> Please don't use any password which you are using in other
              websites like Email or Bank. All though we are using MD5 password
              hashing algorithm then also we still recoment to use a simple
              password like 'abcd1234 or xyz987' because we have not tested yet.
            </p>
            <p>
              <b>Terms and Conditions:</b> This is a BETA version. We may not keep all
              Record safe to our database we may drop our databases and files at
              any point of time. we are in Development and texting process we
              will Lunch a stable alpha version in the feature.
            </p>
            <p>
            <b>Privacy Policy :</b> Please don't share any privet or personal
              information such as your age, gender, how many siblings you have,
              your favourite food, etc. private information: information that
              can be used to identify you, such as your Social Security number,
              street address, email, phone number, etc.
            </p>
            <p><b>Sing up only if you understand and agree all the above  NOTE , Terms and Conditions , Privacy Policy </b></p>
          </FormControl>

          <FormControl //SingUp Button
            className={classes.margin}
            variant="outlined"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              SingUp
            </Button>
          </FormControl>

          <Button>{SingupSuccessfull ? "Singup Successfull" : ""}</Button>
        </form>
      </div>
    </div>
  );
}
