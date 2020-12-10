require('dotenv').config();

import movies from '../components/movies/network';
import series from '../components/series/network';
import auth from '../components/auth/network';

const routes = (app) => {
  app.use('/movies', movies);
  app.use('/series', series);
  app.use('/auth', auth);
};

module.exports = routes;
