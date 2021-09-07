import React from 'react';
import "../Styles/ChatComponent.css";
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneIcon from '@material-ui/icons/MicNone';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const ChatComponent = () => {
    return (
        <div className="chatComponent">
        <div className="chatComponentHeader">
        <Avatar/>
        <div className="chatComponentHeaderInfo">
        <h3>Room name</h3>
        <p>description...</p>
        </div>
        <div className="chatComponentHeaderRight">
           <IconButton>
               <SearchIcon/>
           </IconButton>
           <IconButton>
               <MoreHorizIcon/>
           </IconButton>
        </div>
        </div>
        <div className="chatComponentBody">
            <p className="chatComponentMessage">
            <span className="chatComponentBodyUserInfo">Hello im the name!</span>
            message
            <span className="chatComponentBodyTimeStamp">{new Date().toUTCString()}</span>
            </p>
            <p className="chatComponentMessage chatComponentMessageReceiver">
            <span className="chatComponentBodyUserInfo">Hello im the name!</span>
            message
            <span className="chatComponentBodyTimeStamp">{new Date().toUTCString()}</span>
            </p>
        </div>
        <div className="chatComponentMessagebar">
        <InsertEmoticonIcon/>
        <AttachFileIcon/>
        <form>
        {/* imput will have value={input} onChange={(e) => setInput(e.target.value)} */}
            <input  placeholder="Type a message" type="text"/>
            
            <button type="submit">Send a message</button>
        </form>
        <MicNoneIcon/>
        </div>
        </div>
    )
}

export default ChatComponent
