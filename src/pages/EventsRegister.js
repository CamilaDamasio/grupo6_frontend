import React, { useContext, useState } from 'react';
import { useNavigate }  from 'react-router-dom'
import { Header } from '../components';
import { AuthContext } from '../context/Auth';


function EventsRegister() {
  const { event, setEvent, createEvent } = useContext(AuthContext);
  const { img, title, description, date, city, type, protocolPandemic } = event;
  const [monetize, setMonetize] = useState('');
  
  const navigate = useNavigate();
  
  async function handleClick(e) {
    e.preventDefault();

    if (!title) return global.alert('O nome do Evento é Obrigatório');

    if (!date || !city ) return global.alert('É necessário preencher os dados de data e/ou cidade do evento');

    if (!monetize) return global.alert('Informe se é um evento público ou pago');

    try {
      const error = await createEvent({ img, title, description, date, city, type, protocolPandemic });
    
      if (error) return global.alert(JSON.stringify(error));
      
      return navigate ('/events');
    } catch (error) {
      return global.alert('Falha ao criar usuário')
    }
  }
  
  return (
    <main>
      <Header />
      <form>
        <input type="text" value={ title } placeholder="Digite o nome do Evento"  onChange={ ({ target: { value } }) => setEvent(value)} />
        <input type="text" value={ img } placeholder="Insira um caminho url da imagem do evento"  onChange={ ({ target: { value } }) => setEvent(value)} />
        <input value={ city } placeholder="Digite a cidade" onChange={ ({ target: { value } }) => setEvent(value)}/>
        <input value={ date } placeholder="Digite a data do Evento" onChange={ ({ target: { value } }) => setEvent(value)}/>
        <input value={ description } placeholder="Digite a descrição do Evento" onChange={ ({ target: { value } }) => setEvent(value)}/>
        <input type="text" value={ type } placeholder="Digite a categoria do Evento"  onChange={ ({ target: { value } }) => setEvent(value)} />
        <div>
          <label>Pago: {' '}
            <input type="radio" name="monetize" value="Pago" onChange={ ({ target: { value } }) => setMonetize(value)} />
            {' '}
          </label>
          <label>Gratuito: {' '}
            <input type="radio" name="monetize" value="Gratuito" onChange={ ({ target: { value } }) => setMonetize(value)} />
            {' '}
          </label>
        </div>
        <input
          value ={protocolPandemic}
          placeholder="Digite qual protocolo de enfrentamento ao covid-19 o Evento adotará"
          onChange={ ({ target: { value } }) => setEvent(value)}
        />
      </form>
      <button type="submit" onClick={ handleClick }>Cadastrar</button>
    </main>
  )
}

export default EventsRegister;
