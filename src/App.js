import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatComponent from "./Components/ChatComponent";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function App(props) {
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/user/me`, {
          withCredentials: true, //cookies automatically attached with withCredentials
        })
        .then((res) => (res ? console.log(res.data) : console.log("No data")))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <div className="appBody">
          <Route path={["/login", "/register"]} exact component={Home} />
          <Route path="/" exact>
            <Sidebar />
            <ChatComponent />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
