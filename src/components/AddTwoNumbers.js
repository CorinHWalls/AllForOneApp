import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleAddTwoNumbers } from "../Services/APIServices";
import Navbar from "./Navbar";
import a_button from "../assets/a_Btn.png";

function AddTwoNumbers() {
  let [Title, setTitle] = useState(
    "Enter 2 numbers and I bet I can add them together!"
  );
  let [Number1, setNumber1] = useState("");
  let [Number2, setNumber2] = useState("");
  let [Answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    setAnswer(
      await handleAddTwoNumbers({
        Number1: Number1,
        Number2: Number2,
      })
    );
  };

  return (
    <>
      <Navbar appName="Adding numbers" />
      <div className="addingNumbers-bg">
        <Container>
          <Row>
            <Col className="pt-5">
              <h1>{Title}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center pt-2">
              <h2>{Answer}</h2>
            </Col>
          </Row>
          <Row>
            <Col className="pt-3">
              <Form.Control
                onChange={(e) => setNumber1(e.target.value)}
                type="number"
                placeholder="enter a number"
              />
            </Col>
          </Row>

          <Row>
            <Col className="pt-3">
              <Form.Control
                onChange={(e) => setNumber2(e.target.value)}
                type="number"
                placeholder="enter a number"
              />
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center pt-2">
              <img
                className="a_btn floater"
                src={a_button}
                onClick={handleSubmit}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AddTwoNumbers;
