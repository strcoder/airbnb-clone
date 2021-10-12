import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import './styles.scss';

const Helper = () => {
  return (
    <section className='Helper'>
      <h2>¡Cuando viajas?</h2>
      <p>Agrega fechas para ver la disponibilidad y actualizar los precios</p>
      <Link to='/' className='btn-black'>
        Agregar fechas
      </Link>

      <div className='Breadcrum'>
        <Link to='/' className='btn-link'>
          <span>Airbnb</span>
          <span><HiChevronRight /></span>
        </Link>
        <Link to='/' className='btn-link'>
          <span>Estancias</span>
          <span><HiChevronRight /></span>
        </Link>
        <Link to='/' className='btn-link'>
          Mexico
        </Link>
      </div>
    </section>
  );
};

export default Helper;
