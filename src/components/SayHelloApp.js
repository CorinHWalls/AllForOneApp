import React, { useState } from "react";
import { handleSayHello } from "../Services/APIServices";
import { Container, Row, Col, Form } from "react-bootstrap";
import TypeWriter from "./TypeWriter";
import nameAvatar from "../assets/nameAvatar.png";
import a_button from "../assets/a_Btn.png";
import Navbar from "./Navbar"

function SayHelloApp() {
  let [Name, setName] = useState("");
  let [Question, setQuestion] = useState("What is your name?");
  let [displayedName, setDisplayedName] = useState("")
  let [hide, setHide] = useState("");
  let [button, setButton] = useState("")


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

   //hiding what is your name? text
   setHide("none");
  };

//   if(Name == ""){
//     setButton("");
// }

  return (
    <>
    <Navbar />
      <div className="Name-gameBG pt-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2" className=" pt-5">
              <img className="nameAvatar" src={nameAvatar} alt="" />
            </Col>
            <Col md="auto" >
              <h2>{displayedName}</h2>
            </Col>
           <Col >
              <h3 style={{display: hide ? "none" : null}} >
                <TypeWriter content={Question} speed={100} />
              </h3>
           
           </Col>
          </Row>

          <Row>
          <Col xs className="pt-5">
              <Form.Control
                onChange={getName}
                type="text" required
                placeholder="Enter your name"
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

export default SayHelloApp;
