import React, { useContext, useState } from 'react';
import { useHistory }  from 'react-router-dom'
import { AuthContext } from '../context/Auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');
  const { signIn } = useContext(AuthContext);


  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const error = await signIn({ email, password });

      if (error) return global.alert(error.message);

      history.push('events/register');
    } catch (error) {
      return global.alert('Servidor indisponível')
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
          className="inputs-login"
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
          className="inputs-login"
          placeholder="Senha"
          required
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
      <button type="submit" className="submit-button">Entrar</button>
    </form>
  )
}

export default Login;
