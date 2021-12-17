import React, {useState} from "react";
import { Navbar, Container, Modal, Button, Row, Col } from "react-bootstrap";
import logo from "../assets/xbox-logo.png";
import GameSelection from "./GameSelection";
import { Link } from "react-router-dom";

function Navigation(props) {

  return (
    <>
      <Navbar className="navbar-dark" sticky="bottom" bg="dark"  expand="lg">
        <Container>
          <Navbar.Brand className="slideLeft">
            {props.appName}
          </Navbar.Brand>
          <Navbar.Brand >
           
           <Row>
             <Col>
             <Link to="/">
            <img className="navLogo wiggle" src={logo} alt="home" /> 
            </Link>
            <h4>Home</h4>
             
             </Col>
           </Row>
         
          </Navbar.Brand>
       
        </Container>
      </Navbar>

    </>
  );
}

export default Navigation;
