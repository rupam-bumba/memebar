import React, { useState, useEffect ,useContext } from "react";

import {GrobalContex} from "../../context/GlobalContex"

//axios
import axios from "axios";

//cookes manager
import cookie from "js-cookie";

// link from rought
import { Link } from "react-router-dom";

//clsx
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";


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
    width: "25ch",
  },
}));

//main
export default function Form() {
  const classes = useStyles();
  const [GlobalContexValue, setGlobalContexValue] = useContext(GrobalContex)
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    dateofbirth: "",
    gender: "",
    phonenumber: "",
    website: "",
    bio: "",
    interest: "",
  });

  const [Updatetrigger, setUpdatetrigger] = useState(false);

  const [issubmit, setissubmit] = useState(false);

  // effect hook for fatch data of users
  useEffect(() => {
    console.log("| 67 Debug | UseEffect Reloding...");
    console.log("|65 Debug | axios one  >> ");
    console.log(
      "|69 Debug | cookie.get('auth-token')" + cookie.get("auth-token")
    );
    console.log("|70 Debug | cookie.get('_id') user _ID " + cookie.get("_id"));

    axios({
      // `method` is the request method to be used when making the request
      method: "post",

      // `url` is the server URL that will be used for the request
      url: "api/profile/face",

      // `baseURL` will be prepended to `url` unless `url` is absolute.
      baseURL: GlobalContexValue.url,

      // `headers` are custom headers to be sent
      headers: { Authorization: "Bearer" + " " + cookie.get("auth-token") },

      // `data` is the data to be sent as the request body
      data: {
        _id: cookie.get("_id"),
      },
    })
      .then((result) => {
        console.log(
          "|92 Debug |JSON.stringify(result)" + JSON.stringify(result)
        );
        console.log("|94 Debug | result.data[0]._id" + result.data[0]._id);

        setValues(() => ({
          firstname: result.data[0].firstname,
          lastname: result.data[0].lastname,
          email: result.data[0].email,
          username: result.data[0].username,
          phonenumber: result.data[0].phonenumber,
          website: result.data[0].website,
          dateofbirth: result.data[0].dateofbirth,
          gender: result.data[0].gender,
          bio: result.data[0].bio,
          interest: result.data[0].interest,
        }));
        console.log(
          "|108 Debug | JSON.stringify(faceInfo) >> " +
            JSON.stringify(setValues)
        );
        console.log(
          "|111 Debug |  faceInfo.firstname >> " + setValues.firstname
        );
      })
      .catch((err) => {
        console.log("|117 Debug | err >> " + err);
      });
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleFromSubmit = (event) => {
    event.preventDefault();
    setUpdatetrigger(!Updatetrigger);
    setissubmit(true);
    console.log("| 130 Debug |   Updatetrigger " + Updatetrigger);
    console.log(
      "| 131 Debug |   JSON.stringify(values) " + JSON.stringify(values)
    );
  };

  // Submit edit updateed values

  useEffect(() => {
    console.log("| 139 Debug | UseEffect Reloding...");

    if (issubmit) {
      console.log("| 138 Debug | axios two  >> ");

      axios({
        // `url` is the server URL that will be used for the request
        url: "api/profile/edit",

        // `method` is the request method to be used when making the request
        method: "put", // default

        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.
        baseURL: GlobalContexValue.url,

        // `headers` are custom headers to be sent
        headers: { Authorization: "Bearer" + " " + cookie.get("auth-token") },

        // `data` is the data to be sent as the request body
        // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
        data: {
          _id: cookie.get("_id"),
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          username: values.username,
          dateofbirth: values.dateofbirth,
          gender: values.gender,
          phonenumber: values.phonenumber,
          website: values.website,
          bio: values.bio,
          interest: values.interest,
        },
      })
        .then((result) => {
          console.log(
            "| 168 Debug | axios >> result :" + JSON.stringify(result)
          );
        })
        .catch((error) => {
          console.log("| 171 Debug | axios >> error :" + JSON.stringify(error));
        });
    }
  }, [Updatetrigger]);

  return (
    <div className={classes.root}>
      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={handleFromSubmit}>
          <FormControl //firstname
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="firstname"
              label="firstname"
              type="string"
              variant="outlined"
              size="small"
              value={values.firstname}
              onChange={handleChange("firstname")}
            />
          </FormControl>

          <FormControl //lastname
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="lastname"
              label="lastname"
              type="string"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              value={values.lastname}
              onChange={handleChange("lastname")}
            />
          </FormControl>

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="username"
              label="username"
              type="string"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              value={values.username}
              onChange={handleChange("username")}
            />
          </FormControl>

          <FormControl //email
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="email"
              label="email"
              type="email"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              value={values.email}
              onChange={handleChange("email")}
            />
          </FormControl>

          <FormControl //Phone Number
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="phonenumber"
              label="Phone Number"
              type="number"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              value={values.phonenumber}
              onChange={handleChange("phonenumber")}
            />
          </FormControl>

          <FormControl //bio
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="bio"
              label="bio"
              type="textarea"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              multiline
              rows={4}
              value={values.bio}
              onChange={handleChange("bio")}
            />
          </FormControl>

          <FormControl //interest
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="interest"
              label="interest"
              type="search"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              value={values.interest}
              onChange={handleChange("interest")}
            />
          </FormControl>

          <FormControl //Website
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="Website"
              label="Website"
              type="search"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              value={values.website}
              onChange={handleChange("website")}
            />
          </FormControl>

          <FormControl //date of birth
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="dateofbirth"
              label="date of birth"
              type="date"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              // value="2115-08-09"
              value={values.dateofbirth}
              onChange={handleChange("dateofbirth")}
            />
          </FormControl>

          <FormControl // gender
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "100%" }}
          >
            <TextField
              id="gender"
              label="gender"
              type="string"
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              value={values.gender}
              onChange={handleChange("gender")}
            />
          </FormControl>

          <FormControl // gender
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "30%" }}
          >
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </FormControl>

          <FormControl // gender
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            style={{ width: "50%" }}
          >
            <Link to="/Setings"> Change Password </Link>
          </FormControl>
        </form>
      </div>
    </div>
  );
}
