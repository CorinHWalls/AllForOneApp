import React, {useState} from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleRestaurantPicker } from '../Services/APIServices';

function RestaurantPicker() {

    let [Title, setTitle] = useState("Welcome to the Random Restaurant Picker today you should eat at:");
    let [RandomPicker, setRandomPicker] = useState("");
    
    const getRestaurant = async (e) => {
       setRandomPicker(await handleRestaurantPicker())
    }

    getRestaurant();
    return (
        <>
            <h1>{Title}</h1>
            <h2>{RandomPicker}</h2>
            
        </>
    )
}

export default RestaurantPicker
