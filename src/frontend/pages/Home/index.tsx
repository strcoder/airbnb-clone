import React from 'react';

import Hero from '../../components/Hero';
import Lodging from '../../containers/Lodging';
import Promotion from '../../containers/Promotion';
import './styles.scss';

const Home = () => {
  return (
    <section className='Home'>
      <Hero />
      <Promotion />
      <Lodging />
    </section>
  );
};

export default Home;
