import React, { useState } from "react";
import { handleOddEven } from "../Services/APIServices";
import { Container, Row, Col, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import oddEvenAvatar from "../assets/oddEvenAvatar.png";
import a_button from "../assets/a_Btn.png";
import b_button from "../assets/b_button.png";

//add validation so that a number must be entered only then will submit button appear

function OddOrEven() {
  let [Number, setNumber] = useState("");
  let [Title, setTitle] = useState(
    "Enter a number and I bet that I can tell you if it is odd or even!"
  );
  let [Result, setResult] = useState("");
  let [button, setButton] = useState("");
  let [buttonName, setButtonName] = useState("Submit");

  const getOddEven = async (e) => {
    setNumber(
      await handleOddEven({
        Number: e.target.value,
      })
    );
  };

  const handleInput = (e) => {
    document.getElementById("input").readOnly = true;
  };

  const handleSubmit = () => {
    setResult(Number);
    setButton("none");
    setButtonName("Retry");
    handleInput();
  };

  const handleRetry = (e) => {
    window.location.reload(true);
  };

  return (
    <>
      <Navbar appName="Odd or Even" />
      <div className="oddEven-bg">
        <Container className="pt-5">
          <Row className="justify-content-md-center">
            <Col xs lg="3" className="pt-3">
              <img
                className="slideRight oddEvenAvatar"
                src={oddEvenAvatar}
                alt=""
              />
            </Col>
            <Col md="auto pt-4">
              <h2>Enter a number and ill tell you if it is Odd or Even</h2>
            </Col>
            <Row>
              <Col className="d-flex justify-content-center">
                <h2>{Result}</h2>
              </Col>
            </Row>
          </Row>

          <Row>
            <Col xs className="pt-2">
              <Form.Control
                onChange={getOddEven}
                type="number"
                placeholder="enter a number"
                id="input"
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

export default OddOrEven;
