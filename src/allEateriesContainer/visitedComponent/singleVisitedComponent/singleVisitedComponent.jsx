import EditEateryComponent from '../../editEateryComponent/editEateryComponent'
import './singleVisited.css'

const SingleVisitedComponent = (props)=>{

    return(
        <div id="single-visited">
            <h4>{props.vPlace.name}</h4>
            <img src={props.vPlace.img}></img>
            
            <EditEateryComponent  showing={props.showing}
                        setShowing={props.setShowing}
                        toggleShow={props.toggleShow}
                        place={props.vPlace}
                        editOnePlace={props.editOnePlace}
            ></EditEateryComponent>

            <button onClick={()=>{props.deletePlace(props.vPlace._id)}}>Delete</button>
            
        </div>
    )
}

export default SingleVisitedComponent