function Button({ value, onClick }) {
  const isOperator = ['+', '-', 'x', '/', '='].includes(value)
  const isFunction = ['AC', '+/-', '%'].includes(value)
  const isZero = value === '0'

  return (
    <button
      onClick={() => onClick(value)}
      className={`
        h-20 rounded-full text-2xl font-normal transition-all active:scale-95
        ${isZero ? 'flex-grow text-left pl-8' : 'w-20'}
        ${isOperator ? 'bg-orange-500 text-white hover:bg-orange-400' : ''}
        ${isFunction ? 'bg-gray-400 text-black hover:bg-gray-300' : ''}
        ${!isOperator && !isFunction ? 'bg-gray-600 text-white hover:bg-gray-500' : ''}
        flex items-center justify-center
      `}
    >
      {value}
    </button>
  )
}

export default Button