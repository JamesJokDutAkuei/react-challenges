import './App.css'
import './index.css'
import Screen from './components/Screen'
import Wrapper from './components/Wrapper'
import ButtonBox from './components/buttonbox'
import Button from './components/button'
function App() {
  
  const btnvalues = [
    ['C', '+-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className='flex items-start justify-center font-bold  w-[440px] h-[650px] bg-amber-100 shadow-[4px_26px_24px_11px_rgba(0,0,0,0.1)] ml-[37%] mt-[13%]'>
      <Wrapper >
        <Screen />
        <ButtonBox>
          {btnvalues.flat().map((btn, i) => (
            <Button value={btn} key={i}/>
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  )
}

export default App