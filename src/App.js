import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatComponent from "./Components/ChatComponent";
import Sidebar from "./Components/Sidebar";
// import Home from "./Components/Home.jsx";
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import {Container,Row} from 'react-bootstrap';
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";

function App() {
  // const [userLoggedIn,setUserLoggedIn] = useState(false);
  const history = useHistory();

  const [selectedRoomId, setSelectedRoomId] = useState("");

  function setRoomId(roomId) {
    console.log(roomId);
    setSelectedRoomId(roomId);
  }

  let routes = (
    <Switch>
      <Route
        path="/login"
        component={(...routerProps) => <Login {...routerProps} />}
      />
      <Route
        path="/register"
        component={(...routerProps) => <SignUp {...routerProps} />}
      />
      <Route path="/chat" history={history} exact>
        <Sidebar sendSelectedRoomId={(roomId) => setRoomId(roomId)} />
        <ChatComponent selectedRoomId={selectedRoomId} />
      </Route>
    </Switch>
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/me`, {
        withCredentials: true, //cookies automatically attached with withCredentials
      })
      .then((res) => {
        console.log(res);
        console.log("User Is logged in");
        return history.push("/chat");
      })
      .catch(() => history.push("/login"));
  }, [history]);

  return (
    <div className="app">
      <div className="appBody">{routes}</div>
    </div>
  );
}

export default App;
