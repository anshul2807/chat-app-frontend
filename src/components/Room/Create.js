import React,{useState} from 'react'
import './Create.css'
function Create({setIsCreate,setToggle}) {
    const handleclose=()=>{
        setIsCreate(false)
        setToggle(false)
    }
    return (
        <div className="create">
            <label className="create__label">Enter the Details</label>
           <div className="create__sec1">
                <label>Enter Room Name</label>
                <input />
           </div> 
           <div className="create__sec1">
                <label>Create a Unique Room ID :</label>
                <input />
           </div>
           <div className="create__button">
                <button>Create</button>
                <button onClick={handleclose}>Close</button>
           </div>
        </div>
    )
}

export default Create
