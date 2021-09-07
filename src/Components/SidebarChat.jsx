import { Avatar } from '@material-ui/core'
import React from 'react'
import "../Styles/SidebarChat.css"
const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChatInfo">
            <h4>Chat Room Name</h4>
            <p>message</p>

            </div>
        </div>
    )
}

export default SidebarChat
