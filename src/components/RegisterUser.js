import React, { useState, useContext } from 'react';
import { useHistory }  from 'react-router-dom'
import { AuthContext } from '../context/Auth';


function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');
  const { createUser } = useContext(AuthContext);

  const history = useHistory();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const patternEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);

    if (!patternEmail) return global.alert('Email inválido');

    if (password !== confirmPassword ) return global.alert('As senhas não combinam');

    if (password.length < 6 ) return global.alert('A senha deve ter pelo menos 6 caracteres');

    try {
      const error = await createUser({ name, email, password });
    
      if (error) return global.alert(error.message);
      
      history.push('events/register');
    } catch (error) {
      return global.alert('Servidor indisponível');
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
          required
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
          required
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
          required
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
          required
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
