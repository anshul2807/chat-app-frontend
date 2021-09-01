import { useContext } from 'react';
import './App.css';
import Navbar from './components/header/Navbar'
import Body from './components/body/Body'
import Feedback from './components/feedback/Feedback'
import Chat from './components/chat/Chat'
import Signup from './components/Log_in-Sign_up/Signup'
import Login from './components/Log_in-Sign_up/Login'
import Error from './components/404/Error'
import Home from './components/body/Home'
import {
  Switch,
  Route
} from "react-router-dom";
import {LoginContext} from './ContextAPI/Login'

function App() {
  const [islogin,setIsLogin] = useContext(LoginContext);
  return (
      <>
       <Navbar />
      <Switch>
        <Route exact path="/">
          {!islogin?
         <Body />
         :
         <Home />
         }
        </Route>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Error />
        </Route>
      </Switch>
      </>
      
      
    
  );
}

export default App;
