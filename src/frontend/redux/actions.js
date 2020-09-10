import axios from 'axios';

const setState = (payload) => ({
  type: 'SET_STATE',
  payload,
});

export const getMedia = () => {
  return async (dispatch) => {
    let movies = await axios({
      method: 'get',
      url: '/movies',
    });

    let series = await axios({
      method: 'get',
      url: '/series',
    });

    movies = movies.data;
    series = series.data;

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
      url: '/movies',
      data: payload,
    });
    dispatch(getMedia());
  };
};

export const updateMovie = (payload, movieId) => {
  return async (dispatch) => {
    await axios({
      method: 'put',
      url: `/movies/${movieId}`,
      data: payload,
    });
    dispatch(getMedia());
  };
};

export const deleteMovie = (movieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/movies/${movieId}`,
    });
    dispatch(getMedia());
  };
};

export const addSeries = (payload) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: '/series',
      data: payload,
    });
    dispatch(getMedia());
  };
};

export const updateSeries = (payload, seriesId) => {
  return async (dispatch) => {
    await axios({
      method: 'put',
      url: `/series/${seriesId}`,
      data: payload,
    });
    dispatch(getMedia());
  };
};

export const deleteSeries = (serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/series/${serieId}`,
    });
    dispatch(getMedia());
  };
};

export const addSeason = (serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: `/series/${serieId}/seasons`,
    });
    dispatch(getMedia());
  };
};

export const deleteSeason = (seasonId, serieId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/series/${serieId}/seasons/${seasonId}`,
    });
    dispatch(getMedia());
  };
};

export const addEpisode = (payload) => {
  return async (dispatch) => {
    await axios({
      method: 'post',
      url: '/series/episodes',
      data: payload,
    });
    dispatch(getMedia());
  };
};

export const editEpisode = (payload, episodeId) => {
  return async (dispatch) => {
    await axios({
      method: 'put',
      url: `/series/episodes/${episodeId}`,
      data: payload,
    });
    dispatch(getMedia());
  };
};

export const deleteEpisode = (episodeId) => {
  return async (dispatch) => {
    await axios({
      method: 'delete',
      url: `/series/episodes/${episodeId}`,
    });
    dispatch(getMedia());
  };
};
