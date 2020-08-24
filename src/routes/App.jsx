import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import PreviewMovie from '../pages/MoviePreview';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/preview/:movieId" component={PreviewMovie} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
