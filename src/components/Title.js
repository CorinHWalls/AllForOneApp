import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import start from "../assets/start.png";

function Title() {
  return (
    <div className="TitleScreen">
      <Row>
        <Col className="d-flex justify-content-center">
          <img className="start-img" src={start} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default Title;
