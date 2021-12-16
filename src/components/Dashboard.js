// import "./App.css";
import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import title from "../assets/title.png";
import GameSelection from "./GameSelection";

function Dashboard() {
  return (
    <>
      <div className="TitleScreen">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center pt-5">
              <img className="main-title" src={title} alt="" />
            </Col>
          </Row>

          <div className="Dashboard">
            <GameSelection />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
