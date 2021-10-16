import axios from 'axios';
import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

import Modal from '../../components/Modal';
import BasicInput from '../../components/BasicInput';
// import Calculator from '../../components/Calculator';
import './styles.scss';

const Promotion = () => {
  const [openModal, setOpenModal] = useState(false);
  const [rooms, setRooms] = useState();
  const [total, setTotal] = useState(0);
  const [garden, setGarden] = useState();
  const [bathrooms, setBathrooms] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rooms && !bathrooms && !garden) {
      return;
    }
    const { data } = await axios({
      method: 'POST',
      url: '/api/host',
      data: {
        rooms: rooms || 0,
        garden: garden || 0,
        bathrooms: bathrooms || 0,
      },
    });

    setTotal(data.data);
  };

  return (
    <>
      <section className='Promotion'>
        <div className='Promotion__info'>
          <div className='Promotion__info--title'>
            <h2>Anímate a ser anfitrión</h2>
            <button type='button' className='btn-link'>
              <FaQuestion />
            </button>
          </div>
          <p>
            Puedes ganar hasta $13,098 MXN al mes si compartes tu alojamiento en Ciudad de México.
          </p>
          <button
            type='button'
            className='btn'
            onClick={() => setOpenModal(true)}
          >
            Calcular
          </button>
        </div>
        <figure className='Promotion__image'>
          <img src='/house-4.jpg' alt='' />
        </figure>
      </section>
      <Modal
        show={openModal}
        onClose={setOpenModal}
        title='Anímate a ser anfitrión'
      >
        {/* <Calculator /> */}
        <div className='PromotionModal'>
          <p>Calcula el aproximado de tus ganacias llenando el siguiente formulario con los datos de tu vivienda</p>
          <form onSubmit={handleSubmit} className='form-control'>
            <BasicInput
              type='number'
              label='Cuartos'
              defaultValue={rooms}
              setDefaultValue={setRooms}
              placeholder='Cantidad de cuartos'
            />
            <BasicInput
              type='number'
              label='Baños'
              defaultValue={bathrooms}
              setDefaultValue={setBathrooms}
              placeholder='Cantidad de baños'
            />
            <BasicInput
              type='number'
              label='Amenidades'
              defaultValue={garden}
              setDefaultValue={setGarden}
              placeholder='Cuantas amenidades tiene tu casa'
            />
            <button type='submit' className='form-button'>
              Calcular
            </button>
          </form>
          {total > 0 && (
            <p>{`Tu ganancias podrían ser de hasta $${total}`}</p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Promotion;
