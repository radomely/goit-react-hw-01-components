import React, { Fragment } from 'react';
import './App.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import user from '../../user.json';
import stats from '../../stats.json';
import pricingPlanItems from '../../pricing-plan.json';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function App() {
  return (
    <Fragment>
      <Profile user={user} />
      <Stats title="Upload stats" stats={stats} />
      <PricingPlan items={pricingPlanItems} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}

export default App;
