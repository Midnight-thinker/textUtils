import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");

    function handleClick(event){
        let textt= text.toUpperCase();
        setText(textt);
         props.showAlert("Changed to Uppercase", "success");
    }

    function handleChange(event){
        setText(event.target.value);
    } 

    function handleLow(){
        let ans=text.toLowerCase();
        setText(ans);
         props.showAlert("Changed to Lowecase", "success");
    }

    function handleClear(){
        setText("");
        props.showAlert("Cleared content", "success");
    }

  
  return (
      <>
    <div style={{color: props.mode ==="dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleChange} style={{backgroundColor: props.mode ==="dark" ? "#042743" : "white" , 
        color:props.mode ==="dark" ? "white" : "black"}} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleClick}>Convert to Uppercase</button>
    <button className='btn btn-primary' onClick={handleLow}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleClear}>Clear text</button>
    </div>

    <div className='container my-3' style={{color: props.mode ==="dark" ? "white" : "black"}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mins needed to read the following text.</p>
    <h2>Preview</h2>
    <p> {text.length>0? text : "Nothing to preview"} </p>
    </div>
    </>
  )
}
