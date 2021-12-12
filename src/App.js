import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SayHelloApp from './components/SayHelloApp';
import AskingQuestion from './components/AskingQuestion';
import GreaterOrLess from './components/GreaterOrLess';
import Magic8Ball from './components/Magic8Ball';
import OddOrEven from './components/OddOrEven';
import ReverseIt from './components/ReverseIt';
import AddTwoNumbers from './components/AddTwoNumbers';
import RestaurantPicker from './components/RestaurantPicker';
import {Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Dashboard />} />

    
    </Routes>

 
</>
  );
}

export default App;
