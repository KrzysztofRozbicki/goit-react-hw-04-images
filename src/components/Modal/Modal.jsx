import { useEffect } from 'react';

import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, closeModal }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal]);

  return (
    <>
      <div className="Overlay" onClick={closeModal}></div>
      <div className="Modal">
        <img src={largeImageURL} />
        {/* <button onClick={closeModal} className="ModalCloseButton">
          Close dialog
        </button> */}
      </div>
    </>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
