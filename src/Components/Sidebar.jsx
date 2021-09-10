import "../Styles/Sidebar.css";
import React from "react";
import { IconButton, Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Add from "@material-ui/icons/Add";
import { MoreVert } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";
import { useState, useEffect } from "react";
import axios from "axios";


const Sidebar = (props) => {

  function selectedRoomId(roomId){
    console.log(roomId)
   props.sendSelectedRoomId(roomId);
  };
  
  const [rooms, setRooms] = useState([]);
  const getRooms = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/chats/my-rooms`, {
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
    <div className="sidebar">
      <div className="sidebarHeader">
        <Avatar />
        <div className="sidebarHeaderRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebarSearch">
        <div className="sidebarSearchContainer">
          <SearchIcon />
          <input placeholder="Search or Start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebarChats">
        <SidebarChat selectedRoom={(roomId)=> selectedRoomId(roomId)} rooms={rooms} />
      </div>
    </div>
  );
};

export default Sidebar;
