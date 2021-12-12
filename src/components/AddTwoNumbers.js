import React, {useState} from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { handleAddTwoNumbers } from '../Services/APIServices';


function AddTwoNumbers() {
    let [Title, setTitle] = useState("Enter 2 numbers and I bet I can add them together!");
    let [Number1, setNumber1] = useState("");
    let [Number2, setNumber2] = useState("");
    let [Answer, setAnswer] = useState(""); 


   
    // let results = Number1 + "+" + Number2 + "= " + Answer;
    

    const addTwoNumbers = async (e) => {
        setAnswer(await handleAddTwoNumbers({
            Number1: Number1,
            Number2: Number2
        }))

    }

    const handleSubmit = async (e) =>{
        await addTwoNumbers();
        await setTitle(Answer);
    }



    return (
        <>
            <h1>{Title}</h1>
            <Form.Control onChange={(e) => setNumber1(e.target.value)} type="text" placeholder="enter a number" />
            <Form.Control onChange={(e) => setNumber2(e.target.value)} type="text" placeholder="enter a number" />
            <button onClick={handleSubmit}>Submit</button> 
        </>
    )
}

export default AddTwoNumbers
