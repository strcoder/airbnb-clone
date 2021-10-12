import React from 'react';
import { AiFillStar } from 'react-icons/ai';

type LodgingCardProps = {
  name: string;
  avatar: string;
  country: string;
  comment: string;
  houseImg: string;
}

const LodgingCard = ({ name, country, houseImg, avatar, comment }: LodgingCardProps) => {
  return (
    <div className='Lodging'>
      <figure className='Lodging__image'>
        <img src={houseImg} alt='House' />
      </figure>
      <div className='Lodging__header'>
        {[1, 2, 3, 4, 5].map((item) => (
          <span key={`Stars-${item}`}>
            <AiFillStar />
          </span>
        ))}
      </div>
      <div className='Lodging__body'>
        <p>
          &quot;
          {comment}
          &quot;
        </p>
      </div>
      <div className='Lodging__footer'>
        <figure className='Lodging__footer--avatar'>
          <img src={avatar} alt='avatar' />
        </figure>
        <p>
          <strong>{name}</strong>
        </p>
        <span>{country}</span>
      </div>
    </div>
  );
};

export default LodgingCard;
