import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

type ReservationCardProps = {
  users: number;
  score: string;
  price: string;
  image: string;
  title: string;
  description: string;
};

const ReservationCard = ({
  users,
  score,
  price,
  image,
  title,
  description,
}: ReservationCardProps) => {
  return (
    <div className='Reservation'>
      <figure className='Reservation__image'>
        <img src={image} alt='House' />
      </figure>
      <div className='Reservation__info'>
        <p>{`Alojamiento entero: ${title}`}</p>
        <div className='Reservation__info--score'>
          <span>
            <AiTwotoneStar />
          </span>
          <small>{score}</small>
          <small>{`(${users})`}</small>
        </div>
      </div>
      <div className='Reservation__details'>
        <p>{description}</p>
        <p>
          <strong>{price}</strong>
          <span>por noche</span>
        </p>
      </div>
    </div>
  );
};

export default ReservationCard;
