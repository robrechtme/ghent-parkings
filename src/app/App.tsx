import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Overview from '../pages/Overview/Overview';
import Details from '../pages/Details/Details';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import '../i18n';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Overview />} />
        <Route path="/p/:id" element={<Details />} />
        <Route element={<ErrorPage message={t('notFound.title')} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
