import EditEateryComponent from "../../editEateryComponent/editEateryComponent"
import EditPhotoComponent from "../../editEateryComponent/editPhotoComponent"
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const SingleToTryComponent = (props) =>{
    const [modalShow, setModalShow] = useState(false)
    const handleClose =()=> setModalShow(false)
    const handleShow =()=> setModalShow(true)

    const [photoShow, setPhotoShow] = useState(false)
    const close =()=> setPhotoShow(false)
    const show =()=> setPhotoShow(true)

    //see more details:
    const [infoModal, setInfoModal] = useState(false)
    const closeInfo = ()=> setInfoModal(false)
    const showInfo = ()=> setInfoModal(true)
    
    return(
        <div id="single-to-try">
            <h4>{props.tPlace.name}</h4>
            <img onClick ={showInfo}alt ="restaurant"src={props.tPlace.img}></img>
            <h5> Cuisine: {props.tPlace.cuisine}</h5>

            <Modal id="show-details"show={infoModal} onHide={closeInfo}>
                <h3 id="deets-title">{props.tPlace.name}</h3>
                <h3><strong>What you get:</strong> {props.tPlace.cuisine}</h3>
                <h3><strong>the deets:</strong> {props.tPlace.notes ? props.tPlace.notes : 'nothing to report yet...'}</h3>
                {/* <h3><strong>Favorite Order:</strong> {props.tPlace.faveDish ? props.tPlace.faveDish : 'nothing yet!'}</h3> */}
                <button onClick={closeInfo}>Close</button>
            </Modal>

            <Button className="edit-button"onClick={handleShow}>Edit</Button>
            <Modal id="edit-modal"show={modalShow} onHide={handleClose}>
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
                    <Button id="delete" onClick={()=>{props.deletePlace(props.tPlace._id)}}>Delete</Button>
                </Modal.Body>
               {/* <Modal.Footer>
                   <Button onClick={handleClose}>Close</Button>
               </Modal.Footer> */}
            </Modal>

            <Button className="edit-button" onClick={show}>Update Photo</Button>
            <Modal id="edit-modal"show={photoShow} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <EditPhotoComponent
                    key={props.tPlace._id} 
                    showing={props.showing}
                    setShowing={props.setShowing}
                    toggleShow={props.toggleShow}
                    place={props.tPlace}
                    editPhotoF={props.editPhotoF}
                    image={props.image} setImage={props.setImage} url={props.url} setUrl={props.setUrl}
                    close={close}
                ></EditPhotoComponent>
                </Modal.Body>
               {/* <Modal.Footer>
                   <Button onClick={close}>Close</Button>
               </Modal.Footer> */}
            </Modal>

            
           
        </div>
    )
}

export default SingleToTryComponent