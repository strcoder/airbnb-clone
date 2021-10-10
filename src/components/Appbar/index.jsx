import { Link } from 'react-router-dom';

import Icon from '../../assets/icon.png';
import Logo from '../../assets/logo.png';
import './styles.css';

const Appbar = () => {
  return (
    <header className='Appbar'>
      <picture className='Appbar__logo'>
        <source media='(min-width: 768px)' srcSet={Logo} />
        <source srcSet={Icon} />
        <img src={Icon} alt='Airbnb' />
      </picture>
      <nav className='Appbar__nav'>
        <ul className='Appbar__nav--list'>
          <li>
            <Link to='/'>Conviértete en anfitrión</Link>
          </li>
          <li>
            <Link to='/'>Ayuda</Link>
          </li>
          <li>
            <Link to='/'>Regístrate</Link>
          </li>
          <li>
            <Link to='/'>Iniciar sesión</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Appbar;
