import React from 'react'

export default function EventDetails({ event }) {
  return (
    <div key={event.id} >
      <h3>Evento: {event.title}</h3>
      <br />
      <h4>Cidade: {event.city}</h4>
      <img className="imgCard" src={event.img} alt={`Imagem mostrando foto do último evento ${event.title}`} />
      <h4>Descrição: {event.description}</h4>
      <h4>Data: {event.date}</h4>
      <h4>Categoria: {event.type}</h4>
      <h5>Protocolo: {event.protocolPandemic}</h5>
    </div>
  )
}
