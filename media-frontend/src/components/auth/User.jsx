import React from 'react';

function User({ user }) {
  console.log(user);
  return (
    <div>
      <h2>Hi {user.name}!</h2>
      <div>
        <h3>Account</h3>
        <h3>Settings</h3>
      </div>
    </div>
  );
}

export default User;
