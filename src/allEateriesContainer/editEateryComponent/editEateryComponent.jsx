import { useState } from "react"
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/////THIS DOES NOT WORK YET
const EditEateryComponent = (props)=>{
 
    //set state of place to prior values, unless changed
    const [ editPlace, setEditPlace ] = useState({
        name: props.place.name,
        cuisine: props.place.cuisine,
        img: props.place.img,
        faveDish: props.place.faveDish,
        notes: props.place.notes,
        priceLevel: props.place.priceLevel
    })
    //keep state of place before edits, change specifc fields based on field name by the value entered 
    const inputChange=(e)=>{
        setEditPlace({
            ...editPlace,
            [e.target.name]: e.target.value
        })
    }
    const submitEdit =(e)=>{
        e.preventDefault();
        props.editOnePlace(props.place._id, editPlace)
        props.setShowing(false)
        
    }

    // const priceCheck = () => {
    //     if (props.place.priceLevel === "$") {
    //         return(
    //             <div className="radio-option-container">
    //                             <input onChange ={inputChange} type="radio" name="priceLevel" checked value='$'></input>
    //                             <label htmlFor="price-level-one">$</label>
    //                         </div>
    //         )
    //     }else if(props.place.priceLevel === "$$"){
    //         return(
    //             <div className="radio-option-container">
    //                             <input type="radio" name="priceLevel" checked value='$$'></input>
    //                             <label onChange ={inputChange} htmlFor="price-level-two">$$</label>
    //                         </div>
    //         )
    //     }else{
    //         return(
    //             <div className="radio-option-container">
    //                             <input onChange ={inputChange} type="radio" name="priceLevel" checked value='$$$'></input>
    //                             <label htmlFor="price-level-three">$$$</label>
    //                         </div>
    //         )
    //     }
    // }
   
    
    return(
        <>
     
            <div id="edit-place-form">
            <form onSubmit={submitEdit} encType="multipart/form-data">
                <div id="form-row">
                    <label htmlFor="name">Restaurant Name: </label>
                    <input onChange ={inputChange} type="text" name="name" value={editPlace.name}></input>
                </div>

                <div id="form-row">
                    <label htmlFor="name">Cuisine:</label>
                    <input onChange ={inputChange}type="text" name="cuisine" value={editPlace.cuisine}></input>
                </div>
                
               
                <div id="form-row">
                    <input type="hidden" name="img" id="rest-pic"accept="image/png, image/jpeg" value={editPlace.img}placeholder='upload image'></input>
                </div>
                
                <div id="form-row">
                    <label htmlFor="name">Favorite Dish:</label>
                    <input onChange ={inputChange}type="text" name="faveDish" value={editPlace.faveDish}></input>
                </div>

                <div id="form-row"> 
                    <label htmlFor="name">Notes:</label>
                    <input onChange ={inputChange} type="text" name="notes"value={editPlace.notes}></input>
                </div>

                <div id="form-row">
                        <label htmlFor="price-level">Price:</label>
                        <div className="radio-row-container">
                            {/* {priceCheck} */}
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="priceLevel" value='$'></input>
                                <label htmlFor="price-level-one">$</label>
                            </div> 
                             <div className="radio-option-container">
                                <input type="radio" name="priceLevel" value='$$'></input>
                                <label onChange ={inputChange} htmlFor="price-level-two">$$</label>
                            </div> 
                             <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="priceLevel" value='$$$'></input>
                                <label htmlFor="price-level-three">$$$</label>
                            </div>

                        </div>
                </div>

                <div id="form-row">
                        <label htmlFor="visited">Visited:</label>
                        <div className="radio-row-container">
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="visited" value={!editPlace.visited}></input>
                                <label htmlFor="visited-yes">Yes</label>
                            </div>
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="visited" value={editPlace.visited}></input>
                                <label htmlFor="visited-no">No</label>
                            </div>
                        </div>
                </div>

                <Button id="save"type="submit">Save Changes</Button>
                

            </form>


        </div>
    
        </>
    )
}

export default EditEateryComponent