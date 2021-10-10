import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './styles.css';

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <section className='Modal'>
      <button
        type='button'
        onClick={handleCloseClick}
        className='Modal__close'
      >
        Cerrar
      </button>
      <div className='ModalWrap'>
        <div className='ModalWrap__header'>
          {title && (
            <p className='single-line'><strong>{title}</strong></p>
          )}
          <button
            type='button'
            onClick={handleCloseClick}
            title='Cerrar ventana'
            className='btn-link-danger'
          >
            <FaTimes size={20} />
          </button>
        </div>
        <main className='ModalWrap__main'>
          {children}
        </main>
      </div>
    </section>
  ) : null;

  if (isBrowser && !document.getElementById('modal')) {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
    const el = document.createElement('div');
    modalRoot.appendChild(el);

    return ReactDOM.createPortal(
      modalContent,
      el,
    );
  }

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal'),
    );
  }
  return null;
};

export default Modal;
