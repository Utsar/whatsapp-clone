import { Avatar } from "@material-ui/core";
import React from "react";
import "../Styles/SidebarChat.css";
const SidebarChat = ({ rooms }) => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChatInfo">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.id}>
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
