import React, { useState } from 'react';
import './styles.scss';

type BasicInputProps = {
  type?: string;
  label?: string;
  inputRef?: any;
  defaultValue?: any;
  placeholder?: string;
  setDefaultValue?: any;
};

const BasicInput = ({
  type,
  label,
  inputRef,
  placeholder,
  defaultValue,
  setDefaultValue,
}: BasicInputProps) => {
  const [active, setActive] = useState('');

  return (
    <label htmlFor='' className={`BasicInput ${active}`}>
      <p>{label}</p>
      <input
        ref={inputRef}
        value={defaultValue}
        type={type || 'text'}
        placeholder={placeholder}
        onBlur={() => setActive('')}
        onFocus={() => setActive('active')}
        onChange={(e) => (setDefaultValue ? setDefaultValue(e.target.value) : () => {})}
      />
    </label>
  );
};

export default BasicInput;
