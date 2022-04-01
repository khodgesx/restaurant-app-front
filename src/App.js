import { useState } from 'react';
import './App.css';
import AllEateriesContainer from './allEateriesContainer/allEateriesContainer';
import { Button, Modal, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpComponent from './signUpComponent/signUpComponent';
import LoginComponent from './loginComponent/loginComponent';
import apiUrl from './apiConfig';


const App =()=> {

  const [regShow, setRegShow] = useState(false)
    const toggleReg =()=>setRegShow(!regShow) 
    const [logShow, setLogShow] = useState(false)
    const toggleLog =()=>setLogShow(!logShow) 

     const [currentUser, setCurrentUser] = useState({
        displayName:'',
        username: '',
        password: ''
      })
      const [userId, setUserId] = useState('')

    //check user to login
    const loginUser = async (possibleUser) =>{

      try {
          const loginResponse = await fetch (`${apiUrl}/users/login`,{
              method: "POST",
              body: JSON.stringify(possibleUser),
              headers: {
                  "Content-Type": "application/json"
              }
          })
          const parsedResponse = await loginResponse.json()
      
          if(parsedResponse.success){
              localStorage.setItem('currentUser', JSON.stringify(parsedResponse.data))
          }else{
              console.log('no success?', parsedResponse.data)
          }
      } catch (err) {
          console.log(err)
      }
  }
  const remove = ()=>{
    localStorage.removeItem('currentUser')
    console.log('logged out:', localStorage.getItem('currentUser'))
  }
  // const displayName = JSON.parse(localStorage.getItem('currentUser')).displayName
  
  //if not logged in show not logged in nav & about/instructions
  //if logged in show logout button, & eateries container
 

const user = JSON.parse(localStorage.getItem('currentUser'))
if(user !== null){
  return(
    <div className="App">
 
        <div id='nav-flex'>
            <div id="welcome">
            <h1 id="title">Yummy Decisions</h1>
            </div>
            <div id='user-message'>
            <h3>welcome {user.displayName}!</h3> 
            <button id="logout"onClick={remove}>Logout</button>
            </div>
            
            
        </div>

     

        <AllEateriesContainer
            toggleLog={toggleLog}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            userId={userId}
          ></AllEateriesContainer>

      </div>
  )
}else{
   return (
    <div className="App-no-login">
 

      <div id='nav-no-login'>
        <div id="welcome">
        <h1 id="title">Yummy Decisions</h1>
        </div>
        <div id="no-log-buttons">
        <nav id="not-logged-in-nav">

        
          <button id="sign-up" onClick={setRegShow}>Sign Up</button>
          <Modal show={regShow} onHide={toggleReg}>
            <SignUpComponent toggleReg={toggleReg}></SignUpComponent>
            <button onClick={toggleReg}>Close</button>
          </Modal>

          <button id="login" onClick={setLogShow}>Login</button>
          <Modal show={logShow} onHide={toggleLog}>
            <LoginComponent 
              toggleLog={toggleLog}
              loginUser={loginUser}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            ></LoginComponent>
            <button onClick={toggleLog}>Close</button>
          </Modal>
          
        
        </nav>
      </div>
      </div>

      <div id='no-log-info'>
                <div id='top'>
                <p id="welcome-tag">Keep track of the places you love to eat and those you're dying to try...
                </p>
                </div>
                <div id='midtop'>
                    <p>
                        Sign Up & Sign In to get access to your own personal Restaurant Organizer.
                        Your restaurants will be sorted by places you've been to or not. 
                        This way, when you come back you can pick from your <em>tried and true</em> or 
                        from your <em>something new</em> lists.
                    </p>
                </div>
                <div id="bot-top">
                    <img src='https://i.imgur.com/juBSKCa.jpg'></img>
                </div>
        </div>
      
 
    {/* <footer><h4>Enjoy!</h4></footer> */}

      </div>
  );
}
}


export default App;
