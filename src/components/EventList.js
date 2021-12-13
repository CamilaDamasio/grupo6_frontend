import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
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
