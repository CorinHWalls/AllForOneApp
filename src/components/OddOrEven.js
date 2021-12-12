import React, {useState} from 'react'
import { handleOddEven } from '../Services/APIServices';
import { Container, Row, Col, Form } from "react-bootstrap";


//add validation so that a number must be entered only then will submit button appear

function OddOrEven() {

    let [Number, setNumber] = useState("");
    let [Title, setTitle] = useState("Enter a number and I bet that I can tell you if it is odd or even!");
   
    const getOddEven = async (e) => {
        setNumber( await handleOddEven({
            Number: e.target.value
        }))
    }

    const handleSubmit = () => {
        setTitle(Number);
    }
    return (
        <>
            <h1>{Title}</h1>
            <Form.Control onChange={getOddEven} type="text" placeholder="enter a number" />
            <button onClick={handleSubmit}>Submit</button> 
        </>
    )
}

export default OddOrEven
