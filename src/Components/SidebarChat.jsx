import { Avatar } from "@material-ui/core";
import React from "react";
import "../Styles/SidebarChat.css";
const SidebarChat = (props) => {


  function sendRoomIdToChat(roomId) {
    console.log(roomId);
    props.selectedRoom(roomId);
  }
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChatInfo">
        {props.rooms.length > 0 ? (
          props.rooms.map((room) => (
            <div onClick={()=> sendRoomIdToChat(room._id)} key={room._id}>
              <p>{room._id}</p>
            </div>
          ))
        ) : (
          <h2>No Rooms Yet</h2>
        )}
      </div>
    </div>
  );
};

export default SidebarChat;
