import EditEateryComponent from '../../editEateryComponent/editEateryComponent'
import EditPhotoComponent from '../../editEateryComponent/editPhotoComponent'
import './singleVisited.css'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


const SingleVisitedComponent = (props)=>{
    const [modalShow, setModalShow] = useState(false)
    const handleClose =()=> setModalShow(false)
    const handleShow =()=> setModalShow(true)

    const [photoShow, setPhotoShow] = useState(false)
    const close =()=> setPhotoShow(false)
    const show =()=> setPhotoShow(true)

    return(
        <div id="single-visited">
            <h4>{props.vPlace.name}</h4>
            <img alt ="restaurant"src={props.vPlace.img}></img>
            <h5> Cuisine: {props.vPlace.cuisine}</h5>

            <Button className="edit-button" onClick={handleShow}>Edit</Button>
            <Modal show={modalShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Restaurant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditEateryComponent
                    key={props.vPlace._id} 
                    showing={props.showing}
                    setShowing={props.setShowing}
                    toggleShow={props.toggleShow}
                    place={props.vPlace}
                    editOnePlace={props.editOnePlace}
                ></EditEateryComponent>
                <Button variant="warning" onClick={()=>{props.deletePlace(props.vPlace._id)}}>Delete</Button>
                </Modal.Body>
               <Modal.Footer>
                   <Button onClick={handleClose}>Close</Button>
               </Modal.Footer>
            </Modal>
            
            <Button className="edit-button" onClick={show}>Update Photo</Button>
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
                    close={close}
                ></EditPhotoComponent>
                </Modal.Body>
               <Modal.Footer>
                   <Button onClick={close}>Close</Button>
               </Modal.Footer>
            </Modal>


            
            
        </div>
    )
}

export default SingleVisitedComponent