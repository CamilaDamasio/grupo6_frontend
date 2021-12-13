import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import '../styles/registerEventButton.css';
import Login from './Login'
import RegisterUser from './RegisterUser'
import { useNavigate }  from 'react-router-dom'
import { AuthContext } from '../context/Auth';

function RegisterEventButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  function handleClick() {
    if(user) return navigate('events/register');

    setIsModalOpen(true)
  }

  return (
    <main>
      <button onClick={ handleClick }>Cadastre seu evento</button>
      <Modal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="login-modal"
        ariaHideApp={false}
        overlayClassName="modal-background"
      >
        { login && <Login /> }
        { !login && <RegisterUser /> }
        <button onClick={() => setLogin(!login)}>
          { login ? 'Faça seu cadastro' : 'Voltar' }
        </button>
      </Modal>
    </main>
  )
}

export default RegisterEventButton;
