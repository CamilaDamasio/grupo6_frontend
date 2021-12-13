import React, { useContext } from 'react';

import { RegisterEventButton, UserHeader, EventList, Header } from '../components';
import { AuthContext } from '../context/Auth';

function Home() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <main>
      <Header />
      { user && <UserHeader name={user.name} onClick={ signOut } /> }
      <RegisterEventButton />
      <EventList />
    </main>
  )
}

export default Home;
