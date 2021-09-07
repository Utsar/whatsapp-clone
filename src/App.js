import React from 'react';
import "./App.css"
import ChatComponent from './Components/ChatComponent';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="appBody">
      <Sidebar/>
      <ChatComponent/>
      </div>
    </div>
  );
}

export default App;
