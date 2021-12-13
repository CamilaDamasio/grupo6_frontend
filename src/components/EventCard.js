import React from 'react';
import events from '../api/mockApi';

export default function EventCard() {
  return (
    <div className="card">
      {
        events.map((cit, index) => (
          <div key={index} className="cardEvent">
            <img className="imgCard" src={cit.img} alt={`Imagem mostrando foto do último evento ${cit.title}`} />
            <h3>Evento: {cit.title}</h3>
            <h4>Data: {cit.date}</h4>
            <h4>Categoria: {cit.type}</h4>
          </div>
        ))
      }
    </div>
  )
}
