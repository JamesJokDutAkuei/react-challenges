import Button from './Button'

function ButtonGrid({ onButtonClick }) {
  const buttons = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  return (
    <div className="space-y-3">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="flex space-x-3">
          {row.map((btn, colIndex) => (
            <Button
              key={colIndex}
              value={btn}
              onClick={onButtonClick}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ButtonGrid
