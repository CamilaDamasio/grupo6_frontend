import React from 'react';
import EventCard from './EventCard';
import events from '../api/mockApi';

export default function EventList() {
  console.log(events);
  return (
    <div>
      {
        events.map((event, index) => (
          <div key={index}>
            <EventCard key={index} event={event}/>
          </div>
        ))
      }
    </div>
  )
}
