import { useState } from 'react';
import './App.css';
import AllEateriesContainer from './allEateriesContainer/allEateriesContainer';
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpComponent from './signUpComponent/signUpComponent';
import LoginComponent from './loginComponent/loginComponent';
import EditUserComponent from './editUserComponent/editUserComponent';
import apiUrl from './apiConfig';


const App =()=> {

  const [regShow, setRegShow] = useState(false)
    const toggleReg =()=>setRegShow(!regShow) 
    const [logShow, setLogShow] = useState(false)
    const toggleLog =()=>setLogShow(!logShow) 
    const [editShow, setEditShow] = useState(false)
    const toggleEdit =()=>setEditShow(!editShow)

     const [currentUser, setCurrentUser] = useState({
        displayName:''
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
             console.log(localStorage.getItem('currentUser'))
             window.location.reload()
          }else{
              console.log('no success?', parsedResponse.data)
          }
      } catch (err) {
          console.log(err)
      }
  }
  //logout:
  const remove = ()=>{
    localStorage.removeItem('currentUser')
    console.log('logged out:', localStorage.getItem('currentUser'))
    window.location.reload()
  }

  //edit user:
  const editUser = async (idToEdit, userToEdit)=>{
    try{
        const idToEdit = user._id
        const editResponse = await fetch(`${apiUrl}/users/${idToEdit}`, {
            method:"PUT",
            body:JSON.stringify(userToEdit),
            headers:{
                // "Content-Type": "application/json"
                "Accept": "application/json"
            }
        })
        const parsedEdit = await editResponse.json()
        if(parsedEdit.success){
      
            setCurrentUser(parsedEdit)
            console.log(currentUser)
        }

    }catch(err){
        console.log(err)
    }
}

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
            <div>
            {/* <img onClick={setEditShow}id="user-photo" src={user.img}></img> */}
            <img id="user-photo" src={user.img}></img>
            </div>
      
                    <Modal id="edit-user-modal"show={editShow} onHide={toggleEdit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Display Name:</Modal.Title>
                        </Modal.Header>
                        <div id="edit-user-form">
                            <EditUserComponent
                            editUser={editUser}
                            toggleEdit={toggleEdit}
                            setEditShow={setEditShow}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            user={user}
                            ></EditUserComponent>
                        </div>
                    </Modal>
            
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
          <Modal id="reg"show={regShow} onHide={toggleReg}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <SignUpComponent toggleReg={toggleReg}></SignUpComponent>
          
          </Modal>

          <button id="login" onClick={setLogShow}>Login</button>
          <Modal id="login-modal" show={logShow} onHide={toggleLog}>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <LoginComponent 
              toggleLog={toggleLog}
              loginUser={loginUser}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            ></LoginComponent>
           
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
                        Your restaurants will be sorted by places you've been to or places you have yet to try. 
                        <br></br><br></br>You will be able to view and pick from your <em>tried and true</em> or 
                        from your <em>something new</em> lists.
                    </p>
                </div>
                <div id="bot-top">
                    <img src='https://i.imgur.com/juBSKCa.jpg'></img>
                </div>
        </div>
      


      </div>
  );
}
}


export default App;
