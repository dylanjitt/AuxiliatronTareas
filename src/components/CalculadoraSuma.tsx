import { useState } from "react";

function SumCalculator() {

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  //const [total, setTotal] = useState(0)
  const [result, setResult] = useState('')

  const calcular = () => {

    const numericPattern = /^$|^(?:[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)$/;

    if (!numericPattern.test(num1) || !numericPattern.test(num2)) {
      setResult("ERROR: Valores NO VALIDOS")
    } else if (num1 !== '' && num2 !== '') {
      const n1 = parseFloat(num1)
      const n2 = parseFloat(num2)
      //setTotal(n1 + n2)
      setResult("Tu número es: " + (n1 + n2))
    } else  {
      setResult("ERROR: Debe Ingresar un valor en los recuadros para continuar")
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 250, alignItems: 'center' }}>
      <h1 style={{ fontSize: 32, margin: 50, fontWeight: 'bold' }}>Calculadora de Suma!</h1>
      <input
        type="number"
        style={{ width: 100, height: 50, margin: 50, padding: 10, borderWidth: 1, borderColor: '#000' }}
        placeholder="Num 1:"
        onChange={(e: any) => setNum1(e.target.value)} />

      <input
        type="number"
        style={{ width: 100, height: 50, margin: 50, padding: 10, borderWidth: 1, borderColor: '#000' }}
        placeholder="Num 2:"
        onChange={(e: any) => setNum2(e.target.value)} />

      <button
        onClick={calcular}
        style={{ padding: 10, backgroundColor: 'blue', color: '#fff' }}
      >Sumar</button>

      <h1 style={{ fontSize: 32, margin: 50, fontWeight: 'bold' }} data-testid="total-result">{result}</h1>

    </div>

  )
}

export default SumCalculator