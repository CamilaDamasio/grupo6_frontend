import React, { useState } from 'react';
import { useHistory }  from 'react-router-dom'
import { api } from "../api/api"
import '../styles/eventsRegister.css';

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
      <form className='register-event'>
        <h1 className='title-page-register'>Cadastre seu evento abaixo:</h1>
        <label className='label-name' for="title">Digite o nome do Evento:
          <input className='input-register' type="text" value={ title } placeholder="Digite o nome do Evento"  onChange={ ({ target: { value } }) => setTitle(value)} />
        </label>
        <label className='label-name' for="img">Insira a url da imagem:
          <input className='input-register' type="text" value={ img } placeholder="Insira um caminho url da imagem do evento"  onChange={ ({ target: { value } }) => setImg(value)} />
        </label>
        <label className='label-name' for="city">Digite a cidade:
          <input className='input-register' value={ city } placeholder="Digite a cidade" onChange={ ({ target: { value } }) => setCity(value)}/>
        </label>
        <label className='label-name' for="date">Digite a data do Evento:
          <input className='input-register' value={ date } placeholder="Digite a data do Evento" onChange={ ({ target: { value } }) => setDate(value)}/>
        </label>
        <label className='label-name' for="description">Digite a descrição do Evento:
          <input className='input-register' value={ description } placeholder="Digite a descrição do Evento" onChange={ ({ target: { value } }) => setDescription(value)}/>
        </label>
        <label className='label-name' for="type">Digite a categoria do Evento:
          <input className='input-register' type="text" value={ type } placeholder="Digite a categoria do Evento"  onChange={ ({ target: { value } }) => setType(value)} />
        </label>
        <div className='radios-div'>
          <label>Pago: {' '}
            <input type="radio" name="monetize" value="Pago" onChange={ ({ target: { value } }) => setMonetize(value)} />
            {' '}
          </label><label>Gratuito: {' '}
            <input type="radio" name="monetize" value="Pago" onChange={ ({ target: { value } }) => setMonetize(value)} />
            {' '}
          </label>
        </div>
        <input
        className='protocolo-input'
          value ={protocolPandemic}
          placeholder="Protocolo de enfrentamento ao covid-19"
          onChange={ ({ target: { value } }) => setProtocolPandemic(value)}
        />
      </form>
      <button className='submit-btn' type="submit" onClick={ handleClick }>Cadastrar</button>
    </main>
  )
}

export default EventsRegister;
