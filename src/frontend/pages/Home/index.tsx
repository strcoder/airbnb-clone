import React from 'react';
import About from '../../components/About';

import Hero from '../../components/Hero';
import Lodging from '../../containers/Lodging';
import Promotion from '../../containers/Promotion';
import Reservations from '../../containers/Reservations';
import './styles.scss';

const Home = () => {
  return (
    <section className='Home'>
      <Hero />
      <Promotion />
      <Lodging />
      <About />
      <Reservations />
    </section>
  );
};

export default Home;
