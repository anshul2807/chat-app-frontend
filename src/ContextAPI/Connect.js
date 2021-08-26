import React ,{ createContext, useState} from 'react'

export const ConnectContext = createContext();

export const ConnectProvider = (props)=> {
    const [connect,setConnect] = useState(true);
    return (
        <ConnectContext.Provider value={[connect,setConnect]}>
            {props.children}
        </ConnectContext.Provider>
    );
}