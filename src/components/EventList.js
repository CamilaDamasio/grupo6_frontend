import React from 'react';
import EventCard from './EventCard';
import events from '../api/mockApi';
import '../styles/eventList.css';

export default function EventList() {
  return (
    <div className="cards-list">
      {
        events.map((event, index) => (
            <EventCard key={index} event={event}/>
        ))
      }
    </div>
  )
}
