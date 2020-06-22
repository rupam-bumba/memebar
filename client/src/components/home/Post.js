import React, { useEffect, useState ,useContext } from "react";

import {GrobalContex} from "../../context/GlobalContex"



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
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import axios from "axios";
//cookes manager
import cookie from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {},
  input: {
    display: "none", // not show HTML input  icon
  },
}));

export default function Post() {
  const classes = useStyles();
  const [GlobalContexValue, setGlobalContexValue] = useContext(GrobalContex)
  const [values, setValues] = useState({
    enctype: "multipart/form-data",
    text: "oioioi",
    postImageFileName: "",
  });

  const [isSetSubmit, setisSetSubmit] = useState(false);
  const [treggerUpload, settreggerUpload] = useState(false);
  const [issetfile, setissetfile] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(" | 51 Debug values| " + JSON.stringify(values));
  };

  const handleChangeFile = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.files[0] });
    console.log(" | 57 Debug event.target.files | " + event.target.files[0]);
    console.log(
      " | 57 Debug event.target.files | " +
        JSON.stringify(event.target.files[0])
    );
    setissetfile(true);

    console.log(" | 57 Debug values| " + JSON.stringify(values));
  };

  const handelsubmit = (event) => {
    event.preventDefault();
    setisSetSubmit(true);
    settreggerUpload(!treggerUpload);
    console.log("| 71 Debug |   treggerUpload " + treggerUpload);
  };

  useEffect(() => {
    console.log("| 66 Debug  |  use Effect reload");

    const formData = new FormData(); // Currently empty

    formData.append("enctype", values.enctype);
    formData.append("postImageFileName", values.postImageFileName);
    formData.append("text", values.text);
    formData.append("_user_id", cookie.get("_id"));
    formData.append("user_name", cookie.get("user_name"));



    var data = {
      // `url` is the server URL that will be used for the request
      url: "/api/post/upload",

      // `method` is the request method to be used when making the request
      method: "post", // default

      // `baseURL` will be prepended to `url` unless `url` is absolute.
      baseURL: GlobalContexValue.url,

      // `headers` are custom headers to be sent
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer" + " " + cookie.get("auth-token"),
      },

      // `data` is the data to be sent as the request body
      data: formData,
    };
    console.log("| 108 Debug  |  " + JSON.stringify(data));

    if (isSetSubmit) {
      axios(data)
        .then((result) => {
          console.log(
            "| 114 Debug JSON.stringify(result) |" + JSON.stringify(result)
          );
          window.location.reload();
        })
        .catch((errors) => {
          console.log(
            "| 119 Debug JSON.stringify(errors) |" + JSON.stringify(errors)
          );
          
        });
    }
  }, [treggerUpload]);

  return (
    <div className={classes.root}>
      <div>
        <form onSubmit={handelsubmit}>
          <Card className={classes.root}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              style={{ width: "97%" }}
            >
              <TextField
                id="text"
                placeholder="Wellcome To Memebar"
                type="textarea"
                multiline
                fullWidth
                rows={2}
                variant="outlined"
                style={{ width: "100%" }}
                onChange={handleChange("text")}
              />
            </FormControl>

            <div>
              <Grid container spacing={0}>
                <Grid item xs={6} style={{ background: "" }}>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <input
                      id="contained-button-file"
                      accept="image/*"
                      className={classes.input}
                      //multiple
                      type="file"
                      onChange={handleChangeFile("postImageFileName")}
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                       Photo
                      </Button>
                      <span> {issetfile ? "Seleced" : " "}</span>
                    </label> 
                  </FormControl>
                </Grid>

                <Grid item xs={3} style={{ background: "" }}></Grid>
                <Grid item xs={3} style={{ background: "" }}>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    style={{ width: "85%" }}
                  >
                    <Button variant="contained" color="primary" type="submit">
                      post
                    </Button>
                    
                  </FormControl>
                </Grid>
              </Grid>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
}
