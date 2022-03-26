import { useState } from "react"

const VisitedListComponent =(props)=>{
    const [showing, setShowing] = useState(false)
    
    return(
        <div id="visited-list">
            <button>Show Visited Restaurants</button>
            {props.triedPlaces.map((place)=>{
                <h2>{place.name}</h2>
            })}
        </div>
    )
}

export default VisitedListComponent