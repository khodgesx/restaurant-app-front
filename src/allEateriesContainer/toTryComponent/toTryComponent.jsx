import { useState } from 'react'
import ('./toTry.css')


const ToTryComponent = (props) =>{

    const [toTry, setToTry] = useState([])
    
    return(
        <div id="to-try">
            <h3>Looking for something new!</h3>
            { toTry.map((place)=>{
                return(
                    <>
                    <h2 key="name">{place.name}</h2>
                    </>
                    
                )
            })}
        </div>
    )
}

export default ToTryComponent