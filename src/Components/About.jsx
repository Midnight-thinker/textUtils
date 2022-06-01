import React, { useState } from 'react'

export default function About(props) {
    const [btn , setBtn]=useState("Enable Dark mode")
    const [mystyle, setMyStyle ]=useState({
        color: "black",
        backgroundColor: "white"
    });

    function handleClick(){
        if(mystyle.color==="black"){
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            });
            setBtn("Enable Light Mode");
        }
        else{
                setMyStyle({
                    color: "black",
                    backgroundColor: "white"
                });
                setBtn("Enable Dark Mode"); 
        }
    }
  return (
    <div className='container' style={{color: props.mode ==="dark" ? "white" : "black"}}>
    <h2 className='my-3'>About Us</h2>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item" style={{color: props.mode ==="dark" ? "white" : "black"}}>
    <h2 class="accordion-header" id="headingOne" style={mystyle}>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" style={{backgroundColor: props.mode ==="dark" ? "#162234" : "white",color: props.mode ==="dark" ? "white" : "black"}} aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={mystyle}>
      <div class="accordion-body" style={{backgroundColor: props.mode ==="dark" ? "#162234" : "white",color: props.mode ==="dark" ? "white" : "black"}}>
        You can analyze your text and manipulate it from Uppercase to Lowecase , Lowecase to Uppercase.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor: props.mode ==="dark" ? "#042743" : "white",color: props.mode ==="dark" ? "white" : "black"}}>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{backgroundColor: props.mode ==="dark" ? "#162234" : "white",color: props.mode ==="dark" ? "white" : "black"}} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Count number of characters
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode ==="dark" ? "#162234" : "white"}}>
      <div class="accordion-body">
        Count number of words and even characters of ur sentance .
      </div>
    </div>
  </div>
  <div class="accordion-item"  style={{backgroundColor: props.mode ==="dark" ? "#042743" : "white",color: props.mode ==="dark" ? "white" : "black"}}>
    <h2 class="accordion-header" id="headingThree" >
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={{backgroundColor: props.mode ==="dark" ? "#162234" : "white",color: props.mode ==="dark" ? "white" : "black"}} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Know ur time to read a text 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode ==="dark" ? "#162234" : "white"}}>
      <div class="accordion-body">
        It will evaluate time to read a specific amount of text .
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}
