//dependencies
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

//frontend
import reducer from '../../../frontend/redux/reducers';
import routes from '../../../frontend/routes/routes';
import AdminRoute from '../../../frontend/components/admin/AdminRoute';

//utils
import getManifest from './utils/middlewares/getManifest';

const router = express.Router();
dotenv.config();

const { PORT, ENV, URL, AUTH_JWT } = process.env;

router.use('/images', express.static(__dirname + '/static'));

if (ENV === 'development') {
  console.log('Running on development');
  const webpackConfig = require('../../../../webpack.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  router.use(webpackDevMiddleware(compiler, serverConfig));
  router.use(webpackHotMiddleware(compiler));
} else {
  router.use(getManifest);
  router.use(express.static(__dirname + '/public'));
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
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="${mainBuild}"></script>
      </body>
      </html>`;
};

const renderApp = async (req, res) => {
  let initialState;
  try {
    const { email, id } = req.cookies;
    let movies = await axios({
      method: 'get',
      url: `${URL}/api/movies`,
    });

    let series = await axios({
      method: 'get',
      url: `${URL}/api/series`,
    });

    movies = movies.data.data.map((movie) => ({
      ...movie,
      isMovie: true,
    }));
    series = series.data.data;

    initialState = {
      user: { email, id },
      media: {
        movies,
        series,
      },
    };
  } catch (error) {
    console.log(error);
    initialState = {
      user: {},
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

const checkAuth = async (req, res, next) => {
  if (req.url.startsWith('/admin')) {
    try {
      await jwt.verify(req.cookies.token, AUTH_JWT);
      next();
    } catch (error) {
      console.log(error);
      res.redirect('/sign-in');
    }
  } else {
    next();
  }
};

router.get('*', [checkAuth, renderApp]);

export default router;
