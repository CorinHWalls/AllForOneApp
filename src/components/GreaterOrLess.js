import React, {useState} from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import  {handleGreaterOrLess} from "../Services/APIServices"

//add validation so that a number must be entered only then will submit button appear

function GreaterOrLess() {

    let [Title, setTitle] = useState("I have generated a random number, enter a number below and I will let you know if it is great or less than the number generated.")
    let [Number, setNumber] = useState("");

    const getNumber = async (e) => {
        //Number will hold the complete sentence from the API, update as needed
        setNumber(await handleGreaterOrLess({
            Number: e.target.value
        }))
    }

    const handleSubmit = () => {
        //changing the title to the Sentence from API
        setTitle(Number);
    }
    return (
        <>
            <h1>{Title}</h1>
            <Form.Control onChange={getNumber} type="text" placeholder="enter a number" />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default GreaterOrLess
