import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
