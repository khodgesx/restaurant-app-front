import apiUrl from "../apiConfig"
import { useState } from "react"

const LoginComponent = (props)=>{
    // const [userSession, setUserSession] = useState([])
    const [currentUser, setCurrentUser] = useState({
        username: '',
        password: ''
    })

//check user to login
    const loginUser = async (possibleUser) =>{
        console.log('login function')
  
        try {
            const loginResponse = await fetch (`${apiUrl}/users/login`,{
                method: "POST",
                body: JSON.stringify(possibleUser),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await loginResponse.json()
            console.log('resp from backend', parsedResponse)
            if(parsedResponse.success){
                setCurrentUser(possibleUser)
                console.log('success!', parsedResponse.data)
    
            }else{
                console.log('no success?', parsedResponse.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const inputChange = (e)=>{
        setCurrentUser({
            ...currentUser,
            [e.target.name]: e.target.value
        })
    }
    const submitLogin = async (e)=>{
        e.preventDefault()
        loginUser(currentUser)
        console.log('on submit login:', currentUser)
        
    }



    return(
        <div id="login-form">
            <h1 className="page-title">Login</h1>
            <section className="form-container">
                <form onSubmit={submitLogin} className="login-form-container">
                    
                    <div className="form-row-container">
                        <label htmlFor="username">Username:</label>
                        <input onChange={inputChange} type="text" name="username" required/>
                    </div>

                    <div class="form-row-container">
                        <label htmlFor="password">Password:</label>
                        <input onChange={inputChange} type="password" name="password" required/>
                    </div>

                    <input onClick={props.toggleLog}className="button-treat-main form-button" type="submit" value="Login"/>

                </form>
            </section>
        </div>
    )
}

export default LoginComponent