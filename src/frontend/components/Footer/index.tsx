import React from 'react';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './styles.scss';

const Footer = () => {
  return (
    <section className='Footer'>
      <hr />
      <p>© 2021 Airbnb, Inc. All rights reserved</p>
      <nav className='Footer__links'>
        <ul>
          <li>
            <Link to='/'>
              <span><BsDot /></span>
              <span>Privacidad</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span><BsDot /></span>
              <span>Condiciones</span>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <span><BsDot /></span>
              <span>Mapa del sitio</span>
            </Link>
          </li>
        </ul>
      </nav>

      <nav className='Footer__socialMedia'>
        <ul>
          <li>
            <Link to='/' className='btn-link'>
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to='/' className='btn-link'>
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link to='/' className='btn-link'>
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Footer;
