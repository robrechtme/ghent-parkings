import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Overview from '../pages/Overview/Overview';
import Details from '../pages/Details/Details';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import '../i18n';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/p/:id" component={Details} />
        <Route render={() => <ErrorPage message={t('notFound.title')} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
