import React from 'react';
import LodgingCard from '../../components/LodgingCard';
import { lodgings } from '../../utils/Lodgins';
import './styles.scss';

const Lodging = () => {
  return (
    <section className='Lodgings'>
      <h4>Lo que dicen los huéspedes sobre los alojamientos en México</h4>
      <p>
        Más de
        {' '}
        <b>6.000.000 evaluaciones de huéspedes,</b>
        {' '}
        con un promedio de
        {' '}
        <b>4.7 de 5 estrellas.</b>
      </p>
      <div className='Lodgings__list'>
        {lodgings.map((item) => (
          <React.Fragment key={item.id}>
            <LodgingCard
              name={item.name}
              avatar={item.avatar}
              country={item.country}
              comment={item.comment}
              houseImg={item.houseImg}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Lodging;
