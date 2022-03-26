import { useState } from "react";
import SingleVisitedComponent from "./singleVisitedComponent/singleVisitedComponent";
import ('./visited.css')


const VisitedComponent = (props) =>{
    // //get all eateries from parent allEateriesComponent
    // //then pass that property into a for loop to make a new array of triedPlaces
    // //pass triedPlaces to list to .map those tried?
    // const [triedPlaces, setTriedPlaces] = useState([])
    // const getTried =()=>{
    //     for(let i=0; i<props.eateries.length; i++){
    //         const triedPlaces = [];
    //         if(props.eateries[i].visited === true){
    //             triedPlaces.push(props.eateries[i])
    //         }
    //     }
    //     setTriedPlaces(triedPlaces)
    // }
    return(
        <div id="visited-list">
            <h3>Tried & True!</h3>
            { props.visited.map((v)=>{
                <SingleVisitedComponent key={v._id} vPlace={v}></SingleVisitedComponent>
            })}
            
        </div>
    )
}

export default VisitedComponent