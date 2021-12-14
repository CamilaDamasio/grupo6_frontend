import React, { useState } from 'react';
import { useHistory }  from 'react-router-dom'
import { Header } from '../components';
import { api } from "../api/api"

function EventsRegister() {
  const [monetize, setMonetize] = useState('');
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [protocolPandemic, setProtocolPandemic] = useState('');
  
  const history = useHistory();
  
  async function handleClick(e) {
    e.preventDefault();

    if (!title) return global.alert('O nome do Evento é Obrigatório');

    if (!date || !city ) return global.alert('É necessário preencher os dados de data e/ou cidade do evento');

    if (!monetize) return global.alert('Informe se é um evento público ou pago');

    try {
      await api.post('event', { img, title, description, date, city, type, protocolPandemic });
    
      return history.push('/');
    } catch (error) {
      console.log(error.response.data.message)
      return global.alert('Falha ao criar evento')
    }
  }
  
  return (
    <main>
      <Header />
      <form>
        <input type="text" value={ title } placeholder="Digite o nome do Evento"  onChange={ ({ target: { value } }) => setTitle(value)} />
        <input type="text" value={ img } placeholder="Insira um caminho url da imagem do evento"  onChange={ ({ target: { value } }) => setImg(value)} />
        <input value={ city } placeholder="Digite a cidade" onChange={ ({ target: { value } }) => setCity(value)}/>
        <input value={ date } placeholder="Digite a data do Evento" onChange={ ({ target: { value } }) => setDate(value)}/>
        <input value={ description } placeholder="Digite a descrição do Evento" onChange={ ({ target: { value } }) => setDescription(value)}/>
        <input type="text" value={ type } placeholder="Digite a categoria do Evento"  onChange={ ({ target: { value } }) => setType(value)} />
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
          onChange={ ({ target: { value } }) => setProtocolPandemic(value)}
        />
      </form>
      <button type="submit" onClick={ handleClick }>Cadastrar</button>
    </main>
  )
}

export default EventsRegister;
