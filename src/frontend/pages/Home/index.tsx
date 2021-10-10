import React from 'react';

import Hero from '../../components/Hero';
import Promotion from '../../containers/Promotion';
import './styles.scss';

const Home = () => {
  return (
    <section className='Home'>
      <Hero />
      <Promotion />
    </section>
  );
};

export default Home;
