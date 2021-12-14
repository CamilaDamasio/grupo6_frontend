import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {

  return (
    <Link to={`/events/${event._id}`}>
      <div key={event._id} className="cardEvent">
        <img className="imgCard" src={event.img} alt={`Imagem mostrando foto do último evento ${event.title}`} width="60%"/>
        <h3>Evento: {event.title}</h3>
        <br />
        <p>Cidade: {event.city}</p>
        <p>Data: {event.date}</p>
        <p>Categoria: {event.type}</p>
      </div>
    </Link>
  )
}
