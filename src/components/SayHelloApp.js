import React, {useState} from 'react'
import { handleSayHello } from "../Services/APIServices";
import { Container, Row, Col, Form } from "react-bootstrap";

function SayHelloApp() {

    let [Name, setName] = useState("");
    let [Title, setTitle] = useState("What is your name?");

    

    //getName function is getting the value of input field and storing in nameData
    const getName = async (e) => {

        setName( await handleSayHello({
            Name: e.target.value //passing this in as prop
        }))
     
    }

    const handleSubmit = () => {
        setTitle(Name);
    }

    return (
        <>
            <h1>{Title}</h1>
            <Form.Control onChange={getName} type="text" placeholder="Enter your name" />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default SayHelloApp
