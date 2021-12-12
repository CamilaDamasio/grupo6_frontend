import React from 'react';
import { RegisterEventButton } from '../components';
import EventList from '../components/EventList';

function Home() {

  return (
    <main>
      <RegisterEventButton />
      <EventList />
    </main>
  )
}

export default Home;
