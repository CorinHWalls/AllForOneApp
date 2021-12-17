import React, {useState} from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import {handleMagic8Ball} from "../Services/APIServices"
import Navbar from "./Navbar";
import TypeWriter from "./TypeWriter";
import magic8Ball from "../assets/8ballAvatar.png"



function Magic8Ball() {

    let [Response, setResponse] = useState("");

    const get8Ball = async (e) => {
        setResponse(await handleMagic8Ball())
    }

    return (
        <>
        <Navbar appName="Magic 8 ball" />
        <div className="magic8ball-bg">
        <Container>
            <Row>
                <Col className="pt-5">
                <h1>Ask a question then press my face</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="d-flex justify-content-center pt-5">
                <img className="floater" onClick={get8Ball} src={magic8Ball} alt="" />
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-md-center">
        <h2>{Response}</h2>  
                </Col>
            </Row>
        </Container>

       
        </div>
        </>
    )
}

export default Magic8Ball
