import React from 'react'
import './Join.css'
function Join({setIsJoin,setToggle}) {
    const handleclose=()=>{
        setIsJoin(false)
        setToggle(false)
    }
    return (
        <div className="join">
           <label className="join__label">Enter the Details</label>
           <div className="join__sec1">
                <label>Room ID :</label>
                <input />
           </div> 
           <div className="join__button">
                <button>Join</button>
                <button onClick={handleclose}>Close</button>
           </div>
        </div>
    )
}

export default Join
