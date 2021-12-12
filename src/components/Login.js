import React, { useState } from 'react';
import { useNavigate }  from 'react-router-dom'
// import api from '../api/api'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');


  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      // const token = await api.post('/login', { email, password });
      const token = 'aaaa';
      if (token) {
        localStorage.setItem('hackaton:token', token);
        navigate('events/register');
      }
      // return global.alert('Usuário não encontrado')
    } catch (error) {
      return global.alert('Falha ao logar')
    }
  }

  function handleShowPassword(boll) {
    boll ? setShowPassword('text') : setShowPassword('password')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
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
          placeholder="Senha"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) } 
        />
      </div>
      <label htmlFor="reveal-password"> 
        <input 
          type="checkbox" 
          id="reveal-password" 
          name="reveal-password" 
          onClick={({ target: {checked }}) => handleShowPassword(checked)}
        />
        Mostrar senha 
      </label>
      <button type="submit">Entrar</button>
    </form>
  )
}

export default Login;
