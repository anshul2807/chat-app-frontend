import React,{useState,useEffect} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');



    const handleSubmit =e=>{
        e.preventDefault();
        setEmail('');
        setPassword('');
    }
    useEffect(() => {
        document.title = "Login"
      }, [])
    return (
        <div className="login">
            <h1>Login your-self</h1>
            <form type="submit" className="login__body">
                <div className="login__email">
                    <label>Email :</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text" />
                </div>
                <div className="login__password">
                    <label>Password :</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password" />
                </div>
                <div className="login__submit">
                    <Link to="/signup">Not Register?</Link>
                    <button disabled={!password || !email} onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
