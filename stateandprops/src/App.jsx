import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Button has been clicked: {count} times</p>
      <button onClick={()=>{setCount(prev => prev + 1)}}>Click Me</button>
    </>
  )
}

export default App
