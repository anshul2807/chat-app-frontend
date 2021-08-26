import React,{useState} from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";
function Navbar() {
    const [isLogin,setisLogin]=useState(false);
    return (
        <div className="navbar">
            <nav className="navbar__nav">
                <h1 className="nav__title">CHAT</h1>
                <ul className="nav__unlist">
                    <Link to="/"><li className="nav__unlist__home">Home</li></Link>
                    <Link to="/feedback"><li className="nav__unlist__feedback">FeedBack</li></Link>
                    {!isLogin?
                    <>
                    <Link to="/login"><li className="nav__unlist__login">Login</li></Link>
                    <Link to="/signup"><li className="nav__unlist__signup">SignUp</li></Link>
                    </>
                    :       
                    <li className="nav__unlist__logout">Logout</li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
