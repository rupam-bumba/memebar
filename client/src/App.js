import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//cookes manager
import cookie from "js-cookie";

// contex from src >> contex
import { GlobalContexProvider } from "./context/GlobalContex";
import { UserDataContexProveder } from "./context/UserDataContex";

// components from src >> components

import About from "./components/about/About"
import Appbar from "./components/appbar/Appbar";
import Edit from "./components/edit/Edit";
import Explore from "./components/explore/Explore";
import Home from "./components/home/Home";
import Message from "./components/message/Message ";
import More from "./components/more/More";
import Notification from "./components/notification/Notification";
import Profile from "./components/profile/Profile";
import Save from "./components/save/Save";
import Search from "./components/search/Search";
import Setings from "./components/setings/Setings";
import Users from "./components/users/Users";
import LoginMsg from "./components/appbar/LoginMsg";



function App() {
  return (
    <Router>
    
      <Appbar />
  { !cookie.get("login") && <LoginMsg/> }
      <GlobalContexProvider>
        <UserDataContexProveder>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Explore" component={Explore} />
            <Route path="/Home" component={Home} />
            <Route path="/Message" component={Message} />
            <Route path="/More" component={More} />
            <Route path="/Notification" component={Notification} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Save" component={Save} />
            <Route path="/Search" component={Search} />
            <Route path="/Users" component={Users} />
            <Route path="/Edit"  component={Edit} />
            <Route path="/Setings"  component={Setings} />
          </Switch>
        </UserDataContexProveder>
      </GlobalContexProvider>
    </Router>
  );
}

export default App;

// 8888888b.  8888888888        d8888  .d8888b. 88888888888             d8888 8888888b.  8888888b.
// 888   Y88b 888              d88888 d88P  Y88b    888                d88888 888   Y88b 888   Y88b
// 888    888 888             d88P888 888    888    888               d88P888 888    888 888    888
// 888   d88P 8888888        d88P 888 888           888              d88P 888 888   d88P 888   d88P
// 8888888P"  888           d88P  888 888           888             d88P  888 8888888P"  8888888P"
// 888 T88b   888          d88P   888 888    888    888            d88P   888 888        888
// 888  T88b  888         d8888888888 Y88b  d88P    888           d8888888888 888        888
// 888   T88b 8888888888 d88P     888  "Y8888P"     888          d88P     888 888        888
