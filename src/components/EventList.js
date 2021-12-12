import React from 'react';
import EventCard from './EventCard';
import City from '../api/childrenJSON.json';

export default function EventList() {
  
  return (
    <div>
      {
        City.map((city, index) => (
          <div key={index}>
            <EventCard key={index} city={city}/>
          </div>
        ))
      }
    </div>
  )
}
