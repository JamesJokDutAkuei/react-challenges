import './App.css'
import {useState, useEffect} from 'react'

function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [windowHeight, setwindowHeight] = useState(window.innerHeight);

  function size(){
    setwindowWidth(window.innerWidth);
    setwindowHeight(window.innerHeight);
  }

  useEffect(()=> {
    window.addEventListener('resize', size);
    return () => window.removeEventListener('resize', size);
  }, []);
  
  return (
    <div id='box'>
      <h1 className='windowsize'>{ windowWidth }</h1>
      <h1 className='windowsize'>{ windowHeight }</h1>
    </div>
  )
}

export default App
