import React from 'react';
import { Link } from 'react-router-dom';
import ReservationCard from '../../components/ReservationCard';
import { reservations } from '../../utils/Reservations';
import './styles.scss';

const Reservations = () => {
  return (
    <section className='Reservations'>
      <h2>Recién reservado en México</h2>
      <div className='Reservations__container'>
        {reservations.map((item) => (
          <React.Fragment key={item.id}>
            <ReservationCard
              users={item.users}
              score={item.score}
              price={item.price}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </React.Fragment>
        ))}
      </div>
      <Link to='/' className='btn-outline-black'>
        Mostrar (más de 2000)
      </Link>
    </section>
  );
};

export default Reservations;
