import { useState } from "react";
import VisitedListComponent from "./visitedListComponent/visitedListComponent";
import ('./visited.css')


const VisitedComponent = (props) =>{
    const [triedPlaces, setTriedPlaces] = useState([])
    const getTried =()=>{
        for(let i=0; i<props.eateries.length; i++){
            const triedPlaces = [];
            if(props.eateries[i].visited === true){
                triedPlaces.push(props.eateries[i])
            }
        }
        setTriedPlaces(triedPlaces)
    }
    return(
        <div id="visited-list-array">
            <h3>Tried & True!</h3>
            <VisitedListComponent getTried={getTried} triedPlaces={triedPlaces}></VisitedListComponent>
        </div>
    )
}

export default VisitedComponent