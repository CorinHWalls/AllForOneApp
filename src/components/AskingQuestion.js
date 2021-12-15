import React, {useState} from 'react'
import {handleAskingQuestions} from "../Services/APIServices";
import { Container, Row, Col, Form } from "react-bootstrap";

function AskingQuestion() {
    let [Name, setName] = useState("");
    let [Time, setTime] = useState("");
    let [Question, setQuestion] = useState("What is your name and what time did you wake up today?")
    let [Answer, setAnswer] = useState("")


 

const handleSubmit = async (e) => {
    
  let results =  await handleAskingQuestions({
        Name: Name,
        Time: Time
    })

        setQuestion(results);
    }

    return (
        <>
        <h1>{Question}</h1>
            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
            <Form.Control onChange={(e) => setTime(e.target.value)} type="text" placeholder="What time did you wake up?" />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default AskingQuestion
