import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}/>

      <h1>Hello, {name}!</h1>
    </>
  )
}

export default App
