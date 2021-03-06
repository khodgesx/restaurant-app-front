import { useState, useEffect } from "react";
import { Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewEateryComponent from "./newEateryComponent/newEateryComponent";
import ToTryComponent from "./toTryComponent/toTryComponent";
import VisitedComponent from "./visitedComponent/visitedComponent";
import apiUrl from "../apiConfig";
import ('./allEateries.css')



const AllEateriesContainer = (props) =>{
    const [eateries, setEateries] = useState([])
    const [visited, setVisited] = useState([])
    const [toTry, setToTry] = useState ([])
    const [randomShow, setRandomShow] = useState(false)

    const [showing, setShowing] = useState(false)
    //function for toggleShow
    const toggleShow =()=>setShowing(!showing)
    const toggleRandom =()=>setRandomShow(!randomShow)
    
    const [image, setImage] = useState()
    //state of the image url from cloudinary
    const [url, setUrl] = useState('')
  
    //create:
    const createNew = async (newPlace) =>{
        try {
            if(image){
                const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'restaurants')
            
            const imageUpload = await fetch('https://api.cloudinary.com/v1_1/dmc4kghoi/image/upload', {
                method: "POST",
                body: data
            })
    
            const parsedImg = await imageUpload.json()
            newPlace.img = await parsedImg.url
    
            }else{
                newPlace.img = 'https://i.imgur.com/IsRaUa5.png'
            }
            const userId = JSON.parse(localStorage.getItem('currentUser'))
            console.log(userId)
            const createResponse = await fetch (`${apiUrl}/restaurants/${userId._id}`,{
                method: "POST",
                body: JSON.stringify(newPlace),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await createResponse.json()
            console.log(parsedResponse)
            if(parsedResponse.success){
                setEateries([parsedResponse.data, ...eateries])
                //vplaces= new eatery plus the old visited
                const vPlaces = ([parsedResponse.data, ...visited])
                //visited actually = filtering over that new array and checking if visited is true
                const visitedPlaces = vPlaces.filter((place)=>{
                return place.visited === true
            })
            setVisited(visitedPlaces)

            const tPlaces = ([parsedResponse.data, ...toTry])
            const toTryPlaces = tPlaces.filter((place)=>{
                return place.visited === false
            })
            setToTry(toTryPlaces)
            
            }else{
                console.log(parsedResponse.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    //get all:
    const getEateries = async ()=>{
        try{
            const userId = JSON.parse(localStorage.getItem('currentUser'))._id
            const eateries = await fetch (`${apiUrl}/restaurants/${userId}`)
            const parsedEateries = await eateries.json()
            setEateries(parsedEateries.data)

            const vPlaces = parsedEateries.data
            const visitedPlaces = vPlaces.filter((place)=>{
                return place.visited === true
            })
            setVisited(visitedPlaces)

            const tPlaces = parsedEateries.data
            const toTryPlaces = tPlaces.filter((place)=>{
                return place.visited === false
            })
            setToTry(toTryPlaces)
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(getEateries, [])
   

    //get random choice:
     const [random, setRandom] = useState({})
     const getRandom = ()=>{
          toggleRandom()
          if(eateries.length > 0){
            const newRandom = eateries[Math.floor(Math.random()*eateries.length)]
          setRandom(newRandom)
          }else{
              const noRandom = {
                  name: 'oops no restaurants added yet!'
              }
              setRandom(noRandom)
          }
          
     }
      
    //edit:
    const editOnePlace = async (idToEdit, placeToEdit)=>{
        try{

            const editResponse = await fetch(`${apiUrl}/restaurants/${idToEdit}`, {
                method:"PUT",
                body:JSON.stringify(placeToEdit),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedEdit = await editResponse.json()
            if(parsedEdit.success){
                const newArray = visited.map(place => place._id === idToEdit ? placeToEdit : place)
                setVisited(newArray)
                const newArrayTwo = toTry.map(place => place._id === idToEdit ? placeToEdit : place)
                setToTry(newArrayTwo)
            }

        }catch(err){
            console.log(err)
        }
    }
 

    //edit photo:
    const editPhotoF = async (idToEdit, placeToEdit)=>{
        try{
            const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'restaurants')
            
            const imageUpdate = await fetch('https://api.cloudinary.com/v1_1/dmc4kghoi/image/upload', {
                method: "POST",
                body: data
            })
            const parsedImg = await imageUpdate.json()
            placeToEdit.img = await parsedImg.url

            await console.log('updated img', placeToEdit)

            const editResponse = await fetch(`${apiUrl}/restaurants/update-photo/${idToEdit}`, {
                method:"PUT",
                body:JSON.stringify(placeToEdit),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedEdit = await editResponse.json()
            if(parsedEdit.success){
                const newArray = visited.map(place => place._id === idToEdit ? {...place, img:placeToEdit.img} : place)
        
                setVisited(newArray)
                const newArrayTwo = toTry.map(place => place._id === idToEdit ? placeToEdit : place)
                setToTry(newArrayTwo)
            }

        }catch(err){
            console.log(err)
        }
    }
    //delete: 
    const deletePlace = async (idToDelete) =>{
        try{
            const deleteResponse = await fetch (`${apiUrl}/restaurants/${idToDelete}`,{
                method: "DELETE"
            })
            const parsedDelete = await deleteResponse.json()
            if(parsedDelete.success ===true){
                const newArray = visited.filter((place)=> place._id !==idToDelete)
                setVisited(newArray)

                const newArrayTwo = toTry.filter((place)=>place._id !==idToDelete)
                setToTry(newArrayTwo)
            }

        }catch(err){
            console.log(err)
        }     
    }
  
   
   

   

    return(
        <div id="all-eateries">
            
            <section id="top-container">
                <div id='top-top'>
                <p id="welcome">Keep track of the places you love to eat and those you're dying to try...
                </p>
                </div>
                
                <div id='mid-top'>
                    <Button id="add-new-button"onClick={setShowing}>Add New</Button>
                    <Modal id="add-new-modal"show={showing} onHide={toggleShow}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Restaurant Details Here:</Modal.Title>
                        </Modal.Header>
                        <div id="create-new">
                            <NewEateryComponent 
                            image={image} setImage={setImage} url={url} setUrl={setUrl} createNew={createNew}
                            toggleShow={toggleShow}
                            currentUser={props.currentUser}
                            setCurrentUser={props.setCurrentUser}
                            userId={props.userId}
                            ></NewEateryComponent>
                        </div>
                    </Modal>

                    
                    <div className="random">
                        <Button id="random-button"onClick={getRandom}>Choose for me!</Button>
                        <Modal id="random-modal" show={randomShow}onHide={setRandomShow}>
                        <h5>{random.name}</h5>
                        <button onClick={toggleRandom}>Close</button>
                        </Modal>
                    </div>
                    

                    
                </div>
                
            </section>

        

            <section id="two-lists">
                
                <VisitedComponent 
                    eateries={eateries} 
                    visited={visited} 
                    visitedName={visited.name}
                    deletePlace={deletePlace}
                    showing={showing}
                    setShowing={setShowing}
                    toggleShow={toggleShow}
                    editOnePlace={editOnePlace}
                    editPhotoF={editPhotoF}
                    image={image} setImage={setImage} url={url} setUrl={setUrl}
                ></VisitedComponent>

                <ToTryComponent 
                    eateries={eateries} 
                    toTry={toTry}
                    deletePlace={deletePlace}
                    showing={showing}
                    setShowing={setShowing}
                    toggleShow={toggleShow}
                    editOnePlace={editOnePlace}
                    editPhotoF={editPhotoF}
                    image={image} setImage={setImage} url={url} setUrl={setUrl}
                ></ToTryComponent>
            </section>
        </div>
    )

}

export default AllEateriesContainer
