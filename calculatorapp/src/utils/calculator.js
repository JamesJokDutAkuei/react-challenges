// Calculator utility functions

export const calculate = (firstValue, secondValue, operation) => {
  switch (operation) {
    case '+': return firstValue + secondValue
    case '-': return firstValue - secondValue
    case '*': return firstValue * secondValue
    case '/': return firstValue / secondValue
    case '=': return secondValue
    default: return secondValue
  }
}

export const formatDisplay = (value) => {
  const str = String(value)
  if (str.length > 9) {
    // If it's a decimal number, show fewer decimal places
    if (str.includes('.')) {
      const [integer, decimal] = str.split('.')
      if (integer.length > 9) {
        return parseFloat(value).toExponential(2)
      }
      const availableDecimals = 9 - integer.length - 1
      return availableDecimals > 0 ? parseFloat(value).toFixed(availableDecimals) : integer
    }
    // For large integers, use scientific notation
    return parseFloat(value).toExponential(2)
  }
  return str
}
