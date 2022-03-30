import { useState } from 'react'
import SingleToTryComponent from './singleToTryComponent/singleToTryComponent'
import ('./toTry.css')



const ToTryComponent = (props) =>{
    
    return(
        <div id="to-try">
            <h3 id="t-title">Something New:</h3>
            { props.toTry.map((tPlace)=>{
                return(
                   <SingleToTryComponent 
                        key={tPlace._id} 
                        tPlace={tPlace} 
                        deletePlace={props.deletePlace}
                        showing={props.showing}
                        setShowing={props.setShowing}
                        toggleShow={props.toggleShow}
                        editOnePlace={props.editOnePlace}
                        editPhotoF={props.editPhotoF}
                        image={props.image} setImage={props.setImage} url={props.url} setUrl={props.setUrl}
                    ></SingleToTryComponent>
                    
                )
            })}
        </div>
    )
}

export default ToTryComponent
