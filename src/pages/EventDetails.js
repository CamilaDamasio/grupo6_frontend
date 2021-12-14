import React, { useEffect, useState } from 'react'
import { api } from '../api/api';
import '../styles/eventDetails.css';

export default function EventDetails({ match: { params: { id } } }) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function getEvents() {
      const response = await api.get(`/event/${id}`);
      setEvent(response.data)
    }
    getEvents()
  }, [id])

  return (
    <>
    { event &&     
      <div className='details-page' key={event.id} >
        <img className='imgCard' src={event.img} alt={`Imagem mostrando foto do último evento ${event.title}`} />
        <h2 className='detail-title'>Evento: {event.title}</h2>
        <br />
        <h4 className='detail-city'>Cidade: {event.city}</h4>
        <p className='imgDescr'>Descrição: {event.description}</p>
        <h4 className='imgDate'>Data: {event.date}</h4>
        <h4 className='imgCateg'>Categoria: {event.type}</h4>
        <p className='imgProt'>Protocolo: {event.protocolPandemic}</p>
      </div> }
    </>
  )
}
