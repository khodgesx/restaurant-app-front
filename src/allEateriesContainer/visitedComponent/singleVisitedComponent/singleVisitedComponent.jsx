import EditEateryComponent from '../../editEateryComponent/editEateryComponent'
import './singleVisited.css'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


const SingleVisitedComponent = (props)=>{
    const [modalShow, setModalShow] = useState(false)
    const handleClose =()=> setModalShow(false)
    const handleShow =()=> setModalShow(true)

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

            
            
        </div>
    )
}

export default SingleVisitedComponent