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
    const [ editPhoto, setEditPhoto] = useState({
        img: props.currentUser.img
    })
    const editUserPhoto = async (idToEdit, userToEdit)=>{
        try{
            const editResponse = await fetch(`${apiUrl}/users/${idToEdit}`, {
                method:"PUT",
                body:JSON.stringify(userToEdit),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedEdit = await editResponse.json()
            if(parsedEdit.success){
              localStorage.setItem('currentUser', JSON.stringify(parsedEdit.data))
                // setCurrentUser(parsedEdit.data)
            }
    
        }catch(err){
            console.log(err)
        }
    }
    const imageChange=(e)=>{
        setEditPhoto({
            // ...editName,
            [e.target.name]: e.target.files[0]
        })
    }
    const submitEditPhoto =(e)=>{
        e.preventDefault();
        editUserPhoto(props.user._id, e.target.files[0])
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
            {/* <button onClick={toggleEditPhoto} id="save">Update Photo</button> */}

        <Modal show={editPhotoModal} onHide={toggleEditPhoto}>
        <form onSubmit={submitEditPhoto}>
                <div id="form-row">
                    <label htmlFor="image">Change Photo: </label>
                    <input onChange ={imageChange} type="file" name="img" />
                </div>
                

                <button id="save"type="submit">Update Photo</button>
                
                

            </form>
        </Modal>
        </div>
    )
}

export default EditUserComponent