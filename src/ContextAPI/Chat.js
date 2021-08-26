import React ,{ createContext, useState} from 'react'

export const ChatContext = createContext();

export const ChatProvider = (props)=> {
    const [chat,setChat] = useState([]);
    return (
        <ChatContext.Provider value={[chat,setChat]}>
            {props.children}
        </ChatContext.Provider>
    );
}