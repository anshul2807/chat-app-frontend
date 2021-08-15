import React,{useState} from 'react'
import './Navbar.css'
function Navbar() {
    const [isLogin,setisLogin]=useState(false);
    return (
        <div className="navbar">
            <nav className="navbar__nav">
                <h1 className="nav__title">CHAT</h1>
                <ul className="nav__unlist">
                    <li className="nav__unlist__home">Home</li>
                    {!isLogin?
                    <>
                    <li className="nav__unlist__login">Login</li>
                    <li className="nav__unlist__signup">SingUp</li>
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
