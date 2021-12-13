import React from 'react';
import EventCard from './EventCard';
import events from '../api/mockApi';

export default function EventList() {
  
  return (
    <div>
      {
        events.map((city, index) => (
          <div key={index}>
            <EventCard key={index} city={city}/>
          </div>
        ))
      }
    </div>
  )
}
