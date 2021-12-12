import React from "react";

////////////Say Hello
const handleSayHello = async (props) => {
  let enteredName = "";
  await fetch("http://localhost:5038/SayHello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "name": props.Name, //for input field
    }),
  }).then(resp => resp.text()).then(data => enteredName = data);
  return enteredName;
};

///////////////Asking Questions
const handleAskingQuestions = async (props) => {
    let questionsData = "";
    
    await fetch("http://localhost:5038/AskingQuestions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name" : props.Name,
            "time" : props.Time
        }),
    }) .then(resp => resp.text()).then(data => questionsData = data);
   
    return questionsData; 
}

//////////Greater or Less
const handleGreaterOrLess = async (props) => {
    let answer = "";
     await fetch("http://localhost:5038/GreaterOrLess", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify({
             "num": props.Number
         }),
     }) .then(resp => resp.text()).then(data => answer = data);

     return answer;
}

//////////Odd or Even

const handleOddEven = async (props) => {
    let answer = "";

    await fetch("http://localhost:5038/OddEven", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "num": props.Number
        }),
    }) .then(resp => resp.text()).then(data => answer = data);
    return answer;
}

////////Magic 8 Ball
const handleMagic8Ball = async (props) => {
    let answer = "";
    await fetch("http://localhost:5038/Magic8Ball", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

    }) .then(resp => resp.text()).then(data => answer = data);
    return answer;
}

//////////Reverse it
const handleReverseIt = async (props) => {
    let reversedString = "";
    await fetch ("http://localhost:5038/ReverseIt", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
           "enteredString": props.EnteredString 
        }),
    }) .then(resp => resp.text()).then(data => reversedString = data);
    return reversedString;
}

///Adding two numbers
const handleAddTwoNumbers = async (props) => {
    let results = "";

    await fetch("http://localhost:5038/twonumbers", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "num1" : props.Number1,
            "num2": props.Number2
        }),
    }) .then(resp => resp.text()).then(data => results = data);
    return results;
}

///Restaurant Picker
const handleRestaurantPicker = async (props) => {
    let results = "";

    await fetch("http://localhost:5038/RestaurantPicker", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        }
    }) .then(resp => resp.text()).then(data => results = data);
    return results;
}



export { handleSayHello, handleAskingQuestions, handleGreaterOrLess, handleMagic8Ball, handleOddEven, handleReverseIt, handleAddTwoNumbers, handleRestaurantPicker };
