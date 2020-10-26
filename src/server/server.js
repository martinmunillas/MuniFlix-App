//dependencies
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter, Route, Switch } from 'react-router-dom';
import helmet from 'helmet';
import axios from 'axios';

//frontend
import App from '../frontend/routes/App';
import reducer from '../frontend/redux/reducers';
import routes from '../frontend/routes/routes';
import AdminRoute from '../frontend/components/admin/AdminRoute';

//utils
import getManifest from './utils/middlewares/getManifest';

//API
import apiRoutes from './apiRoutes/apiRoutes';

dotenv.config();
const app = express();

//PARSERS
app.use(express.json());

const { PORT, ENV, URL } = process.env;

if (ENV === 'development') {
  console.log('Running on development');
  const webpackConfig = require('../../webpack.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(getManifest);
  app.use(express.static(__dirname + '/public'));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <link rel="icon" href="/images/MuniflixIconD.svg">
  <link rel="stylesheet" type="text/css" href="${mainStyles}">
  <meta charset="UTF-8">
  <title>MuniFlix</title>
  </head>
  <body>
  <div id="root">${html}</div>
  <script>
  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}
    </script>
    <script src="${mainBuild}"></script>
    </body>
    </html>`;
};

const renderApp = async (req, res) => {
  let initialState;
  try {
    let movies = await axios({
      method: 'get',
      url: `${URL}/movies`,
    });

    let series = await axios({
      method: 'get',
      url: `${URL}/series`,
    });

    movies = movies.data;
    series = series.data;

    initialState = {
      media: {
        movies,
        series,
      },
    };
  } catch (error) {
    console.log(error);
    initialState = {
      media: {
        movies: [],
        series: [],
      },
    };
  }
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Switch>
          {routes.map((route) =>
            !route.adminRoute ? (
              <Route {...route} key={route.path || 404} />
            ) : (
              <AdminRoute {...route} key={route.path} />
            )
          )}
        </Switch>
      </StaticRouter>
    </Provider>
  );
  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.use('/images', express.static(__dirname + '/static'));

apiRoutes(app);

app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
