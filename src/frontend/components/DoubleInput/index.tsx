import React from 'react';
import BasicInput from '../BasicInput';
import './styles.scss';

type DoubleInputProps = {
  type?: string;
  firstLabel?: string;
  secondLabel?: string;
};

const DoubleInput = ({ type, firstLabel, secondLabel }: DoubleInputProps) => {
  return (
    <div className='DoubleInput'>
      <BasicInput
        type={type}
        label={firstLabel}
        placeholder={`Agregar ${firstLabel}`}
      />
      <hr />
      <BasicInput
        type={type}
        label={secondLabel}
        placeholder={`Agregar ${secondLabel}`}
      />
    </div>
  );
};

export default DoubleInput;
