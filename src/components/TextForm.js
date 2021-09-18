import { useState } from "react";
//import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("your text");
  const upperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const lowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const clear = () => {
    let newtext = '';
    setText(newtext);
  }
  // function copyText() {
  //   /* Get the text field */
  //   // var copyText = document.getElementById("myInput");
  
  //   /* Select the text field */
  //   let t=Select(text);
  //   t.setSelectionRange(0, 99999); 
  //   navigator.clipboard.writeText(t.value);
  
  // }
  const removeExtraSpace = () => {
    // let newtext = text.replace('');
    // let newtext=text.replace(/\s{2,}/g, '').trim();
    let newtext= text.replace(/ +/g, ' ');
    setText(newtext);
  }
  

  return (
    <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.title}</h1>
        <textarea
          className="form-control"
          value={text}
          id="mybox" onChange={handleChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={upperCase}>
          Convert UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>
          Convert LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>
          RemoveExtraSpapaces
        </button>
        {/* <button className="btn btn-primary mx-2" onClick={copyText}>
          copy
        </button> */}
      </div>
    </div>

    <div className="container">
<p>{text.split(" ").length} words and {text.length}characters</p>
    </div>
    </>
  );
}
