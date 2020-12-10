import axios from 'axios';
import Cookie from 'js-cookie';

const setState = (payload) => ({
  type: 'SET_STATE',
  payload,
});

export const getMedia = () => {
  return async (dispatch) => {
    let movies = await axios({
      method: 'get',
      url: '/api/movies',
    });

    let series = await axios({
      method: 'get',
      url: '/api/series',
    });

    movies = movies.data.data;
    series = series.data.data;

    const state = {
      media: {
        movies,
        series,
      },
    };
    dispatch(setState(state));
  };
};

export const addMovie = (payload) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: '/api/movies',
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const updateMovie = (payload, movieId) => {
  return async (dispatch) => {
    await axios({
      method: 'put',
      url: `/api/movies/${movieId}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const deleteMovie = (movieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/api/movies/${movieId}`,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const addSeries = (payload) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: '/api/series',
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const updateSeries = (payload, seriesId) => {
  return async (dispatch) => {
    await axios({
      method: 'put',
      url: `/api/series/${seriesId}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const deleteSeries = (serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/api/series/${serieId}`,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const addSeason = (serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: `/api/series/${serieId}/seasons`,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const deleteSeason = (seasonId, serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/api/series/${serieId}/seasons/${seasonId}`,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const addEpisode = (payload) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: '/api/series/episodes',
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const editEpisode = (payload, episodeId) => {
  return async (dispatch) => {
    await axios({
      method: 'put',
      url: `/api/series/episode/${episodeId}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const deleteEpisode = (episodeId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/api/series/episodes/${episodeId}`,
      headers: {
        Authorization: `Bearer ${Cookie.get('token')}`,
      },
    });
    dispatch(getMedia());
  };
};

export const signIn = (user) => {
  return async (dispatch) => {
    try {
      const petition = await axios({
        method: 'post',
        url: `/api/auth/sign-in`,
        auth: {
          username: user.email,
          password: user.password,
        },
      });

      document.cookie = `email=${petition.data.user.email}`;
      document.cookie = `id=${petition.data.user.id}`;
      document.cookie = `token=${petition.data.token}`;

      window.location.href = '/admin';
    } catch (error) {
      console.log(error);
      alert('Unauthorized');
    }
  };
};
