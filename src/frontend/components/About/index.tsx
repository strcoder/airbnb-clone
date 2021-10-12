import React from 'react';
import { IoChatboxOutline } from 'react-icons/io5';
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import './styles.scss';

const About = () => {
  return (
    <section className='About'>
      <hr />
      <div className='About__card'>
        <span><IoChatboxOutline /></span>
        <p><strong>Servicio al cliente las 24 horas, los 7 días de la semana</strong></p>
        <p>De día o de noche, estamos aquí para ayudarte. Habla con nuestro equipo de atención al cliente estés donde estés y a cualquier hora.</p>
      </div>
      <div className='About__card'>
        <span><AiOutlineHome /></span>
        <p><strong>Requisitos internacionales de hospedaje</strong></p>
        <p>Todos los anfitriones deben cumplir con los requisitos de hospedaje y tener una calificación mínima para formar parte de Airbnb.</p>
      </div>
      <div className='About__card'>
        <span><AiOutlineStar /></span>
        <p><strong>Anfitriones estrella</strong></p>
        <p>Disfruta de sábanas recién puestas y escucha sus consejos sobre los mejores lugares para tomar el brunch: nuestros anfitriones son el mejor ejemplo de hospitalidad local.</p>
      </div>
      <hr />
    </section>
  );
};

export default About;
