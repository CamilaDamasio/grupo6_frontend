import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import '../styles/eventList.css';
import { api } from "../api/api"

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const response = await api.get('/event');
      setEvents(response.data)
    }
    getEvents()
  }, [])

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
