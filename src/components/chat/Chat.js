import React from 'react'
import './Chat.css'
import ChatBody from'./ChatBody';
import ChatFoot from './ChatFoot'
function Chat() {
    return (
        <div className="chat">
            <ChatBody />
            <ChatFoot />
        </div>
    )
}

export default Chat
