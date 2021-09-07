import React from 'react';
import "./App.css"
import ChatComponent from './Components/ChatComponent';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      
      <Sidebar/>
      <ChatComponent/>
    </div>
  );
}

export default App;
