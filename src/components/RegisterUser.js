import React, { useState } from 'react';
import { useNavigate }  from 'react-router-dom'


function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');

  const navigate = useNavigate();
  
  function handleSubmit(event) {
    event.preventDefault();
    if (password === confirmPassword ) {
      try {
        //POST API /users
        return navigate('events/register');
      } catch (error) {
        return global.alert('Falha ao criar usuário')
      }
    }
  }

  function handleShowPassword(boll) {
    boll ? setShowPassword('text') : setShowPassword('password')
  }

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          className='inputs-login'
          placeholder="Nome"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className='inputs-login'
          placeholder="Email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input
          type={ showPassword }
          id="password"
          name="password"
          className='inputs-login'
          placeholder="Senha"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) } 
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirmar senha</label>
        <input
          type={ showPassword }
          id="confirm-password"
          name="confirm-password"
          className='inputs-login'
          placeholder="Confirmar Senha"
          value={ confirmPassword }
          onChange={ ({ target: { value } }) => setConfirmPassword(value) }
        />
      </div>
      <label htmlFor="reveal-password"> 
        <input 
          type="checkbox" 
          id="reveal-password" 
          onClick={({ target: {checked }}) => handleShowPassword(checked)}
        />
        Mostrar senha 
      </label>
      <button className='submit-button' type="submit">Cadastre-se</button>
    </form>
  )
}

export default RegisterUser;
