import React, { useContext } from 'react';
import { Header } from '../components';
import { AuthContext } from '../context/Auth';

function EventsRegister() {
  const { event, setEvent } = useContext(AuthContext);
  const { img, title, description, date, city, type, protocolPandemic } = event;
  
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
        <label>Pago: {' '}
          <input type="radio" name="Pago" />
          {' '}
        </label>
        <label>Gratuito: {' '}
          <input type="radio" name="Gratuito" />
          {' '}
        </label>
        <input
          value ={protocolPandemic}
          placeholder="Digite qual protocolo de enfrentamento ao covid-19 o Evento adotará"
          onChange={ ({ target: { value } }) => setEvent(value)}
        />
      </form>
      <button type="submit" onClick="">Cadastrar</button>
    </main>
  )
}

export default EventsRegister;
