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
import MadLibs from './components/MadLibs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Main-Menu" element={<Dashboard />} />
      <Route path="/Say-Hello" element={<SayHelloApp />} />
      <Route path="/Asking-Questions" element={<AskingQuestion/>} />
      <Route path="/Greater-Less" element={<GreaterOrLess />} />
      <Route path="/Magic-8-Ball" element={<Magic8Ball />} />
      <Route path="/Odd-Even" element={<OddOrEven/>} />
      <Route path="/Reverse-It" element={<ReverseIt/>} />
      <Route path="/Add-2-Numbers" element={<AddTwoNumbers />} />
      <Route path="/MadLibs" element={<MadLibs />} />
      <Route path="/Restaurant-Picker" element={<RestaurantPicker />} />

    </Routes>

 
</>
  );
}

export default App;
