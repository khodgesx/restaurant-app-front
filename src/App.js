import { useState } from 'react';
import './App.css';
import AllEateriesContainer from './allEateriesContainer/allEateriesContainer';
import { Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpComponent from './signUpComponent/signUpComponent';
import LoginComponent from './loginComponent/loginComponent';




function App() {
  const [regShow, setRegShow] = useState(false)
    const toggleReg =()=>setRegShow(!regShow) 
    const [logShow, setLogShow] = useState(false)
    const toggleLog =()=>setLogShow(!logShow) 
 

  return (
    <div className="App">
 

      <div id='nav-flex'>
      <div id="welcome">
      <h1 id="title">Yummy Decisions</h1>
      </div>

      <div id="buttons">
        <nav id="not-logged-in-nav">
          <button id="sign-up" onClick={setRegShow}>Sign Up</button>
          <Modal show={regShow} onHide={toggleReg}>
            <SignUpComponent toggleReg={toggleReg}></SignUpComponent>
            <button onClick={toggleReg}>Close</button>
          </Modal>

          <button id="login" onClick={setLogShow}>Login</button>
          <Modal show={logShow} onHide={toggleLog}>
            <LoginComponent></LoginComponent>
            <button onClick={toggleLog}>Close</button>
          </Modal>
        </nav>
      </div>
      </div>
      

      

      
      
      {/* <h3>(if user is logged in):Welcome -displayName-</h3> */}

      <AllEateriesContainer></AllEateriesContainer>
    </div>
  );
}

export default App;
