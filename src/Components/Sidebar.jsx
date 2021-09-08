import "../Styles/Sidebar.css"
import React from 'react'
import { IconButton, Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Add from "@material-ui/icons/Add";
import { MoreVert } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import {Context} from '../../src/Store/Context'
import {useContext} from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

const Sidebar = () => {

    const [conversations, setConversations] = useState([])

    const {user} = useContext(Context)
    console.log(user)

    useEffect(() => {
        const getConversations = async () => {
            try {
                
                const res = axios.get(process.env.REACT_APP_BACKEND_URL + "/users/me", { withCredentials: true }).then(res => console.log(res))
               console.log(res)
               setConversations(res.data)
            } catch (error) {
                console.log(error)
            }            
        }
        getConversations()
    }, [])

    return (
        <div className="sidebar" >
            <div className="sidebarHeader">
            <Avatar/>
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
                    <SearchIcon/>
                    <input placeholder="Search or Start a new chat" type="text"/>
                </div>
            </div>
            <div className="sidebarChats">
            {conversations.map((c) => (
               
            <SidebarChat conversations={c}/>
            ))}

            </div>
        </div>
    )
}

export default Sidebar
