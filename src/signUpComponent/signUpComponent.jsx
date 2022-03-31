import { useState, useEffect } from "react";
import apiUrl from "../apiConfig";


const SignUpComponent = (props) =>{
    
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({
        displayName:'',
        username: '',
        password: '',
        img: ''
    })

const [image, setImage] = useState('')
//state of the image url from cloudinary
const [url, setUrl] = useState('')

//create user:
    const createUser = async (newUser) =>{
  
    
        try {
            const data = new FormData()
            console.log("image prop", image)
            data.append('file', image)
            data.append('upload_preset', 'restaurants')
    
            const imageUpload = await fetch('https://api.cloudinary.com/v1_1/dmc4kghoi/image/upload', {
                method: "POST",
                body: data
            })
    
            const parsedImg = await imageUpload.json()
            newUser.img = await parsedImg.url
    
            await console.log("new user\n", newUser)
            // newPlace.img = await url
            const createResponse = await fetch (`${apiUrl}/users`,{
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await createResponse.json()
            console.log('resp from backend', parsedResponse)
            if(parsedResponse.success){
                setUsers([parsedResponse.data, ...users])
                console.log('success?', parsedResponse.data)
    
            }else{
                console.log('no success?', parsedResponse.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const inputChange = (e)=>{
        setNewUser({
            ...newUser,
            //the name assigned in the form will get value for that specific input
            [e.target.name]: e.target.value
        })
    }
    const submitNew = async (e)=>{
        e.preventDefault()
        createUser(newUser)
        console.log('on submit create:', newUser)
        
    }


    return(
        <div id="new-user-form"> 
            <h1 className="page-title">Sign Up</h1>

            <section className="form-container">
                <form onSubmit ={submitNew} className="new-user-form-container" encType="multipart/form-data">

                    <div className="form-row-container">
                        <label htmlFor="displayName">Display Name:</label>
                        <input onChange ={inputChange}type="text" name="displayName" />
                    </div>

                    <div className="form-row-container">
                        <label htmlFor="username">Username:</label>
                        <input onChange ={inputChange} type="text" name="username" />
                    </div>

                    <div className="form-row-container">
                        <label htmlFor="password">Password:</label>
                        <input onChange ={inputChange} type="password" name="password" />
                    </div>

                    <div className="form-row-container">
                        <label htmlFor="img">Profile Photo:</label>
                        <input onChange ={(e)=>setImage(e.target.files[0])} type="file" name="img" id="rest-pic"accept="image/png, image/jpeg" placeholder='upload image'></input>
                    </div>

                    <input onClick={props.toggleReg} className="button-treat-main form-button" type="submit" value="Register"/>

                </form>
            </section>
       

        </div>
    )
}

export default SignUpComponent