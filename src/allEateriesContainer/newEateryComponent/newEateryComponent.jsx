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
        priceRange: 1,
        user:1
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
    }

    return(
        <>
        {
            showing ?
            <div id="new-place-form">
            <form onSubmit={submitNew} encType="multipart/form-data">
                <div className="form-row">
                    <label htmlFor="name">Restaurant Name:</label>
                    <input type="text" name="name" required></input>
                </div>

                <div className="form-row">
                    <label htmlFor="name">Cuisine:</label>
                    <input type="text" name="cuisine"></input>
                </div>
                
                <div className="form-row">
                    <label htmlFor="name">Photo:</label>
                    <input type="file" name="img" accept="image/png, image/jpeg"></input>
                </div>
                <div className="form-row">
                    {/* <label htmlFor="name">Favorite Dish:</label>
                    <input type="text" name="faveDish"></input> */}
                </div>

                <div className="form-row"> 
                    <label htmlFor="name">Notes:</label>
                    <input type="text" name="notes"></input>
                </div>

                <div className="form-row">
                        <label htmlFor="price-level">Price:</label>
                        <div className="radio-row-container">
                            <div className="radio-option-container">
                                <input type="radio" name="priceLevel" value="$"></input>
                                <label htmlFor="price-level-one">$</label>
                            </div>
                            <div className="radio-option-container">
                                <input type="radio" name="priceLevel" value="$$"></input>
                                <label htmlFor="price-level-two">$$</label>
                            </div>
                            <div className="radio-option-container">
                                <input type="radio" name="priceLevel" value="$$$"></input>
                                <label htmlFor="price-level-three">$$$</label>
                            </div>
                        </div>
                </div>

                <div className="form-row">
                        <label for="visited">Visited:</label>
                        <div className="radio-row-container">
                            <div className="radio-option-container">
                                <input type="radio" name="visited" value="true"></input>
                                <label htmlFor="visited-yes">Yes</label>
                            </div>
                            <div className="radio-option-container">
                                <input type="radio" name="visited" value="false"></input>
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