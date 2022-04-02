import { useState } from "react"

const EditUserComponent =(props)=>{
    const [ editName, setEditName ] = useState({
        displayName: props.currentUser.displayName
    })
    const inputChange=(e)=>{
        setEditName({
            // ...editName,
            [e.target.name]: e.target.value
        })
    }
    //submit edit invokes editPlaceFunction - takes two parameters
    //takes id and editPlace state
    const submitEdit =(e)=>{
        e.preventDefault();
        props.editUser(props.user._id, editName)
        props.setEditShow(false)
        
    }
    return(
        <div id="edit-user">
                <form onSubmit={submitEdit}>
                <div id="form-row">
                    <label htmlFor="name">Display Name: </label>
                    <input onChange ={inputChange} type="text" name="name" value={editName.displayName}></input>
                </div>
                

                <button id="save"type="submit">Save Changes</button>
                

            </form>

        </div>
    )
}

export default EditUserComponent