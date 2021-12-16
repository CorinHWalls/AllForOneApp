import React, { useState } from "react";
import { handleAskingQuestions } from "../Services/APIServices";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import TypeWriter from "./TypeWriter";
import questionAvatar from "../assets/questionsAvatar.png"
import a_button from "../assets/a_Btn.png"

function AskingQuestion() {
  let [Name, setName] = useState("");
  let [Time, setTime] = useState("");
  let [Question, setQuestion] = useState(
    "What is your name and what time did you wake up today?"
  );
  let [hide, setHide] = useState("");
  let [Answer, setAnswer] = useState("");
  let [button, setButton] = useState("")

  const handleSubmit = async (e) => {
    let results = await handleAskingQuestions({
      Name: Name,
      Time: Time,
    });

    setAnswer(<TypeWriter content={results} speed={100} />);
    setHide("none");
  };

  return (
    <>
      <Navbar appName="Asking Questions" />
      <div className="questions-bg pt-5">
        <Container>
            <Row className="justify-content-md-center">

            <Col xs lg="2" className="pt-5">
              <img className="questionsAvatar slideUp" src={questionAvatar} alt="" />
            </Col>
            <Col md="auto">
                <h3>
              {Answer}
              </h3>
                </Col>

                <Col className="pt-5">
                <h3 style={{display: hide ? "none" : null}} >
                <TypeWriter content={Question} speed={100} />
              </h3>
                </Col>
                
            </Row>

         <Row>
             <Col  className="d-flex justify-content-md-center pt-2">
             
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            
          />
             </Col>
         </Row>

         <Row>
             <Col className="pt-3">
          <Form.Control
            onChange={(e) => setTime(e.target.value)}
            type="text"
            placeholder="What time did you wake up?"
          />
             
             </Col>
         </Row>

         <Row>

             <Col className="d-flex justify-content-center">
          <img className="a_btn floater pt-2" src={a_button} style={{display: button ? "none" : null}} onClick={handleSubmit} alt="" />
             
             </Col>
         </Row>
        </Container>
      </div>
    </>
  );
}

export default AskingQuestion;
