import { useState, useEffect } from "react";
import {Container, Row, Col, Button, Alert, Breadcrumb, Form, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewEateryComponent from "./newEateryComponent/newEateryComponent";
import ToTryComponent from "./toTryComponent/toTryComponent";
import VisitedComponent from "./visitedComponent/visitedComponent";
import ('./allEateries.css')



const AllEateriesContainer = () =>{
    const [eateries, setEateries] = useState([])
    const [visited, setVisited] = useState([])
    const [toTry, setToTry] = useState ([])

  
    //create:
    const createNew = async (newPlace) =>{
        const createResponse = await fetch ('http://localhost:3001/restaurants',{
            method: "POST",
            body: JSON.stringify(newPlace),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await createResponse.json()
        if(parsedResponse.success){
            setEateries([parsedResponse.data, ...eateries])
        }else{
            console.log(parsedResponse.data)
        }
    }
    //get all:
    const getEateries = async ()=>{
        try{
            const eateries = await fetch ('http://localhost:3001/restaurants')
            const parsedEateries = await eateries.json()
            setEateries(parsedEateries.data)
            // console.log(parsedEateries.data)
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(getEateries, [])

    //get visited:
    const getVisited = async ()=>{
        try{
            const visited = await fetch ('http://localhost:3001/restaurants')
            const parsedVisited = await visited.json()
            const vPlaces = parsedVisited.data
            // const visitedPlaces = [];
            // for(let i=0; i<places.length; i++){
            //     if(places[i].visited === true){
            //         visitedPlaces.push(places[i])
            //     }
            // }
            // setVisited(visitedPlaces)
            // console.log(visitedPlaces)
            const visistedPlaces = vPlaces.filter((place)=>{
                return place.visited === true
            })
            setVisited(visistedPlaces)
            // console.log(visistedPlaces)
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(getVisited, [])

    //get to try:
    const getToTry = async ()=>{
        try{
            const toTry = await fetch ('http://localhost:3001/restaurants')
            const parsedToTry = await toTry.json()
            const tPlaces = parsedToTry.data
            const toTryPlaces = tPlaces.filter((place)=>{
                return place.visited === false
            })
            setToTry(toTryPlaces)
            // console.log(toTryPlaces)
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(getToTry, [])

    //get random choice:
     const [random, setRandom] = useState({})
     const getRandom = ()=>{
          const newRandom = eateries[Math.floor(Math.random()*eateries.length)]
          setRandom(newRandom)
     }
      
    //edit:

    //delete: ISSUE: not updating list - state issue? use effect issue?
    const deletePlace = async (idToDelete) =>{
        try{
            const deleteResponse = await fetch (`http://localhost:3001/restaurants/${idToDelete}`,{
                method: "DELETE"
            })
            const parsedDelete = await deleteResponse.json()
            if(parsedDelete.success ===true){
                const eateriesArray = eateries.filter((place)=>{
                    return place._id !==idToDelete
                })
                setEateries(eateriesArray)
                
            }
        }catch(err){
            console.log(err)
        }
        
    }
   

   

    return(
        <div id="all-eateries">
            <div id="create-new">
                <NewEateryComponent createNew={createNew}></NewEateryComponent>
            </div>
            
            <h1>My Mood:</h1>
            <div className="random">
            <Button onClick={getRandom}>Choose for me!</Button>
            <h5>{random.name}</h5>
            </div>
            <section id="two-lists">
                <VisitedComponent 
                    eateries={eateries} 
                    visited={visited} 
                    visitedName={visited.name}
                    deletePlace={deletePlace}
                ></VisitedComponent>

                <ToTryComponent 
                    eateries={eateries} 
                    toTry={toTry}
                    deletePlace={deletePlace}
                ></ToTryComponent>
            </section>






            <section id="bootstrap-example">
        <Container>
        <Form>
          <Row>
            {/* md makes columns responsive for smaller screen */}
            <Col md>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="example@email.com"></Form.Control>
              <Form.Text className="text-muted">We'll never share your email address, trust!</Form.Text>
          </Form.Group>
          
            </Col>
            <Col md>
              <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"></Form.Control>
            </Form.Group>
            </Col>
          </Row>
          
          <Button variant="secondary" type="submit">Login</Button>
        </Form>
      <Card className="mb-3"style={{color:"#000"}}>
          <Card.Img src="https://i.imgur.com/IsRaUa5.png/75/50" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an ex of react bootstrap cards</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
        </Container>

        
      </section>
            
        </div>
    )

}

export default AllEateriesContainer
