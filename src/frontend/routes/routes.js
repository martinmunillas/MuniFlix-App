import Home from '../pages/Home';
import PreviewMovie from '../pages/MoviePreview';
import VideoPlayer from '../pages/VideoPlayer';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/preview/:movieId',
    component: PreviewMovie,
  },
  {
    exact: true,
    path: '/watch/:movieId',
    component: VideoPlayer,
  },
];

export default routes