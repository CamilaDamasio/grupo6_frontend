import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`}>
      <div key={event.id} className="cardEvent">
        <img className="img-card" src={event.img} alt={`Imagem mostrando foto do último evento ${event.title}`} width="60%"/>
        <h5 className='title-card'>Evento: {event.title}</h5>
        <br />
        <p>Cidade: {event.city}</p>
        <p>Data: {event.date}</p>
        <p>Categoria: {event.type}</p>
      </div>
    </Link>
  )
}
