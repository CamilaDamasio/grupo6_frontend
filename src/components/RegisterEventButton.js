import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/registerEventButton.css';
import Login from './Login'
import RegisterUser from './RegisterUser'

function RegisterEventButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setLogin] = useState(true);

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
        { login && <Login /> }
        { !login && <RegisterUser /> }
        <button className='register-btn' onClick={() => setLogin(!login)}>
          { login ? 'Faça seu cadastro' : 'Voltar' }
        </button>
      </Modal>
    </main>
  )
}

export default RegisterEventButton;
