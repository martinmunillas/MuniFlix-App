import Home from '../pages/Home';
import MoviePreview from '../pages/MoviePreview';
import SeriesPreview from '../pages/SeriesPreview';
import VideoPlayer from '../pages/VideoPlayer';
import AdminMovies from '../pages/admin/AdminMovies';
import AdminSeries from '../pages/admin/AdminSeries';
import AdminHome from '../pages/admin/AdminHome';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
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
    path: '/watch/:movieId',
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
];

export default routes;
