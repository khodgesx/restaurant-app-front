import { useState } from 'react'
import ('./toTry.css')


const ToTryComponent = (props) =>{

    const [toTry, setToTry] = useState([{'name':'Heritage', 'visited':false, 'cuisine':'american', 'img':'https://i.imgur.com/TTMkE71.jpg', 'faveDish':'', 'notes':'tasting-menu', 'priceRange':2, 'user':'1'}, {'name':'Heritage', 'visited':false, 'cuisine':'american', 'img':'https://i.imgur.com/TTMkE71.jpg', 'faveDish':'', 'notes':'tasting-menu', 'priceRange':2, 'user':'1'}])
    
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