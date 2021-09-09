import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatComponent from "./Components/ChatComponent";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home.jsx";
import { Route ,useHistory} from "react-router-dom";
import {useEffect} from 'react';
import axios from "axios";


function App() {

  // const [userLoggedIn,setUserLoggedIn] = useState(false);
const history = useHistory();
  useEffect(()=>{
   
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/me`,{
          withCredentials:true //cookies automatically attached with withCredentials
        }).then((res)=> history.push("/chat"))
        .catch((err)=>history.push("/login"))
    

  },[])
  return (
      <div className="app">
        <div className="appBody">
          <Route path={["/login", "/register"]} exact component={Home} />
          <Route path="/chat" exact>
            <Sidebar />
            <ChatComponent />
          </Route>
        </div>
      </div>
  );
}


export default App;
