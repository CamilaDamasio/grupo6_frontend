import React, { useContext } from 'react';

import { RegisterEventButton, UserHeader } from '../components';
import { AuthContext } from '../context/Auth';

function Home() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <main>
      { user && <UserHeader name={user.name} onClick={ signOut } /> }
      <RegisterEventButton />
    </main>
  )
}

export default Home;
