import React, {useState} from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleReverseIt } from '../Services/APIServices';

function ReverseIt() {
    let [Title, setTitle] = useState("Enter something and I bet I can reverse it!!");
    let [EnteredString, setEnteredString] = useState("");

    const getReverse = async (e) => {
        setEnteredString(await handleReverseIt({
            EnteredString: e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        setTitle(EnteredString);
    }

    return (

        <>
            <h1>{Title}</h1>
            <Form.Control onChange={getReverse} type="text" placeholder="enter a number" />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default ReverseIt
