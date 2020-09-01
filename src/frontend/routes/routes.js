import Home from '../pages/Home';
import MoviePreview from '../pages/MoviePreview';
import SeriesPreview from '../pages/SeriesPreview';
import VideoPlayer from '../pages/VideoPlayer';
import AdminCreateMovie from '../pages/admin/AdminCreateMovie'

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
    path: '/admin/create-movie',
    component: AdminCreateMovie,
  },
];

export default routes