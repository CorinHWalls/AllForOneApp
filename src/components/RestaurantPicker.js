import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleRestaurantPicker, handleCategoryPicker } from "../Services/APIServices";
import Navbar from "./Navbar";
import a_button from "../assets/a_Btn.png";

function RestaurantPicker() {
  let [Title, setTitle] = useState(
    "Today you will be eating at:"
  );
  let [RandomPicker, setRandomPicker] = useState("");
  let [category, setCategory] = useState("");

  const getRestaurant = async (e) => {
    setRandomPicker(await handleRestaurantPicker());
  };

  ///useEffect to only fire once using []
  useEffect(() => {
      //generates random restaurant on load
      getRestaurant();

  }, [])



  const handleSubmit = async (e) => {
    setRandomPicker(await handleCategoryPicker({
        category: category
      }))
  }

  return (
    <>
    <Navbar appName="Restaurant Picker" />
    <div className="restaurant-bg pt-5">
      <Container>
      <Row className="justify-content-md-center">
        <Col className="d-flex justify-content-center" >
      <h1>{Title}</h1>
        
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
      <h2>{RandomPicker}</h2>
        </Col>
      </Row>

      <Row>

        <Row>
          <Col className="d-flex justify-content-center pt-3">
          <h4>Choose a type of restaurant below then press the A button</h4>
          </Col>
        </Row>
        <Col className="d-flex justify-content-center pt-2">
        
      <select onChange={e => setCategory(e.target.value)} name="selectList" id="selectList">
          <option value="Select One">Select One</option> {" "}
          <option value="Fast Food">Fast Food</option> {" "}
        <option value="Fine Dining">Fine Dining</option>
      </select>
        </Col>
      </Row>

      <Row>
      <Col className="d-flex justify-content-center pt-5" >
        <img className="a_btn floater" src={a_button} onClick={handleSubmit} alt="" />
        </Col>
      </Row>
      </Container>
    </div>
    </>
  );
}

export default RestaurantPicker;
