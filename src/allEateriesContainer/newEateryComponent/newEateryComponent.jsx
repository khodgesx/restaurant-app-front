import { useState } from "react"

const NewEateryComponent = (props) =>{
    //state of new item before user inputs changes
    const [newPlace, setNewplace] = useState({
        name:'',
        visited: false,
        cuisine: '',
        img: 'https://i.imgur.com/IsRaUa5.png',
        faveDish:'',
        notes:'',
        priceLevel: "$"
    })
    const [showing, setShowing] = useState(false)
    //funciton for toggleShow
    const toggleShow =()=>{
        setShowing(!showing)
    }
    //funciton for onChange
    const inputChange = (e)=>{
        setNewplace({
            ...newPlace,
            //the name assigned in the form will get value for that specific input
            [e.target.name]: e.target.value
        })
    }
    //function for submit onSubmit
    const submitNew = (e)=>{
        props.createNew(newPlace)
        console.log(newPlace)
    }

    return(
        <>
        {
            showing ?
            <div id="new-place-form">
            <form onSubmit={submitNew} encType="multipart/form-data">
                <div className="form-row">
                    <label htmlFor="name">Restaurant Name:</label>
                    <input onChange ={inputChange} type="text" name="name" value={newPlace.name}></input>
                </div>

                <div className="form-row">
                    <label htmlFor="name">Cuisine:</label>
                    <input onChange ={inputChange}type="text" name="cuisine" value={newPlace.cuisine}></input>
                </div>
                
                <div className="form-row">
                    <label htmlFor="name">Photo:</label>
                    <input onChange ={inputChange} type="text" name="img" value={newPlace.img}accept="image/png, image/jpeg"></input>
                </div>
                <div className="form-row">
                    <label htmlFor="name">Favorite Dish:</label>
                    <input onChange ={inputChange}type="text" name="faveDish"></input>
                </div>

                <div className="form-row"> 
                    <label htmlFor="name">Notes:</label>
                    <input onChange ={inputChange} type="text" name="notes"value={newPlace.notes}></input>
                </div>

                <div className="form-row">
                        <label htmlFor="price-level">Price:</label>
                        <div className="radio-row-container">
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="priceLevel" value={newPlace.priceLevel}></input>
                                <label htmlFor="price-level-one">$</label>
                            </div>
                            <div className="radio-option-container">
                                <input type="radio" name="priceLevel" value={newPlace.priceLevel}></input>
                                <label onChange ={inputChange} htmlFor="price-level-two">$$</label>
                            </div>
                            <div className="radio-option-container">
                                <input onChange ={inputChange} type="radio" name="priceLevel" value={newPlace.priceLevel}></input>
                                <label htmlFor="price-level-three">$$$</label>
                            </div>
                        </div>
                </div>

                <div className="form-row">
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

                <button type="submit">Add Restaurant</button>
                <button onClick={toggleShow}>Cancel</button>

            </form>


        </div>

        :

        <button onClick ={toggleShow}>Add Restaurant</button>
            
        }
        </>
        
    )
}

export default NewEateryComponent