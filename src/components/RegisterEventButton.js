import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/registerEventButton.css';


function RegisterEventButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <button onClick={ () => setIsModalOpen(true)}>Cadastre seu evento</button>
      <Modal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="login-modal"
        ariaHideApp={false}
        overlayClassName="modal-background"
      >
        Modal
      </Modal>
    </main>
  )
}

export default RegisterEventButton;
