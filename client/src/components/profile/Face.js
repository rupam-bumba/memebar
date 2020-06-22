import React, { useState, useEffect  ,useContext  } from "react";
//axios
import axios from "axios";

import {GrobalContex} from "../../context/GlobalContex"


//cookes manager
import cookie from "js-cookie";

import { Link } from "react-router-dom";

// style pakeges
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";

// import a image file |tempory|
import desktopPhoto from "./aa.jpg";

// style component
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

//main
export default function Face() {
  // class object
  const classes = useStyles();
  const [GlobalContexValue, setGlobalContexValue] = useContext(GrobalContex)

  const [faceInfo, setFaceInfo] = useState({
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
    subscribers: "",
    subscribe: "",
    friends: "",
  });

  useEffect(() => {
    console.log(" |54 Debug | axios >> ");
    console.log(
      "|56 Debug | " +
        cookie.get("auth-token") +
        "\n user _ID >>> " +
        cookie.get("_id")
    );
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
          "|84 Debug | JSON.stringify(result) >> " + JSON.stringify(result)
        );
        console.log("|86 Debug | result.data[0]._id >> " + result.data[0]._id);

        setFaceInfo(() => ({
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
          subscribers: result.data[0].subscribers,
          subscribe: result.data[0].subscribe,
          friends: result.data[0].friends,
        }));
        console.log(
          "|102 Debug | JSON.stringify(faceInfo) >> " + JSON.stringify(faceInfo)
        );
        console.log(
          "|140 Debug |  faceInfo.firstname >> " + faceInfo.firstname
        );
      })
      .catch((err) => {
        console.log("|107 Debug | err >> " + err);
      });
  }, []);

  // Rendering Part
  return (
    <div>
      {console.log(
        "|114 Debug | JSON.stringify(faceInfo) >> " + JSON.stringify(faceInfo)
      )}
      <Card className={classes.root}>
        {/* <img
          src={desktopPhoto}
          style={{                                     TODO: TODO: TODO: TODO: TODO:
            float: "right",                              this is profile image 
            borderRadius: "50%",                         this is pofile image 
            width: "25%",                              TODO: TODO: TODO: TODO: TODO:
            padding: "10px",
          }}
        /> */}
        <CardContent>
          <Typography variant="h5" component="h2">
            <p>
              {faceInfo.firstname} {faceInfo.lastname + " "}
              <Button variant="outlined">
                <Link
                  to="/Edit"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Edit
                </Link>
              </Button>
              <Button
                style={{
                  backgroundColor: "transparent",
                  textDecoration: "none",
                }}
                href="/Setings"
              >
                <SettingsIcon fontSize="large" />
              </Button>
            </p>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            user name {faceInfo.username}
          </Typography>
          <Typography variant="body2" component="p">
            bio {faceInfo.bio}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">follower 123 {faceInfo.subscribers} </Button>
          <Button size="small">folowing 321 {faceInfo.subscribe} </Button>
          <Button size="small">freands 231 {faceInfo.friends} </Button>
        </CardActions>
      </Card>
    </div>
  );
}
