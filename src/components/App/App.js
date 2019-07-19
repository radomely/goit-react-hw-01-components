import React, { Fragment } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import user from '../../user.json';

function App() {
  return (
    <Fragment>
      <Profile user={user} />
    </Fragment>
  );
}

export default App;
