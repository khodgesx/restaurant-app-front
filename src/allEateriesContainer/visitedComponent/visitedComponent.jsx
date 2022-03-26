import { useState, useEffect } from "react";
import SingleVisitedComponent from "./singleVisitedComponent/singleVisitedComponent";
import ('./visited.css')


const VisitedComponent = (props) =>{
    //this component was given the array of visisted place via props

    const showVisited =()=>{
        const visitedArray = props.visited
        const visitedOne = props.visited[0]
        const name = props.visistedName
        // console.log("props.visited", visitedArray)
        // console.log("props.visited[0]", visitedOne)
    }
    useEffect(showVisited, [])
    return(
        <div id="visited-list">
            <h3>Tried & True!</h3>
            { props.visited.map((vPlace)=>{
                <SingleVisitedComponent key={vPlace._id} vPlace={vPlace}></SingleVisitedComponent>
            })}
            
        </div>
    )
}

export default VisitedComponent