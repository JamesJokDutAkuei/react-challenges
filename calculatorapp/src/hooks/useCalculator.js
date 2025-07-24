import { useState } from 'react'
import { calculate } from '../utils/calculator'

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const handleButtonClick = (value) => {
    if (value >= '0' && value <= '9') {
      inputNumber(value)
    } else if (value === '+' || value === '-' || value === 'x' || value === '/') {
      const op = value === 'x' ? '*' : value
      inputOperation(op)
    } else if (value === '=') {
      performCalculation()
    } else if (value === 'AC') {
      clear()
    } else if (value === '.') {
      if (display.indexOf('.') === -1) {
        inputNumber('.')
      }
    }
  }

  return {
    display,
    handleButtonClick
  }
}
