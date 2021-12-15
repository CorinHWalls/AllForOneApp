import React, { useState } from "react";
import { handleSayHello } from "../Services/APIServices";
import { Container, Row, Col, Form } from "react-bootstrap";
import TypeWriter from "./TypeWriter";
import nameAvatar from "../assets/nameAvatar.png";

function SayHelloApp() {
  let [Name, setName] = useState("");
  let [Question, setQuestion] = useState("What is your name?");
  let [displayedName, setDisplayedName] = useState("")
  //getName function is getting the value of input field and storing in nameData
  const getName = async (e) => {
    setName(
      await handleSayHello({
        Name: e.target.value, //passing this in as prop
      })
    );
  };

  const handleSubmit = () => {
   setDisplayedName(<TypeWriter content={Name} speed={100} />) 
   
  };

  return (
    <>
      <div className="Name-gameBG pt-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2" className="">
              <img className="nameAvatar" src={nameAvatar} alt="" />
            </Col>
            <Col md="auto" >
              <h2>{displayedName}</h2>
            </Col>
           <Col>
              <h3>
                <TypeWriter content={Question} speed={100} />
              </h3>
           
           </Col>
          </Row>

          <Row>
          <Col xs className="pt-5">
              <Form.Control
                onChange={getName}
                type="text"
                placeholder="Enter your name"
              />
              <button onClick={handleSubmit}>Submit</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SayHelloApp;
