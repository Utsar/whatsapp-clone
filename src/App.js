import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatComponent from "./Components/ChatComponent";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
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
