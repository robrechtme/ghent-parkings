import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Details from './pages/Details';

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Overview} />
      <Route path="/:id" component={Details} />
    </HashRouter>
  );
};

export default App;
