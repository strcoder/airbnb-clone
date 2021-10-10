import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

import Modal from '../../components/Modal';
import Calculator from '../../components/Calculator';
import './styles.scss';

const Promotion = () => {
  const [openModal, setOpenModal] = useState(false);

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
        title='Calculadora'
        onClose={setOpenModal}
      >
        <Calculator />
      </Modal>
    </>
  );
};

export default Promotion;
