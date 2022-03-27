
const SingleToTryComponent = (props) =>{

    return(
        <div id="single-to-try">
            <h4>{props.tPlace.name}</h4>
            <img src={props.tPlace.img}></img>
            <button>Edit</button>
            <button onClick={()=>{props.deletePlace(props.tPlace._id)}}>Delete</button>
           
        </div>
    )
}

export default SingleToTryComponent