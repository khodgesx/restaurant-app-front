import apiUrl from "../apiConfig"
import { useState } from "react"

const LoginComponent = (props)=>{

    const inputChange = (e)=>{
        props.setCurrentUser({
            ...props.currentUser,
            [e.target.name]: e.target.value
        })
    }
    const submitLogin = async (e)=>{
        e.preventDefault()
        props.loginUser(props.currentUser)
        console.log('on submit login:', props.currentUser)
        
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