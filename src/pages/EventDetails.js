import React, { useEffect, useState } from 'react'
import { api } from '../api/api';

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
      <div key={event.id} >
        <h3>Evento: {event.title}</h3>
        <br />
        <h4>Cidade: {event.city}</h4>
        <img className="imgCard" src={event.img} alt={`Imagem mostrando foto do último evento ${event.title}`} />
        <h4>Descrição: {event.description}</h4>
        <h4>Data: {event.date}</h4>
        <h4>Categoria: {event.type}</h4>
        <h5>Protocolo: {event.protocolPandemic}</h5>
      </div> }
    </>
  )
}
