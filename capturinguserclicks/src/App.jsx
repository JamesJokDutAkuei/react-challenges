import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function captureClick(){
    alert("Clicked!");
  }

  return (
    <>
     <button onClick={captureClick}>Click Me</button>
    </>
  )
}

export default App
