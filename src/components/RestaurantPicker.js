import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleRestaurantPicker, handleCategoryPicker } from "../Services/APIServices";

function RestaurantPicker() {
  let [Title, setTitle] = useState(
    "Welcome to the Random Restaurant Picker today you should eat at:"
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
      <h1>{Title}</h1>
      <h2>{RandomPicker}</h2>

      <select onChange={e => setCategory(e.target.value)} name="selectList" id="selectList">
          <option value="Select One">Select One</option> {" "}
          <option value="Fast Food">Fast Food</option> {" "}
        <option value="Fine Dining">Fine Dining</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default RestaurantPicker;
