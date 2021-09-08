import React from 'react';
import "./App.css"
// import ChatComponent from './Components/ChatComponent';
// import Sidebar from './Components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home.jsx";

function App() {
  return (
    <div className="app">
      <div className="appBody">
    <Home/>
      <Sidebar/>
      <ChatComponent/>
      </div>
    </div>
  );
}

export default App;
