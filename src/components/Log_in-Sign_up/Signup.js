import React,{useState,useEffect} from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
function Signup() {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');



    const handleSubmit =e=>{
        e.preventDefault();
        setEmail('');
        setName('');
        setPassword('');
    }
    useEffect(() => {
        document.title = "Signup"
      }, [])
    
    return (
        <div className="signup">
            <h1>Register your-self</h1>
            <form type="submit" className="signup__body">
                <div className="signup__email">
                    <label>Email :</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text" />
                </div>
                <div className="signup__name">
                    <label>Name :</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" />
                </div>
                <div className="signup__password">
                    <label>Password :</label>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                </div>
                <div className="signup__submit">
                    <Link to="/login">Already Register?</Link>
                    <button disabled={!password || !email || !name} onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
