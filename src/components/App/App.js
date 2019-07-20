import React, { Fragment } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import user from '../../user.json';
import stats from '../../stats.json';

function App() {
  return (
    <Fragment>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
    </Fragment>
  );
}

export default App;
