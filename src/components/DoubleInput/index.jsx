import BasicInput from '../BasicInput';
import './styles.css';

const DoubleInput = ({ type, firstLabel, secondLabel }) => {
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
}

export default DoubleInput;