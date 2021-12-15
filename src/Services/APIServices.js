import React from "react";

////////////Say Hello
const handleSayHello = async (props) => {
  let enteredName = "";
  await fetch("https://cwallforoneapi.azurewebsites.net/SayHello", {
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
    
    await fetch("https://cwallforoneapi.azurewebsites.net/AskingQuestions", {
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
     await fetch("https://cwallforoneapi.azurewebsites.net/GreaterOrLess", {
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

    await fetch("https://cwallforoneapi.azurewebsites.net/OddEven", {
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
    await fetch("https://cwallforoneapi.azurewebsites.net/Magic8Ball", {
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
    await fetch ("https://cwallforoneapi.azurewebsites.net/ReverseIt", {
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

    await fetch("https://cwallforoneapi.azurewebsites.net/twonumbers", {
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

    await fetch("https://cwallforoneapi.azurewebsites.net/restaurantpicker", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        }
    }) .then(resp => resp.text()).then(data => results = data);
    return results;
}

const handleCategoryPicker = async (props) => {
    let results = "";
    console.log(props.category);
    await fetch("https://cwallforoneapi.azurewebsites.net/restaurantpicker/selection", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            category: props.category
        }),
    }) .then(resp => resp.text()).then(data => results = data);
    return results;

}

///Madlibs
const handleMadlibs = async (props) => {
    let results = "";

    await fetch("http://localhost:5038/madlib", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "noun" : props.noun,
            "noun2" : props.noun2,
            "verb" : props.verb,
            "noun3" : props.noun3,
            "animal" : props.animal,
            "bodypart" : props.bodyPart,
            "adjective" : props.adjective,
            "noun4" : props.noun4,
            "funnyword" : props.funnyWord,
            "name" : props.name 
        }),
    }) .then(resp => resp.text()) .then(data => results = data)
    return results;
}


export { handleSayHello, handleAskingQuestions, handleGreaterOrLess, handleMagic8Ball, handleOddEven, handleReverseIt, handleAddTwoNumbers, handleRestaurantPicker, handleMadlibs, handleCategoryPicker };
