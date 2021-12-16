import React, {useState} from "react";
import { Navbar, Container, Modal, Button } from "react-bootstrap";
import logo from "../assets/xbox-logo.png";
import GameSelection from "./GameSelection";
import { Link } from "react-router-dom";

function Navigation(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="navbar-dark" sticky="bottom" bg="dark"  expand="lg">
        <Container>
          <Navbar.Brand className="slideLeft">
            {props.appName}
          </Navbar.Brand>
          <Navbar.Brand >
           
            <img onClick={handleShow} className="navLogo wiggle" src={logo} alt="" />
         
          </Navbar.Brand>
       
        </Container>
      </Navbar>

      {/*/////////////////// Modal/////////////////////// */}
      <Modal size="lg"  aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Go to Main Menu?</Modal.Title>
        </Modal.Header>
      
        <Modal.Footer>
          <Link to="/">
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
          </Link>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navigation;
