import { useState, useEffect } from "react";
import NewEateryComponent from "./newEateryComponent/newEateryComponent";
import ToTryComponent from "./toTryComponent/toTryComponent";
import VisitedComponent from "./visitedComponent/visitedComponent";
import ('./allEateries.css')

const AllEateriesContainer = () =>{
    const [eateries, setEateries] = useState([{'name':'The Carvery', 'visited':true, 'cuisine':'american', 'img':'https://i.imgur.com/5CPHDIS.jpg', 'faveDish':'brie appetizer', 'notes':'sit outside', 'priceRange':2, 'user':'1'}, {'name':'The Carvery', 'visited':true, 'cuisine':'american', 'img':'https://i.imgur.com/5CPHDIS.jpg', 'faveDish':'brie appetizer', 'notes':'sit outside', 'priceRange':2, 'user':'1'}, {'name':'The Carvery', 'visited':true, 'cuisine':'american', 'img':'https://i.imgur.com/5CPHDIS.jpg', 'faveDish':'brie appetizer', 'notes':'sit outside', 'priceRange':2, 'user':'1'},{'name':'Heritage', 'visited':false, 'cuisine':'american', 'img':'https://i.imgur.com/TTMkE71.jpg', 'faveDish':'', 'notes':'tasting-menu', 'priceRange':2, 'user':'1'}, {'name':'Heritage', 'visited':false, 'cuisine':'american', 'img':'https://i.imgur.com/TTMkE71.jpg', 'faveDish':'', 'notes':'tasting-menu', 'priceRange':2, 'user':'1'}])

    // const [newEatery, setNewEatery] = useState()
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
    return(
        <div id="all-eateries">
            <h1>My Mood:</h1>
            <h3>gif? or image? pointing to one or the other?</h3>
            <section id="two-lists">
                <NewEateryComponent createNew={createNew}></NewEateryComponent>
                <VisitedComponent eateries={eateries}></VisitedComponent>
                <ToTryComponent eateries={eateries}></ToTryComponent>
            </section>
            
        </div>
    )

}

export default AllEateriesContainer
