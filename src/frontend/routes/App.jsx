import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';
import AdminRoute from '../components/admin/AdminRoute';
import ScrollToTop from '../components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {routes.map((route) =>
          !route.adminRoute ? (
            <Route {...route} key={route.path || 404} />
          ) : (
            <AdminRoute {...route} key={route.path} />
          )
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
