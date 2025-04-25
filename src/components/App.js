import React from "react";
import { useState } from 'react';
 import './../styles/App.css';
 
 const App = () => {
   const [name, setName] = useState("");
   return (
     <div>
          <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/>
          <h1>Hello, {name}!</h1>
     </div>
   )
 }
 
 export default App
