import { useState } from 'react'
import SingleToTryComponent from './singleToTryComponent/singleToTryComponent'
import ('./toTry.css')



const ToTryComponent = (props) =>{
    
    return(
        <div id="to-try">
            <h3>Looking for something new!</h3>
            { props.toTry.map((tPlace)=>{
                return(
                   <SingleToTryComponent 
                        key={tPlace._id} 
                        tPlace={tPlace} 
                        deletePlace={props.deletePlace}
                    ></SingleToTryComponent>
                    
                )
            })}
        </div>
    )
}

export default ToTryComponent
