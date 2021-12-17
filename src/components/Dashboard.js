import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import title from "../assets/title.png";
import GameSelection from "./GameSelection";
import videoGamesGif from "../assets/videoGames.gif";


function Dashboard() {
 
  return (
    <>
   
      <div className="TitleScreen">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center pt-5">
              <img className="main-title pulse" src={title} alt="" />
            </Col>
          </Row>
         
          <Row>
            <Col className="Dashboard pt-5 slideLeft">
              <GameSelection />
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center slideRight">
              <img src={videoGamesGif} alt="" />
            </Col>
          </Row>
        </Container>
      </div>

    </>
      
  );
}

export default Dashboard;
