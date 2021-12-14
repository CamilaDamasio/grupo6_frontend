import React from 'react';
import '../styles/userHeader.css';

function UserHeader({name, onClick}) {
  return (
    <div className='user-header'>
      <span>{name}</span>
      <button className='logout-btn' onClick={ onClick }>Logout</button>
    </div>
  );
}

export default UserHeader;
