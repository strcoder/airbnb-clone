import axios from 'axios';
import React, { useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import BasicInput from '../BasicInput';
import Modal from '../Modal';
import './styles.scss';

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
  const [code, setCode] = useState('');
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getDiscount();
    await calcTotal(result);
    setDiscount(result);
  };

  const calcTotal = async (discount: number) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/api/cost',
        data: {
          price,
          quantity,
          discount,
        },
      });
      setTotal(data.data);
    } catch (error) {
      setTotal(price);
    }
  };

  const getDiscount = async () => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/api/discount',
        data: {
          code,
        },
      });
      return data.data;
    } catch (error) {
      return 0;
    }
  };

  return (
    <div className='Reservation'>
      <button
        type='button'
        className='Reservation__image'
        onClick={() => setOpenModal(true)}
      >
        <img src={image} alt='House' />
      </button>
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
          <strong>{`$${price}`}</strong>
          <span>por noche</span>
        </p>
      </div>
      <Modal
        show={openModal}
        onClose={setOpenModal}
        title='Calcular costo de tu estancia'
      >
        <div className='ReservationModal'>
          <p>Calcula los costos de tu estancia seleccionando los dias que planeas quedarte en la recidencia</p>
          <p>{title}</p>
          <form onSubmit={handleSubmit} className='form-control'>
            <BasicInput
              readOnly
              defaultValue={`$${price}`}
              label='Precio x noche'
              placeholder='Precio por noche'
            />
            <BasicInput
              type='number'
              defaultValue={quantity}
              label='Numero de noches'
              setDefaultValue={setQuantity}
              placeholder='Cuantas noche te piensas quedar'
            />
            <BasicInput
              label='Código'
              defaultValue={code}
              setDefaultValue={setCode}
              placeholder='Tienes código promocional'
            />
            <button type='submit' className='form-button'>
              Calcular
            </button>
            {discount > 0 && (
              <p>{`Se aplico un descuento del ${discount}%`}</p>
            )}
          </form>
          <p>
            <span>El costo total de tu estancia es:</span>
            {' '}
            <strong>{`$${total}`}</strong>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ReservationCard;
