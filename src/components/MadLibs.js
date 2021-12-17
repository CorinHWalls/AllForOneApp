import React, { useState } from "react";
import { handleMadlibs } from "../Services/APIServices";
import { Container, Row, Col, Form } from "react-bootstrap";
import a_button from "../assets/a_Btn.png";
import b_button from "../assets/b_button.png";
import Navbar from "./Navbar";

function MadLibs() {
  let [noun, setNoun] = useState("");
  let [noun2, setNoun2] = useState("");
  let [verb, setVerb] = useState("");
  let [noun3, setNoun3] = useState("");
  let [animal, setAnimal] = useState("");
  let [bodyPart, setBodyPart] = useState("");
  let [adjective, setAdjective] = useState("");
  let [noun4, setNoun4] = useState("");
  let [funnyWord, setFunnyWord] = useState("");
  let [name, setName] = useState("");
  let [MadLib, setMadLib] = useState(
    "Today I went to my favorite Taco Stand called the " +
      "____" +
      ". " +
      " Unlike most food stands, they cook and prepare the food in a " +
      "____" +
      " while you " +
      "____" +
      "." +
      " The best thing on the menu is the " +
      "____" +
      ". " +
      "Instead of ground beef they fill the taco with, " +
      "____" +
      " cheese, and top it off with a salsa made from " +
      "____" +
      ". " +
      "If that doesn't make your mouth water, then it " +
      "____" +
      " just like " +
      "____" +
      " always says: " +
      "____" +
      " " +
      "____" +
      "!"
  );
  let [button, setButton] = useState("");
  let [buttonName, setButtonName] = useState("Submit");

  const madLib = async (e) => {
    setMadLib(
      await handleMadlibs({
        noun: noun,
        noun2: noun2,
        verb: verb,
        noun3: noun3,
        animal: animal,
        bodypart: bodyPart,
        adjective: adjective,
        noun4: noun4,
        funnyword: funnyWord,
        name: name,
      })
    );
  };

  const handleInput = (e) => {
    document.getElementById("input1").readOnly = true;
    document.getElementById("input2").readOnly = true;
    document.getElementById("input3").readOnly = true;
    document.getElementById("input4").readOnly = true;
    document.getElementById("input5").readOnly = true;
    document.getElementById("input6").readOnly = true;
    document.getElementById("input7").readOnly = true;
    document.getElementById("input8").readOnly = true;
    document.getElementById("input9").readOnly = true;
    document.getElementById("input10").readOnly = true;
  };

  const handleSubmit = async (e) => {
    await madLib();
    setButton("none");
    setButtonName("Retry");
    handleInput();
  };

  const handleRetry = (e) => {
    window.location.reload(true);
  };

  return (
    <>
      <div className="madlib-bg">
        <Navbar appName="MadLibs" />
        <Container>
          <Row>
            <Col className="pt-5">
              <h1>{MadLib}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="pt-3">
              <Form.Control
                onChange={(e) => setNoun(e.target.value)}
                id="input1"
                type="text"
                placeholder="Noun"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setNoun2(e.target.value)}
                id="input2"
                type="text"
                placeholder="Noun"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setVerb(e.target.value)}
                id="input3"
                type="text"
                placeholder="Verb"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setNoun3(e.target.value)}
                id="input4"
                type="text"
                placeholder="Noun"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setAnimal(e.target.value)}
                id="input5"
                type="text"
                placeholder="Animal"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setBodyPart(e.target.value)}
                id="input6"
                type="text"
                placeholder="Body part"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setAdjective(e.target.value)}
                id="input7"
                type="text"
                placeholder="Adjective"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setNoun4(e.target.value)}
                id="input8"
                type="text"
                placeholder="Noun"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setFunnyWord(e.target.value)}
                id="input9"
                type="text"
                placeholder="Funny Word"
              />
              <Form.Control
                className="mt-2"
                onChange={(e) => setName(e.target.value)}
                id="input10"
                type="text"
                placeholder="Name"
              />
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center pt-3">
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

export default MadLibs;
