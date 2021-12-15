import React, {useState} from 'react'
import { handleMadlibs } from '../Services/APIServices';
import { Container, Row, Col, Form } from "react-bootstrap";


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
    let [MadLib, setMadLib] = useState("Today I went to my favorite Taco Stand called the " + "____" + ". " + " Unlike most food stands, they cook and prepare the food in a " + "____" + " while you " + "____" + "." + " The best thing on the menu is the " + "____" +  ". " + "Instead of ground beef they fill the taco with, " + "____" + " cheese, and top it off with a salsa made from " + "____" + ". " + "If that doesn't make your mouth water, then it " + "____"+ " just like " + "____"+ " always says: " + "____" + " " + "____" + "!")

    const madLib = async (e) => {
        setMadLib(await handleMadlibs({
            noun : noun,
            noun2 : noun2,
            verb : verb,
            noun3 : noun3,
            animal : animal,
            bodypart : bodyPart,
            adjective : adjective,
            noun4 : noun4,
            funnyword : funnyWord,
             name : name 
        }))
    }

    const handleSubmit = async (e) => {
        await madLib();
    }

    return (
        <>
            <h1>{MadLib}</h1>

            <Form.Control onChange={e => setNoun(e.target.value)} type="text" placeholder="Noun" />
            <Form.Control onChange={e => setNoun2(e.target.value)} type="text" placeholder="Noun" />
            <Form.Control onChange={e => setVerb(e.target.value)} type="text" placeholder="Verb" />
            <Form.Control onChange={e => setNoun3(e.target.value)} type="text" placeholder="Noun" />
            <Form.Control onChange={e => setAnimal(e.target.value)} type="text" placeholder="Animal" />
            <Form.Control onChange={e => setBodyPart(e.target.value)} type="text" placeholder="Body part" />
            <Form.Control onChange={e => setAdjective(e.target.value)} type="text" placeholder="Adjective" />
            <Form.Control onChange={e => setNoun4(e.target.value)} type="text" placeholder="Noun" />
            <Form.Control onChange={e => setFunnyWord(e.target.value)} type="text" placeholder="Funny Word" />
            <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Name" />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default MadLibs
