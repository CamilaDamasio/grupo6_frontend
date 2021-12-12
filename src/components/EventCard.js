import React from 'react';
import PropType from 'prop-types';

export default function EventCard({ city }) {
  return (
    <div>
      {
        city.map((cit, index) => (
          <div key={index}>
            <img src={cit.img} alt={cit.name}/>
            <h2>{cit.title}</h2>
            <h3>{cit.name}</h3>
            <h3>{cit.date}</h3>
            <h3>{cit.type}</h3>
          </div>
        ))
      }
    </div>
  )
}

EventCard.propType = {
  city: PropType.arrayOf().isRequired,
}