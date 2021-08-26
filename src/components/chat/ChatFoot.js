import React,{useState,useContext,useCallback,useEffect} from 'react'
import './ChatFoot.css'
import {ChatContext} from '../../ContextAPI/Chat'
import {ConnectContext} from '../../ContextAPI/Connect'
function ChatFoot() {

    const [connect,setConnect]=useContext(ConnectContext);

    const [chat,setChat] = useContext(ChatContext);
    const [message,setMessage]=useState('');
    const handleSubmit = () =>{
        if(message){
            setChat([...chat,{user:"first",chat:message,id:1}])
            setMessage('');
        }       
    }
    const keyPress = (e)=>{
        if (e.key === "Enter"){
            handleSubmit();       
        }
    }
    const handleESC = ()=>{
        setChat([]);
        setMessage('');   
    }
   
    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            handleESC();
        }
    }, []);
      
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
      
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);
      
       
      
    return (
        <div className="chatfoot" onKeyPress={keyPress}>
            <div className="chatfoot__first" onClick={handleESC}>
                <label>New</label>
                <p><strong>ESC</strong></p>
            </div>
            <div className="chatfoot__second">
                <form action={handleSubmit}>
                    <textarea disabled={!connect} type="text" onKeyPress={keyPress} value={message} onChange={e=>setMessage(e.target.value)}></textarea>
                </form>
            </div>
            <div className="chatfoot__third" onClick={handleSubmit}>
                <label >Send</label>
                <p><strong>ENTER</strong></p>
            </div>
        </div>
    )
}
export default ChatFoot