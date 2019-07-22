import React, { Fragment } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import user from '../../user.json';
import stats from '../../stats.json';
import pricingPlanItems from '../../pricing-plan.json';

function App() {
  return (
    <Fragment>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <PricingPlan items={pricingPlanItems} />
    </Fragment>
  );
}

export default App;
