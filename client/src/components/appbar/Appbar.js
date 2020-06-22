import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Explore from "@material-ui/icons/Explore";
import Icon from "./happy.svg";

import { Link } from "react-router-dom";

/**********************************************************************
                              makeStyles
**********************************************************************/
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: "center",
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },

  title: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  },

  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },

  sectionDesktop: {
    display: "flex",
  },

  sectionMobile: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  navstyle: {
    textDecoration: "none",
    color: "white",
    paddingTop: 4,
  },
  margintop: {
    marginTop: 90,
  },
}));

/**********************************************************************
                                Appbar                            
**********************************************************************/
export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.margintop}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          {/* IconButton */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <Link to="/Home">
              <img src={Icon} height="40" alt={"cat logo"} />
            </Link>
          </IconButton>

          {/* memebar name */}
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/Home" className={classes.navstyle}>
              Memebar
            </Link>
          </Typography>

          {/* Search box   */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          {/* Nave icon  */}
          <div className={classes.sectionDesktop}>
            {/* Explore  */}
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <Link to="/Explore" className={classes.navstyle}>
                  <Explore />
                </Link>
              </Badge>
            </IconButton>

            {/* MailIcon  */}
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <Link to="/Message" className={classes.navstyle}>
                  <MailIcon />
                </Link>
              </Badge>
            </IconButton>

            {/* NotificationsIcon  */}
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <Link to="/Notification" className={classes.navstyle}>
                  <NotificationsIcon />
                </Link>
              </Badge>
            </IconButton>

            {/* MenuIcon  */}
            <IconButton aria-label="show more page" color="inherit">
              <Link to="/more" className={classes.navstyle}>
                <MenuIcon />
              </Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* {
        // if loged in  redirect to /HOME TODO:
        cookie.get('login') && <Redirect to="/home" />
        // cookie.get('login')&& "|Debug| login"

      } */}
      <p >This Is A BETA Version</p>
    </div>
  );
}
