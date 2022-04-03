import { useState } from "react"
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const EditPhotoComponent = (props)=>{
 
    const [ editPhoto, setEditPhoto ] = useState({
        img: props.place.img
    })

    const [ editPlace, setEditPlace ] = useState({
        name: props.place.name,
        cuisine: props.place.cuisine,
        img: props.place.img,
        faveDish: props.place.faveDish,
        notes: props.place.notes,
        priceLevel: props.place.priceLevel
    })
 
    const inputChange=(e)=>{
        setEditPhoto({
            ...editPhoto,
            [e.target.name]: e.target.value
        })
    }
    const submitEditPhoto = (e)=>{
        e.preventDefault();
       props.editPhotoF(props.place._id, editPhoto)
        props.setShowing(false)
        
    }
    
    return(
        <>
     
            <div id="edit-place-form" encType="multipart/form">
                <form onSubmit={submitEditPhoto}>
                
                    <label htmlFor="name">Photo:</label>
                    <input onChange ={(e)=>props.setImage(e.target.files[0])} type="file" name="img" accept="image/png, image/jpeg"></input>

                <Button id="save"onClick={props.close}type="submit">Save Changes</Button>
                

            </form>


        </div>
    
        </>
    )
}

export default EditPhotoComponent