import React,{useEffect} from 'react'
import './Body.css';
import {Link} from "react-router-dom";
function Body() {
    useEffect(() => {
        document.title = "home"
      }, [])
    return (
        <div className="body">
           <div className="body__first">
                <h1>Go Anonymous</h1>
                <Link className="body__start" to="/chat">Get Started</Link>
           </div>

           <div className="body__second">
                <h1>Go with Login </h1>
                <Link className="body__start" to="/login">Get Started</Link>
           </div>
        </div>
    )
}

export default Body
