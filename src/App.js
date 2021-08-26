import './App.css';
import Navbar from './components/header/Navbar'
import Body from './components/body/Body'
import Feedback from './components/feedback/Feedback'
import Chat from './components/chat/Chat'
import {
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
      <>
       <Navbar />
      <Switch>
        <Route exact path="/">
         <Body />
        </Route>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
      </>
      
      
    
  );
}

export default App;
