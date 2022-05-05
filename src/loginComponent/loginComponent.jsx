import { useState } from "react"

const LoginComponent = (props)=>{
const [userLogin, setUserLogin] = useState({
    username:'',
    password:''
})
    const inputChange = (e)=>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    const submitLogin = async (e)=>{
        e.preventDefault()
        props.loginUser(userLogin)
        // console.log('on submit login:', userLogin.username)
    }
   



    return(
        <div id="login-form">
            <section className="form-container">
                <form onSubmit={submitLogin} className="login-form-container">
                    
                    <div id="form-row-container">
                        <label htmlFor="username">Username:</label>
                        <input onChange={inputChange} type="text" name="username" value={userLogin.username}required/>
                    </div>

                    <div id="form-row-container">
                        <label htmlFor="password">Password:</label>
                        <input onChange={inputChange} type="password" name="password" value={userLogin.password}required/>
                    </div>
                    <div id="form-row-container">
                        <input onClick={props.toggleLog}id="login-button" type="submit" value="Login"/>
                    </div>
                </form>
            </section>
            
        </div>
    )
}

export default LoginComponent