import { useState, useEffect } from "react";
import SingleVisitedComponent from "./singleVisitedComponent/singleVisitedComponent";
import ('./visited.css')


const VisitedComponent = (props) =>{

    return(
        <div id="visited-list">
            <h3 id="v-title">Tried & True:</h3>
            { props.visited.map((vPlace)=>{
               return(
                   <SingleVisitedComponent 
                        key={vPlace._id} 
                        vPlace={vPlace}
                        deletePlace={props.deletePlace}
                        showing={props.showing}
                        setShowing={props.setShowing}
                        toggleShow={props.toggleShow}
                        editOnePlace={props.editOnePlace}
                    ></SingleVisitedComponent>
               ) 
                
            })}
            
        </div>
    )
}

export default VisitedComponent