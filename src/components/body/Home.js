import React,{useState} from 'react'
import './Home.css'
import Join from '../Room/Join'
import Create from '../Room/Create';
function Home() {
    const [isJoin,setIsJoin]=useState(false);
    const [isCreate,setIsCreate]=useState(false);
    const [toggle,setToggle]=useState(false);
    const handleJoin =()=>{
        setIsJoin(true);
        setToggle(true);
    }
    const handleCreate=()=>{
        setIsCreate(true);
        setToggle(true);
    }

    
    return (
        <>
        {(!toggle)?
        <div className="home">
            <div className="home__sec1">
                <h1>Create your Room / Join the Room</h1>
                <div className="home__sec1__links">
                    <a className="home__create" onClick={handleCreate}>Create Room</a>
                    <a className="home__join"  onClick={handleJoin}>Join Room</a>
                </div>
            </div>
            <div className="home__sec2">

            </div>
            <div className="home__sec3">

            </div>
            
        </div>
        :
        isJoin?
        <Join setToggle={setToggle} setIsJoin={setIsJoin}/>
        :
        <Create setToggle={setToggle} setIsCreate={setIsCreate} />
        }
        
        </>
    )
}

export default Home
