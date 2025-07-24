import './index.css'
import Display from './components/Display'
import ButtonGrid from './components/ButtonGrid'
import { useCalculator } from './hooks/useCalculator'

function App() {
  const { display, handleButtonClick } = useCalculator()

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-black p-5 w-80 border-2 border-gray-700 rounded-2xl">
        <Display value={display} />
        <ButtonGrid onButtonClick={handleButtonClick} />
      </div>
    </div>
  )
}

export default App