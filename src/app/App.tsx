import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Overview from '../pages/Overview/Overview';
import Details from '../pages/Details/Details';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/p/:id" component={Details} />
        <Route render={() => <ErrorPage message="This page does not exist." />} />
      </Switch>
    </HashRouter>
  );
};

export default App;
