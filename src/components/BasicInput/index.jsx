import { useState } from 'react';
import './styles.css';

const BasicInput = ({ inputRef, type, label, placeholder, defaultValue, setDefaultValue }) => {
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
        onChange={(e) => setDefaultValue ? setDefaultValue(e.target.value) : () => {}}
      />
    </label>
  );
}

export default BasicInput;