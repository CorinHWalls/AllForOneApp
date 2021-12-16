import React, {useState} from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleReverseIt } from '../Services/APIServices';
import Navbar from "./Navbar"
import reverseAvatar from "../assets/reverseAvatar.png";
import a_button from "../assets/a_Btn.png";

function ReverseIt() {
    let [Result, setResult] = useState("");
    let [EnteredString, setEnteredString] = useState("");

    const getReverse = async (e) => {
        setEnteredString(await handleReverseIt({
            EnteredString: e.target.value
        }))
      
    }

    const handleSubmit = (e) =>{
        setResult(EnteredString);
    }

    return (

        <>
            <Navbar appName="Reverse It!" />
            <div className="reverse-bg pt-4">
                <Container>
                <Row className="justify-content-md-center">
                    <Col xs="1" md="12" lg="2" className="pt-5">
                    <img className="reverse-avatar" src={reverseAvatar} alt="" />
                    </Col>

                    <Col md="auto">
                    <h2>Enter something and I bet that I can reverse it!</h2>
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-center pt-2">
                    <h2>{Result}</h2>
                    </Col>
                </Row>

                <Row>
                    <Col className="pt-3">
                    <Form.Control onChange={getReverse} type="text" placeholder="enter anything, ill reverse it!" />
                    </Col>
                </Row>


                <Row>
                    <Col className="d-flex justify-content-center pt-2">
                    <img className="a_btn floater" src={a_button}  onClick={handleSubmit} alt="" />
                    </Col>
                </Row>
                </Container>
            </div>
            
            

        </>
    )
}

export default ReverseIt
