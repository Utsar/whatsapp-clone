import React from "react";
import "../Styles/ChatComponent.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicNoneIcon from "@material-ui/icons/MicNone";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { useState, useEffect } from "react";
import axios from "axios";

const ChatComponent = () => {
  const [rooms, setRooms] = useState([]);
  const getRooms = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/chats/my-rooms`, {
          withCredentials: true,
        })
        .then((res) => {
          setRooms(res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);
  return (
    <div className="chatComponent">
      <div className="chatComponentHeader">
        <Avatar />
        <div className="chatComponentHeaderInfo">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div>
                <h3 key={room._id}>{room.name}</h3>
                {room.members.map((member) => (
                  <p key={member}>{member}</p>
                ))}
              </div>
            ))
          ) : (
            <h3>No Rooms Yet</h3>
          )}
          {/* <h3>Room name</h3>
          <p>description...</p> */}
        </div>
        <div className="chatComponentHeaderRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      {rooms.length > 0 ? (
        rooms.map((room) =>
          room.messages.map((mess) => (
            <div className="chatComponentBody" key={mess._id}>
              <p className="chatComponentMessage">
                <span className="chatComponentBodyUserInfo">{mess.user}</span>
                {mess.message}
              </p>
            </div>
          ))
        )
      ) : (
        <h1>Loading...</h1>
      )}
      {/* <div className="chatComponentBody">
        <p className="chatComponentMessage">
          <span className="chatComponentBodyUserInfo">Hello im the name!</span>
          message
          <span className="chatComponentBodyTimeStamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className="chatComponentMessage chatComponentMessageReceiver">
          <span className="chatComponentBodyUserInfo">Hello im the name!</span>
          message
          <span className="chatComponentBodyTimeStamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div> */}
      <div className="chatComponentMessagebar">
        <InsertEmoticonIcon />
        <AttachFileIcon />
        <form>
          {/* imput will have value={input} onChange={(e) => setInput(e.target.value)} */}
          <input placeholder="Type a message" type="text" />

          <button type="submit">Send a message</button>
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
};

export default ChatComponent;
