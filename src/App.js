import { useState } from 'react';
import './App.css';
import AllEateriesContainer from './allEateriesContainer/allEateriesContainer';
import { Button, Modal} from 'react-bootstrap'
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
              setCurrentUser({
                // ...currentUser,
                displayName: parsedResponse.data.displayName,
                username: parsedResponse.data.username,
                password: parsedResponse.data.password
              })
              localStorage.setItem('currentUser', JSON.stringify(parsedResponse.data))
              // console.log('parsed response display name:', parsedResponse.data.password)
              // console.log('current user', currentUser)
              // console.log('local user', localStorage.getItem('currentUser'))
              // // console.log(localStorage.user.id)
              // const loginId = JSON.parse(localStorage.getItem('currentUser'))._id
              //if using ._id then make login =json.parse, then new variable =login._id
              // setUserId(loginId)

          }else{
              console.log('no success?', parsedResponse.data)
          }
      } catch (err) {
          console.log(err)
      }
  }
  const remove = ()=>{
    localStorage.removeItem('currentUser')
    console.log('logged out?', localStorage.getItem('currentUser'))
  }
  // const displayName = JSON.parse(localStorage.getItem('currentUser')).displayName
  

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
            <LoginComponent 
              toggleLog={toggleLog}
              loginUser={loginUser}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            ></LoginComponent>
            <button onClick={toggleLog}>Close</button>
          </Modal>
          <button id="logout"onClick={remove}>Logout</button>
        </nav>
      </div>
      
    

      </div>

    


    
      
      {/* <h3>(if user is logged in):Welcome -displayName-</h3> */}

      <AllEateriesContainer
        toggleLog={toggleLog}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        userId={userId}
      ></AllEateriesContainer>
    </div>
  );
}

export default App;
