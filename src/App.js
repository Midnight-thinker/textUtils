import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode , setMode]=useState("black");
  const [alert , setAlert]=useState(null);

  function showAlert(message,type){
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function togggleMode(){
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Enable to dark mode","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Enable to light mode","success");
    }
  }
  return(
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={togggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element={ <About mode={mode} />} />
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here!" mode={mode} />} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;
