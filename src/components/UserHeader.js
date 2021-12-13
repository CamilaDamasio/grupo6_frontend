import React from 'react';

function UserHeader({name, onClick}) {
  return (
      <div>
        <span>{name}</span>
        <button onClick={ onClick }>Logout</button>
      </div>
  );
}

export default UserHeader;
