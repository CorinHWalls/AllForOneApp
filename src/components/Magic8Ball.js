import React, {useState} from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import {handleMagic8Ball} from "../Services/APIServices"


function Magic8Ball() {

    let [Response, setResponse] = useState("");

    const get8Ball = async (e) => {
        setResponse(await handleMagic8Ball())
    }

    return (
        <>
        <h1>Magic 8 Ball</h1>

        <h2>{Response}</h2>
        <Form.Control type="text" placeholder="Type question here.." />
        <button onClick={get8Ball}>Shake 8 Ball</button>
        </>
    )
}

export default Magic8Ball
