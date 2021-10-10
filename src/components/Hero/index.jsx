import { BiSearch } from 'react-icons/bi';

import House from '../../assets/house-3.jpg';
import BasicInput from '../BasicInput';
import DoubleInput from '../DoubleInput';
import './styles.css';

const Hero = () => {
  return (
    <main className='Hero'>
      <form action='' className='Hero__form'>
        <div className='Hero__form--title'>
          <h1>Busca alojamientos en Airbnb</h1>
          <p>
            Descubre alojamientos enteros y habitaciones privadas, perfectos para
            cualquier viaje
          </p>
        </div>
        <BasicInput label='Ubicación' placeholder='Cualquier lugar' />
        <DoubleInput type='date' firstLabel='Llegada' secondLabel='Salida' />
        <DoubleInput type='number' firstLabel='Adultos' secondLabel='Niños' />
        <button type='button' className='form-button'>
          <span><BiSearch /></span>
          <span>Buscar</span>
        </button>
      </form>
      <figure className='Hero__image'>
        <img src={House} alt='House' />
      </figure>
    </main>
  );
};

export default Hero;
