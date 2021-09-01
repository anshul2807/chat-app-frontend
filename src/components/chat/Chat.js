import React,{useEffect} from 'react'
import './Chat.css'
import ChatBody from'./ChatBody';
import ChatFoot from './ChatFoot'
function Chat() {
    useEffect(() => {
        document.title = "chat"
      }, [])
    return (
        <div className="chat">
            <ChatBody />
            <ChatFoot />
        </div>
    )
}

export default Chat
