import './App.css'
import Display from './Display'

function App() {

  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    },
    {
      id: 3,
      setup: "Who is your hero",
      punchline: "My dad is a hero to me and I know"
    }
  ];

  return (
    <div className='box'>
      <Display 
        jokes={ jokes }
      />
    </div>
  )
}

export default App
