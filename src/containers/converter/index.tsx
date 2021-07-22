import React, { useState } from 'react'
import { ConverterView } from '../../views/converter'

const ConverterContainer: React.FC = () => {
  const [valueToConverte, setValueToConverte] = useState(0)
  const [converterResult, setConverterResult] = useState(0)
  const handleConverter = (type: string) => {
    let newValue = 0
    if (type === 'dotz') {
      newValue = valueToConverte * 10
    } else {
      newValue = (valueToConverte / 10)
    }

    setConverterResult(newValue)
  }

  return (
    <ConverterView
      handleConverter={handleConverter}
      converterResult={converterResult}
      valueToConverte={valueToConverte}
      setValueToConverte={setValueToConverte}
    />
  )
}

export { ConverterContainer }
