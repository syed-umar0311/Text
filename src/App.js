

import { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About'

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode , setmode] = useState('dark');
  const [alert , setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert(" dark mode enable","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" light mode enable","success");
    }
    
  }
  
  return (
    <>
    <BrowserRouter>
   <Navbar title = "texttutils" mode={mode} toggleMode = {toggleMode}/>
   <Alert alert = {alert} />
   <div className="container my-3">
    <Routes>
   
 
      
      <Route path="/" element={<TextForm showAlert={showAlert} toggleMode = {toggleMode} heading = "   TEXT   "/>
      
}/>
 <Route path="/About" element={<About/>}/>

      
   
      
      </Routes>
      </div>   
      </BrowserRouter>
 
  

   </> 
  );

  }
export default App;
