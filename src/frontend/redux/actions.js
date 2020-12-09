import axios from 'axios';

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
    });
    dispatch(getMedia());
  };
};

export const deleteMovie = (movieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/api/movies/${movieId}`,
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
    });
    dispatch(getMedia());
  };
};

export const deleteSeries = (serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/api/series/${serieId}`,
    });
    dispatch(getMedia());
  };
};

export const addSeason = (serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: `/api/series/${serieId}/seasons`,
    });
    dispatch(getMedia());
  };
};

export const deleteSeason = (seasonId, serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/api/series/${serieId}/seasons/${seasonId}`,
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
    });
    dispatch(getMedia());
  };
};

export const deleteEpisode = (episodeId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/api/series/episodes/${episodeId}`,
    });
    dispatch(getMedia());
  };
};
