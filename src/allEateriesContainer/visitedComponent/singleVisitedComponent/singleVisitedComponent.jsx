import './singleVisited.css'

const SingleVisitedComponent = (props)=>{

    return(
        <div id="single-visited">
            <h4>{props.vPlace.name}</h4>
            <img src={props.vPlace.img}></img>
            <button>Edit</button>
            <button onClick={()=>{props.deletePlace(props.vPlace._id)}}>Delete</button>
        </div>
    )
}

export default SingleVisitedComponent