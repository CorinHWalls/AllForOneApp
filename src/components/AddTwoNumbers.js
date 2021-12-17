import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleAddTwoNumbers } from "../Services/APIServices";
import Navbar from "./Navbar";
import a_button from "../assets/a_Btn.png";
import b_button from "../assets/b_button.png";

function AddTwoNumbers() {
  let [Title, setTitle] = useState(
    "Enter 2 numbers and I bet I can add them together!"
  );
  let [Number1, setNumber1] = useState("");
  let [Number2, setNumber2] = useState("");
  let [Answer, setAnswer] = useState("");
  let [button, setButton] = useState("");
  let [buttonName, setButtonName] = useState("Submit");

  const handleSubmit = async (e) => {
    setAnswer(
      await handleAddTwoNumbers({
        Number1: Number1,
        Number2: Number2,
      })
    );

    setButton("none");
    setButtonName("Retry");
    handleInput();
  };

  const handleInput = (e) => {
    document.getElementById("input1").readOnly = true;
    document.getElementById("input2").readOnly = true;
  };
  const handleRetry = (e) => {
    window.location.reload(true);
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
                id="input1"
              />
            </Col>
          </Row>

          <Row>
            <Col className="pt-3">
              <Form.Control
                onChange={(e) => setNumber2(e.target.value)}
                type="number"
                placeholder="enter a number"
                id="input2"
              />
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center pt-2">
              <img
                className="a_btn floater pt-2"
                src={a_button}
                style={{ display: button ? "none" : null }}
                onClick={handleSubmit}
                alt=""
              />
              <img
                className="a_btn floater pt-2"
                src={b_button}
                style={{ display: button ? null : "none" }}
                onClick={handleRetry}
                alt=""
              />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center pt-1">
              {buttonName}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AddTwoNumbers;
