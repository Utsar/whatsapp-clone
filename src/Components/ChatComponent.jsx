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

const ChatComponent = (props) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [rooms, setRooms] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const getRooms = () => {
    try {
      axios
        .get(`${url}/api/v1/chats/my-rooms`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setRooms(res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //Room Id is drilled here when clicking a room in side chat
    if (props.selectedRoomId) {
      // Needs to be refactored using Redux
      console.log(props.selectedRoomId);
      setSelectedRoom(props.selectedRoomId);
    }
  }, [props.selectedRoomId]);

  useEffect(() => {
    getRooms();
  }, []);

  const sendMessage = (e) => {
    console.log("Preparing to send message");
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/chats/new-message`,
        {
          roomId: selectedRoom,
          message: message,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        console.log("Message sent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <div className="chatComponentBody">
        {rooms.length > 0 ? (
          rooms.map((room) =>
            room.messages.map((mess) => (
              <p className="chatComponentMessage" key={mess._id}>
                <span className="chatComponentBodyUserInfo">{mess.user}</span>
                {mess.message}
              </p>
            ))
          )
        ) : (
          <h3>No messages yet</h3>
        )}
      </div>
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
          {/* input will have value={input} onChange={(e) => setInput(e.target.value)} */}
          <input
            placeholder="Type a message"
            value={message}
            onKeyDown={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
          />

          {/* addEventListener("keydown", function (e) { if (e. code === "Enter") { //checks whether the pressed key is "Enter" validate(e); } }); function validate(e) { var text = e. target. value; //validation of the input... } */}
          {/* <button onClick={()=>sendMessage()}>Send a message</button> */}
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
};

export default ChatComponent;
