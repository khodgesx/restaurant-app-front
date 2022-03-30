import { useState } from "react"
import './edit.css'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const EditPhotoComponent = (props)=>{
 
    //set state of place to prior values, unless changed
    const [ editPhoto, setEditPhoto ] = useState({
        img: props.place.img
    })
    //keep state of photo before edits
    const inputChange=(e)=>{
        setEditPhoto({
            ...editPhoto,
            [e.target.name]: e.target.value
        })
    }
    //submit edit invokes editPhoto Function - takes two parameters
    //takes id and editPhoto state
    const submitEditPhoto =(e)=>{
        e.preventDefault();
        //change the function here:
        props.editPhotoF(props.place._id, editPhoto)
        props.setShowing(false)
        
    }
    
    return(
        <>
     
            <div id="edit-place-form" encType="multipart/form">
                <form onSubmit={submitEditPhoto}>
                
                    <label htmlFor="name">Photo:</label>
                    <input onChange ={(e)=>props.setImage(e.target.files[0])} type="file" name="img" accept="image/png, image/jpeg"></input>
                

                <Button type="submit">Save Changes</Button>
                

            </form>


        </div>
    
        </>
    )
}

export default EditPhotoComponent