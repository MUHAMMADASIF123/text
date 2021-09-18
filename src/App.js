
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
   <>
<Navbar title="TextUtils"></Navbar>
<TextForm title="enter your text"></TextForm>
{/* <Alert alert="heloo"></Alert> */}
   </>
  );
}

export default App;
