import EditEateryComponent from "../../editEateryComponent/editEateryComponent"
import './singleTry.css'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const SingleToTryComponent = (props) =>{
    const [modalShow, setModalShow] = useState(false)
    const handleClose =()=> setModalShow(false)
    const handleShow =()=> setModalShow(true)

    return(
        <div id="single-to-try">
            <h4>{props.tPlace.name}</h4>
            <img alt ="restaurant"src={props.tPlace.img}></img>
            <h5> Cuisine: {props.tPlace.cuisine}</h5>

            <Button className="edit-button"onClick={handleShow}>Edit</Button>
            <Modal show={modalShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Restaurant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditEateryComponent  
                            showing={props.showing}
                            setShowing={props.setShowing}
                            toggleShow={props.toggleShow}
                            place={props.tPlace}
                            editOnePlace={props.editOnePlace}
                    ></EditEateryComponent>
                    <Button variant="warning" onClick={()=>{props.deletePlace(props.tPlace._id)}}>Delete</Button>
                </Modal.Body>
               <Modal.Footer>
                   <Button onClick={handleClose}>Close</Button>
               </Modal.Footer>
            </Modal>

            {/* <Button className="edit-button" onClick={show}>Update Photo</Button>
            <Modal show={photoShow} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditPhotoComponent
                    key={props.vPlace._id} 
                    showing={props.showing}
                    setShowing={props.setShowing}
                    toggleShow={props.toggleShow}
                    place={props.vPlace}
                    editPhotoF={props.editPhotoF}
                    image={props.image} setImage={props.setImage} url={props.url} setUrl={props.setUrl}
                ></EditPhotoComponent>
                </Modal.Body>
               <Modal.Footer>
                   <Button onClick={close}>Close</Button>
               </Modal.Footer>
            </Modal> */}

            
           
        </div>
    )
}

export default SingleToTryComponent