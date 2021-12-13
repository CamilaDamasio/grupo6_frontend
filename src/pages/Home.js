import React, { useContext } from 'react';
import { RegisterEventButton, UserHeader } from '../components';
import { AuthContext } from '../context/Auth';
import EventList from '../components/EventList';

function Home() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <main>
      { user && <UserHeader name={user.name} onClick={ signOut } /> }
      <RegisterEventButton />
      <EventList />
    </main>
  )
}

export default Home;
