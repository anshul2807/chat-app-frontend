import React ,{ createContext, useState} from 'react'

export const LoginContext = createContext();

export const LoginProvider = (props)=> {
    const [islogin,setIsLogin] = useState(true);
    return (
        <LoginContext.Provider value={[islogin,setIsLogin]}>
            {props.children}
        </LoginContext.Provider>
    );
}