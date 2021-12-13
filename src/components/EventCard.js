import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  console.log(event)
  return (
    <Link to={`/events/${event._id}`}>
      <div key={event._id} className="cardEvent">
        <img className="imgCard" src={event.img} alt={`Imagem mostrando foto do último evento ${event.title}`} width="60%"/>
        <h3>Evento: {event.title}</h3>
        <br />
        <h4>Cidade: {event.city}</h4>
        <h4>Data: {event.date}</h4>
        <h4>Categoria: {event.type}</h4>
      </div>
    </Link>
  )
}
