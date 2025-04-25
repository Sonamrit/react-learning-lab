import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        //  console.log("Uppercase was clicked" + text);
         let newText = text.toUpperCase();
         setText(newText)
         props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick =()=>{
      //  console.log("Uppercase was clicked" + text);
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to lowercase","success");
  }
  const handleClearClick =()=>{
    //  console.log("Uppercase was clicked" + text);
     let newText = '';
     setText(newText)
     props.showAlert("The word cleared","success");
}

const handleCopy = () => {
  var text = document.getElementById("exampleFormControlTextarea1");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copyied Successfully","success");
}


const handleExtraSpace =()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Space Removed","success");

}
    const handleOnChange =(event)=>{
        // console.log("On change")
        setText(event.target.value);
   }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1"onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1"onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1"onClick={handleExtraSpace}>Clear Extra Text</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <p>{0.008* text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to previwe it here"}</p>
    </div>
    </>
  )
}

