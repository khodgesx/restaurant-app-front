import { useState } from "react"
import { Modal } from 'react-bootstrap'
import apiUrl from "../apiConfig"

const EditUserComponent =(props)=>{
    const [editPhotoModal, setEditPhotoModal] = useState(false)
    const toggleEditPhoto =()=>setEditPhotoModal(!editPhotoModal)

    const [ editName, setEditName ] = useState({
        displayName: props.currentUser.displayName
    })
    const inputChange=(e)=>{
        setEditName({
            // ...editName,
            [e.target.name]: e.target.value
        })
    }
    const submitEdit =(e)=>{
        e.preventDefault();
        console.log(props.user._id, editName.name)
        props.editUser(props.user._id, editName)
        props.setEditShow(false) 
    }

    /////////edit photo/////////
    const [image, setImage] = useState('')
    const [ editPhoto, setEditPhoto] = useState({
        img: props.currentUser.img
    })
    const editUserPhoto = async (idToEdit, userToEdit)=>{
        try{
        if(image){
            const data = new FormData()
            console.log("image prop", image)
            data.append('file', image)
            data.append('upload_preset', 'restaurants')

        const imageUpload = await fetch('https://api.cloudinary.com/v1_1/dmc4kghoi/image/upload', {
            method: "POST",
            body: data
        })

        const parsedImg = await imageUpload.json()
        editPhoto.img = await parsedImg.url
        console.log(editPhoto)
        console.log(editPhoto.img)
        }else{
            editPhoto.img = 'https://i.imgur.com/Ccw5H8d.png'
        }
        
        await console.log("new photo\n", editPhoto)
       
            const editResponse = await fetch(`${apiUrl}/users/update-photo/${idToEdit}`, {
                method:"PUT",
                body:JSON.stringify(userToEdit),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedEdit = await editResponse.json()
            if(parsedEdit.success){
              localStorage.setItem('currentUser', JSON.stringify(parsedEdit.data))
                console.log(localStorage.getItem('currentUser'))
            }
    
        }catch(err){
            console.log(err)
        }
    }

    const submitEditPhoto =(e)=>{
        e.preventDefault();
        editUserPhoto(props.user._id, editPhoto.img)
        console.log('hello?')
        setEditPhotoModal(false) 
    }
    return(
        <div id="edit-user">
                <form onSubmit={submitEdit}>
                <div id="form-row">
                    <label htmlFor="displayName">Display Name: </label>
                    <input onChange ={inputChange} type="text" name="displayName" value={editName.displayName}></input>
                </div>
                

                <button id="save"type="submit">Save Changes</button>
                
                

            </form>
            <button onClick={toggleEditPhoto} id="save">Update Photo</button>

        <Modal show={editPhotoModal} onHide={toggleEditPhoto}>
        <form onSubmit={submitEditPhoto} encType="multipart/form-data">
                <div id="form-row">
                    <label htmlFor="image">Change Photo: </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="img" accept="image/png, image/jpeg" placeholder='upload image'/>
                </div>
                

                <button id="save"type="submit">Update Photo</button>
                
                

            </form>
        </Modal>
        </div>
    )
}

export default EditUserComponent