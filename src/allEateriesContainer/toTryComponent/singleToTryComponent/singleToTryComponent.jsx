import EditEateryComponent from "../../editEateryComponent/editEateryComponent"
const SingleToTryComponent = (props) =>{

    return(
        <div id="single-to-try">
            <h4>{props.tPlace.name}</h4>
            <img src={props.tPlace.img}></img>
            <EditEateryComponent  
                    showing={props.showing}
                    setShowing={props.setShowing}
                    toggleShow={props.toggleShow}
                    place={props.tPlace}
            ></EditEateryComponent>
            <button onClick={()=>{props.deletePlace(props.tPlace._id)}}>Delete</button>
           
        </div>
    )
}

export default SingleToTryComponent