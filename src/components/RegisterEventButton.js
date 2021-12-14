import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import '../styles/registerEventButton.css';
import Login from './Login'
import RegisterUser from './RegisterUser'
import { useHistory }  from 'react-router-dom'
import { AuthContext } from '../context/Auth';

function RegisterEventButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const history = useHistory();
  const { user } = useContext(AuthContext);

  function handleClick() {
    if(user) return history.push('/events/register');

    setIsModalOpen(true)
  }

  return (
    <main className='main-event-btn'>
      <button className='btn-event' onClick={ handleClick }>Cadastre seu evento</button>
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
