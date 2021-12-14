import React, { useContext, useState } from 'react';
import { useNavigate }  from 'react-router-dom'
import { Header } from '../components';
import { AuthContext } from '../context/Auth';


function EventsRegister() {
  const { createEvent } = useContext(AuthContext);
  const [monetize, setMonetize] = useState('');
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [protocolPandemic, setProtocolPandemic] = useState('');
  
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
      <div>
        <form>
          <label for="title">Digite o nome do Evento:
            <input type="text" value={ title } placeholder="Digite o nome do Evento"  onChange={ ({ target: { value } }) => setTitle(value)} />
          </label>
          <label for="img">Insira um caminho url da imagem do evento:
            <input type="text" value={ img } placeholder="Insira um caminho url da imagem do evento"  onChange={ ({ target: { value } }) => setImg(value)} />
          </label>
          <label for="city">Digite a cidade:
            <input value={ city } placeholder="Digite a cidade" onChange={ ({ target: { value } }) => setCity(value)}/>
          </label>
          <label for="date">Digite a data do Evento:
            <input value={ date } placeholder="Digite a data do Evento" onChange={ ({ target: { value } }) => setDate(value)}/>
          </label>
          <label for="description">Digite a descrição do Evento:
            <input value={ description } placeholder="Digite a descrição do Evento" onChange={ ({ target: { value } }) => setDescription(value)}/>
          </label>
          <label for="type">Digite a categoria do Evento:
            <input type="text" value={ type } placeholder="Digite a categoria do Evento"  onChange={ ({ target: { value } }) => setType(value)} />
          </label>
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
          <label for="protocolPandemic">Digite qual protocolo de enfrentamento ao covid-19 o Evento adotará:
            <input
              value ={protocolPandemic}
              placeholder="Digite qual protocolo de enfrentamento ao covid-19 o Evento adotará"
              onChange={ ({ target: { value } }) => setProtocolPandemic(value)}
            />
          </label>
          </form>
        <button type="submit" onClick={ handleClick }>Cadastrar</button>
      </div>
    </main>
  )
}

export default EventsRegister;
