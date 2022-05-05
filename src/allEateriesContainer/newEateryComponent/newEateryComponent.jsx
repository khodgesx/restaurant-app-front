import { useState } from "react"
import {Button} from 'react-bootstrap'
const NewEateryComponent = (props) =>{
 
    //state of new item before user inputs changes
    const [newPlace, setNewplace] = useState({
        name:'',
        visited: false,
        cuisine: '',
        img: '',
        faveDish:'',
        notes:'',
        priceLevel:'$$',
        user:''
    })
  
    //funciton for onChange
    const inputChange = (e)=>{
        setNewplace({
            ...newPlace,
            [e.target.name]: e.target.value
        })
    }
    //function for submit onSubmit
    const submitNew = async (e)=>{
        e.preventDefault()
        props.createNew(newPlace) 
    }

    return(
        <>
        
            <div id="new-place-form">
            <form onSubmit={submitNew} encType="multipart/form">
                <div id="form-row">
                    <label htmlFor="name"> Restaurant Name:</label>
                    <input onChange ={inputChange} type="text" name="name" value={newPlace.name}></input>
                </div>

                <div id="form-row">
                    <label htmlFor="name">Cuisine:</label>
                    <input onChange ={inputChange}type="text" name="cuisine" value={newPlace.cuisine}></input>
                </div>
                
                 <div id="form-row">
                    <label htmlFor="name">Photo:</label>
                    <input onChange ={(e)=>props.setImage(e.target.files[0])} type="file" name="img" id="rest-pic"accept="image/png, image/jpeg" placeholder='upload image'></input>
 
                </div>   
                <div id="form-row">
                    <label htmlFor="name">Favorite Dish:</label>
                    <input onChange ={inputChange}type="text" name="faveDish"></input>
                </div>

                <div id="form-row"> 
                    <label htmlFor="name">Notes:</label>
                    <input onChange ={inputChange} type="text" name="notes"value={newPlace.notes}></input>
                </div>

                <div id="form-row">
                        <label htmlFor="price-level">Price:</label>
                        <div className="radio-row-container">
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="priceLevel" value='$'></input>
                                <label htmlFor="priceLevel">$</label>
                            </div>
                            <div className="radio-option-container">
                                <input onChange ={inputChange}type="radio" name="priceLevel" value='$$'></input>
                                <label htmlFor="priceLevel">$$</label>
                            </div>
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="priceLevel" value='$$$'></input>
                                <label htmlFor="priceLevel">$$$</label>
                            </div>
                        </div>
                </div>

                <div id="form-row">
                        <label htmlFor="visited">Visited:</label>
                        <div className="radio-row-container">
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="visited" value={!newPlace.visited}></input>
                                <label htmlFor="visited-yes">Yes</label>
                            </div>
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="visited" value={newPlace.visited}></input>
                                <label htmlFor="visited-no">No</label>
                            </div>
                        </div>
                </div>

                <Button id="add"onClick ={props.toggleShow}type="submit">Add Restaurant</Button>
             

            </form>


        </div>

       
        </>
        
    )
}

export default NewEateryComponent