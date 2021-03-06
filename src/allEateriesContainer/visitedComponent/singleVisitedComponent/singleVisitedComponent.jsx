import EditEateryComponent from '../../editEateryComponent/editEateryComponent'
import EditPhotoComponent from '../../editEateryComponent/editPhotoComponent'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


const SingleVisitedComponent = (props)=>{
    //edit form:
    const [modalShow, setModalShow] = useState(false)
    const handleClose =()=> setModalShow(false)
    const handleShow =()=> setModalShow(true)
    //edit photo:
    const [photoShow, setPhotoShow] = useState(false)
    const close =()=> setPhotoShow(false)
    const show =()=> setPhotoShow(true)
    //see more details:
    const [infoModal, setInfoModal] = useState(false)
    const closeInfo = ()=> setInfoModal(false)
    const showInfo = ()=> setInfoModal(true)

    return(
        <div id="single-visited">
            <h4>{props.vPlace.name}</h4>
            <img onClick ={showInfo} alt ="restaurant"src={props.vPlace.img}></img>
            <h5> Cuisine: {props.vPlace.cuisine}</h5>

            <Modal id="show-details"show={infoModal} onHide={closeInfo}>
                <h3 id="deets-title">{props.vPlace.name}</h3>
                <h3><strong>What you get:</strong> {props.vPlace.cuisine}</h3>
                <h3><strong>the deets:</strong> {props.vPlace.notes ? props.vPlace.notes : 'nothing to report yet...'}</h3>
                <h3><strong>Favorite Order:</strong> {props.vPlace.faveDish ? props.vPlace.faveDish : ''}</h3>
                <button onClick={closeInfo}>Close</button>
            </Modal>

            <Button className="edit-button" onClick={handleShow}>Edit</Button>
            <Modal id="edit-modal"show={modalShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Restaurant</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <EditEateryComponent
                    key={props.vPlace._id} 
                    showing={props.showing}
                    setShowing={props.setShowing}
                    toggleShow={props.toggleShow}
                    place={props.vPlace}
                    editOnePlace={props.editOnePlace}
                ></EditEateryComponent>
                <Button id="delete" onClick={()=>{props.deletePlace(props.vPlace._id)}}>Delete</Button>
                </Modal.Body>
               <Modal.Footer>
               </Modal.Footer>
            </Modal>
            
            <Button className="edit-button" onClick={show}>Update Photo</Button>
            <Modal id="edit-modal"className="edit-modal"show={photoShow} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body  >
                    <EditPhotoComponent
                    key={props.vPlace._id} 
                    showing={props.showing}
                    setShowing={props.setShowing}
                    toggleShow={props.toggleShow}
                    place={props.vPlace}
                    editPhotoF={props.editPhotoF}
                    image={props.image} setImage={props.setImage} url={props.url} setUrl={props.setUrl}
                    close={close}
                ></EditPhotoComponent>
                </Modal.Body>
            </Modal>


            
            
        </div>
    )
}

export default SingleVisitedComponent