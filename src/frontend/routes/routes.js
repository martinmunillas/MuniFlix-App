import React from 'react';

import Home from '../pages/Home';
import MoviePreview from '../pages/MoviePreview';
import SeriesPreview from '../pages/SeriesPreview';
import VideoPlayer from '../pages/VideoPlayer';
import MovieList from '../pages/MovieList';
import SerieList from '../pages/SerieList';
import SearchPage from '../pages/SearchPage';

import AdminSeries from '../pages/admin/AdminSeries';
import AdminMovies from '../pages/admin/AdminMovies';
import AdminHome from '../pages/admin/AdminHome';
import AdminMovieDetails from '../pages/admin/AdminMovieDetails';
import AdminSeriesDetails from '../pages/admin/AdminSeriesDetails';
import AdminEditMovie from '../pages/admin/AdminEditMovie';
import AdminEditSeries from '../pages/admin/AdminEditSeries';
import AdminAddEpisodes from '../pages/admin/AdminAddEpisodes';
import AdminEditEpisode from '../pages/admin/AdminEditEpisode';
import AdminEpisodeDetails from '../pages/admin/AdminEpisodeDetails';

import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';

const routes = [
  {
    exact: true,
    path: '/sign-in',
    component: SignIn
  },
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/search',
    component: SearchPage,
  },
  {
    exact: true,
    path: '/list/movies',
    component: MovieList,
  },
  {
    exact: true,
    path: '/list/series',
    component: SerieList,
  },
  {
    exact: true,
    path: '/preview/movies/:movieId',
    component: MoviePreview,
  },
  {
    exact: true,
    path: '/preview/series/:seriesId',
    component: SeriesPreview,
  },
  {
    exact: true,
    path: '/watch/:id',
    component: VideoPlayer,
  },
  {
    exact: true,
    path: '/admin',
    component: AdminHome,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/movies',
    component: AdminMovies,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/series',
    component: AdminSeries,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/movies/:movieId',
    component: AdminMovieDetails,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/series/:serieId',
    component: AdminSeriesDetails,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/movies/:movieId/edit',
    component: AdminEditMovie,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/series/:serieId/edit',
    component: AdminEditSeries,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/series/:serieId/seasons/:seasonId/episode/add',
    component: AdminAddEpisodes,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/series/:serieId/episode/:episodeId',
    component: AdminEpisodeDetails,
    adminRoute: true,
  },
  {
    exact: true,
    path: '/admin/series/:serieId/episode/:episodeId/edit',
    component: AdminEditEpisode,
    adminRoute: true,
  },
  {
    component: NotFound,
  },
];

export default routes;
