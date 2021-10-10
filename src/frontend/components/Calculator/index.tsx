import React, { useState } from 'react';
import { RiDivideFill } from 'react-icons/ri';
import { HiPlusSm, HiMinusSm, HiOutlineX } from 'react-icons/hi';

import BasicInput from '../BasicInput';
import './styles.scss';

const icons = [<HiPlusSm />, <HiMinusSm />, <HiOutlineX />, <RiDivideFill />];

const Calculator = () => {
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);
  const [operations, setOperations] = useState([]);

  const sum = (a: number, b: number) => a + b;
  const subtraction = (a: number, b: number) => a - b;
  const multiplication = (a: number, b: number) => a * b;
  const division = (a: number, b: number) => a / b;

  const addOperation = (e: any) => {
    if (value) {
      values.push(parseFloat(value));
      operations.push(e.target.value);
      setOperations([...operations]);
      setValues([...values]);
      setValue('');
    }
  };

  const addValue = (e: any) => {
    setValue(value + e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleResult();
  };

  const makeOperation = (a: number, b: number, op: string) => {
    switch (op) {
      case '+':
        return sum(a, b);
      case '-':
        return subtraction(a, b);
      case '*':
        return multiplication(a, b);
      case '/':
        return division(a, b);
      default:
        return 0;
    }
  };

  const handleResult = () => {
    if (values.length === 0 && !value) {
      return;
    }
    if (values.length === 0 && value) {
      setValue(value);
      return;
    }
    if (values.length === 1 && !value) {
      setValues([]);
      setOperations([]);
      setValue(values[0]);
      return;
    }
    if (values.length === 1 && value) {
      const aux = makeOperation(values[0], parseFloat(value), operations[0]);
      setValues([]);
      setOperations([]);
      setValue(aux.toString());
      return;
    }
    if (values.length <= 2 && value) {
      let aux = makeOperation(values[0], values[1], operations[0]);
      aux = makeOperation(aux, parseFloat(value), operations[1]);
      setValues([]);
      setOperations([]);
      setValue(aux.toString());
      return;
    }

    let aux = makeOperation(values[0], values[1], operations[0]);
    for (let i = 1; i < operations.length - 1; i++) {
      aux = makeOperation(aux, parseFloat(value[i + 1]), operations[i]);
    }
    if (value) {
      aux = makeOperation(
        aux,
        parseFloat(value),
        operations[operations.length],
      );
    }
    setValues([]);
    setOperations([]);
    setValue(aux.toString());
  };

  return (
    <div className='Calculator'>
      <form action='' className='Calculator__header' onSubmit={handleSubmit}>
        <BasicInput
          type='number'
          label='Numero'
          defaultValue={value}
          setDefaultValue={setValue}
        />
      </form>
      <div className='Calculator__body'>
        <div className='Calculator__operations'>
          {['+', '-', '*', '/'].map((item, index) => (
            <button
              value={item}
              type='button'
              onClick={addOperation}
              className='btn-outline'
              key={`Aperation-${item}`}
            >
              {icons[index]}
            </button>
          ))}
        </div>
        <div className='Calculator__numbers'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
            <button
              value={item}
              type='button'
              onClick={addValue}
              className='btn-white'
              key={`Button-${item}`}
            >
              {item}
            </button>
          ))}
          <button
            type='button'
            onClick={handleResult}
            className='btn btn-result'
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
