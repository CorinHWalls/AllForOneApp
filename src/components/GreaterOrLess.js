import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleGreaterOrLess } from "../Services/APIServices";
import Navbar from "./Navbar";
import greaterLessAvatar from "../assets/GreaterLessAvatar.png";
import TypeWriter from "./TypeWriter";
import a_button from "../assets/a_Btn.png";

//add validation so that a number must be entered only then will submit button appear

function GreaterOrLess() {
  let [Title, setTitle] = useState(
    "Is your number greater or less than mine?"
  );
  let [Number, setNumber] = useState("");
  let [hide, setHide] = useState("");
  let [displayedAnswer, setDisplayedAnswer] = useState("");
  let [button, setButton] = useState("")

  const getNumber = async (e) => {
    //Number will hold the complete sentence from the API, update as needed
    setNumber(
      await handleGreaterOrLess({
        Number: e.target.value,
      })
    );
  };

  const handleSubmit = () => {
    //changing the title to the Sentence from API
    setDisplayedAnswer(<TypeWriter content={Number} speed={100} />);
    setHide("none");
  };
  return (
    <>
      <Navbar appName="Greater or Less?" />
      <div className="greaterLess-bg pt-5">
        <Container>

          <Row className="justify-content-center">
            <Col xs lg="2" className=" pt-5">
              <img
                className="greaterLessAvatar fadeIn"
                src={greaterLessAvatar}
                alt=""
              />
            </Col>
            <Col md="auto">
              <h3>{displayedAnswer}</h3>
            </Col>
            <Col>
              <h3 style={{ display: hide ? "none" : null }}>
                <TypeWriter content={Title} speed={100} />
              </h3>
            </Col>
            </Row>
            <Row>
                <Col>
                
        <Form.Control
          onChange={getNumber}
          type="number"
          placeholder="enter a number"
        />
                </Col>
            </Row>

            <Row>
                <Col className="d-flex justify-content-center pt-3">
                
                <img className="a_btn floater" src={a_button} style={{display: button ? "none" : null}} onClick={handleSubmit} alt="" />
                </Col>
            </Row>
        </Container>
      

      </div>
    </>
  );
}

export default GreaterOrLess;
