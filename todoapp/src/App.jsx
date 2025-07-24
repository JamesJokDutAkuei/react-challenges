import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 min-h-96">
        <h1 className="text-6xl font-thin text-gray-300 text-center mb-8 lowercase">todos</h1>
        
        <div className="flex border border-gray-200 rounded-md overflow-hidden mb-8">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add todo..."
            className="flex-1 px-6 py-4 text-lg outline-none placeholder-gray-300 placeholder-italic"
          />
          <button 
            onClick={addTodo} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-2xl transition-colors"
          >
            +
          </button>
        </div>

        <div className="space-y-0">
          {todos.map(todo => (
            <div key={todo.id} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="w-5 h-5 cursor-pointer"
              />
              <span className={`flex-1 text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {todo.text}
              </span>
              <button 
                onClick={() => deleteTodo(todo.id)} 
                className="p-2 hover:bg-gray-100 rounded transition-colors text-xl"
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
