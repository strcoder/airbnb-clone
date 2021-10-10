import { useEffect, useState } from 'react';
import { RiDivideFill } from 'react-icons/ri';
import { HiPlusSm, HiMinusSm, HiOutlineX } from 'react-icons/hi';

import BasicInput from '../BasicInput';
import useFocus from '../../hooks/useFocus';
import './styles.css';

const icons = [
  <HiPlusSm />,
  <HiMinusSm />,
  <HiOutlineX />,
  <RiDivideFill />
]

const Calculator = () => {
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);
  const [inputRef, setInputFocus] = useFocus([])
  const [operations, setOperations] = useState([]);

  const sum = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const division = (a, b) => a / b;

  useEffect(() => {
    setInputFocus();
  });

  const addOperation = (e) => {
    if (value) {
      values.push(parseFloat(value));
      operations.push(e.target.value);
      setOperations([...operations]);
      setValues([...values]);
      setValue('');
    }
  }

  const addValue = (e) => {
    setValue(value + e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResult();
  }

  const makeOperation = (a, b, op) => {
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
  }

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
      const aux = makeOperation(
        values[0],
        parseFloat(value),
        operations[0]
      );
      setValues([]);
      setValue(aux);
      setOperations([]);
      return;
    }
    if (values.length <= 2 && value) {
      let aux = makeOperation(
        values[0],
        values[1],
        operations[0]
      );
      aux = makeOperation(aux, parseFloat(value), operations[1]);
      setValues([]);
      setValue(aux);
      setOperations([]);
      return;
    }

    let aux = makeOperation(
      values[0], 10,
      values[1], 10,
      operations[0]
    );
    for (let i = 1; i < operations.length - 1; i++) {
      aux = makeOperation(aux, value[i + 1], operations[i]);
    }
    if (value) {
      aux = makeOperation(aux, parseFloat(value), operations[operations.length]);
    }
    setValues([]);
    setValue(aux);
    setOperations([]);
  }

  return (
    <div className='Calculator'>
      <form action='' className='Calculator__header' onSubmit={handleSubmit}>
        <BasicInput
          type='number'
          label='Numero'
          inputRef={inputRef}
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
}

export default Calculator;