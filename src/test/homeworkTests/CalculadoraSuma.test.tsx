//import React from "react"
import { render,fireEvent } from "@testing-library/react"
import SumCalculator from "../../components/CalculadoraSuma"

//describe('SumCalculator',()=>{
  //describe('calcular',()=>{
  //})
//})

test('Suma correctamente',()=>{
  const { getByPlaceholderText, getByText, getByTestId} = render(<SumCalculator />);

  const num1Input = getByPlaceholderText("Num 1:");
  const num2Input = getByPlaceholderText("Num 2:");
  const sumButton = getByText("Sumar");

  fireEvent.change(num1Input, { target: { value: "5" } });
  fireEvent.change(num2Input, { target: { value: "3" } });
  fireEvent.click(sumButton);

  const result = getByTestId("total-result");
  expect(result.textContent).toBe("Tu número es: 8");
})

test('Numeros Negativos',()=>{
  const { getByPlaceholderText, getByText, getByTestId} = render(<SumCalculator />);

  const num1Input = getByPlaceholderText("Num 1:");
  const num2Input = getByPlaceholderText("Num 2:");
  const sumButton = getByText("Sumar");

  fireEvent.change(num1Input, { target: { value: "-5" } });
  fireEvent.change(num2Input, { target: { value: "3" } });
  fireEvent.click(sumButton);

  const result = getByTestId("total-result");
  expect(result.textContent).toBe("Tu número es: -2");
})

test('Empty Cases',()=>{
  const { getByPlaceholderText, getByText, getByTestId} = render(<SumCalculator />);

  const num1Input = getByPlaceholderText("Num 1:");
  const num2Input = getByPlaceholderText("Num 2:");
  const sumButton = getByText("Sumar");

  fireEvent.change(num1Input, { target: { value: "" } });
  fireEvent.change(num2Input, { target: { value: "" } });
  fireEvent.click(sumButton);

  const result = getByTestId("total-result");
  expect(result.textContent).toBe("ERROR: Debe Ingresar un valor en los recuadros para continuar");
})

test('Decimales',()=>{
  const { getByPlaceholderText, getByText, getByTestId} = render(<SumCalculator />);

  const num1Input = getByPlaceholderText("Num 1:");
  const num2Input = getByPlaceholderText("Num 2:");
  const sumButton = getByText("Sumar");

  fireEvent.change(num1Input, { target: { value: "4.5" } });
  fireEvent.change(num2Input, { target: { value: "7.25" } });
  fireEvent.click(sumButton);

  const result = getByTestId("total-result");
  expect(result.textContent).toBe("Tu número es: 11.75");
})

test('e',()=>{
  const { getByPlaceholderText, getByText, getByTestId} = render(<SumCalculator />);

  const num1Input = getByPlaceholderText("Num 1:");
  const num2Input = getByPlaceholderText("Num 2:");
  const sumButton = getByText("Sumar");

  fireEvent.change(num1Input, { target: { value: "e" } });
  fireEvent.change(num2Input, { target: { value: "7.25" } });
  fireEvent.click(sumButton);

  const result = getByTestId("total-result");
  expect(result.textContent).toBe("ERROR: Valores NO VALIDOS");
})