import React,{useContext,useRef,useEffect,useState} from 'react'
import './ChatBody.css'
import {ChatContext} from '../../ContextAPI/Chat'
import {ConnectContext} from '../../ContextAPI/Connect'
import ScrollToBottom from 'react-scroll-to-bottom';
function ChatBody() {

    const [chat,setChat] = useContext(ChatContext);
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [chat]);

    const [connect,setConnect]=useContext(ConnectContext);

    return (
        <div className="chatbody">
            <div className="chatbody__title">
                <h2>You are Connected</h2>
                {!connect?
                <p>Waiting for the User...</p>
                :
                <p>You'r Connected , Start Chatting! </p>
                }
            </div>
            <div className="chatbody__message" >
                {chat.map((list,index)=>{
                    if(list.user === "first"){
                        return (
                            <div key={index} className="chatbody__section" >
                                <p className="chatbody__section__name user1">You : </p>
                                <p className="chatbody__section__message">{list.chat}</p>
                            </div> 
                        );
                    }
                    else{
                        return (
                            <div key={index} className="chatbody__section">
                                <p className="chatbody__section__name user2">Anonymous : </p>
                                <p className="chatbody__section__message">{list.chat}</p>
                            </div>
                        );
                    }
                })}
            <div ref={messagesEndRef} />
            </div>
        </div>
    )
}

export default ChatBody;
