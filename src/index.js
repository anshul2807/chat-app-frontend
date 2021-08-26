import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ChatProvider} from './ContextAPI/Chat';
import {ConnectProvider} from "./ContextAPI/Connect";
ReactDOM.render(
  <ConnectProvider>
   <ChatProvider>
    <Router>
     <App />
    </Router>
    
    </ChatProvider>
    </ConnectProvider>
  ,
  document.getElementById('root')
);
