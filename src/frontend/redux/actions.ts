import axios from "axios";
import Cookie from "js-cookie";

const setState: (payload: any) => any = (payload) => ({
  type: "SET_STATE",
  payload,
});

type ThunkAction = (
  payload?: any,
  extra?: any
) => (dispatch: (action: any) => void) => void;

export const getMedia: ThunkAction = () => {
  return async (dispatch) => {
    let movies = await axios({
      method: "get",
      url: "/api/movies",
    });

    let series = await axios({
      method: "get",
      url: "/api/series",
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

export const addMovie: ThunkAction = (payload) => {
  return async (dispatch) => {
    await axios({
      method: "post",
      url: "/api/movies",
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const updateMovie: ThunkAction = (payload, movieId) => {
  return async (dispatch) => {
    await axios({
      method: "put",
      url: `/api/movies/${movieId}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const deleteMovie: ThunkAction = (movieId) => {
  return async (dispatch) => {
    await axios({
      method: "delete",
      url: `/api/movies/${movieId}`,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const addSeries: ThunkAction = (payload) => {
  return async (dispatch) => {
    await axios({
      method: "post",
      url: "/api/series",
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const updateSeries: ThunkAction = (payload, seriesId) => {
  return async (dispatch) => {
    await axios({
      method: "put",
      url: `/api/series/${seriesId}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const deleteSeries: ThunkAction = (serieId) => {
  return async (dispatch) => {
    await axios({
      method: "delete",
      url: `/api/series/${serieId}`,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const addSeason: ThunkAction = (serieId) => {
  return async (dispatch) => {
    await axios({
      method: "post",
      url: `/api/series/${serieId}/seasons`,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const deleteSeason: ThunkAction = (seasonId, serieId) => {
  return async (dispatch) => {
    await axios({
      method: "delete",
      url: `/api/series/${serieId}/seasons/${seasonId}`,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const addEpisode: ThunkAction = (payload) => {
  return async (dispatch) => {
    await axios({
      method: "post",
      url: "/api/series/episodes",
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const editEpisode: ThunkAction = (payload, episodeId) => {
  return async (dispatch) => {
    await axios({
      method: "put",
      url: `/api/series/episode/${episodeId}`,
      data: payload,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const deleteEpisode: ThunkAction = (episodeId) => {
  return async (dispatch) => {
    await axios({
      method: "delete",
      url: `/api/series/episodes/${episodeId}`,
      headers: {
        Authorization: `Bearer ${Cookie.get("token")}`,
      },
    });
    dispatch(getMedia());
  };
};

export const signIn: ThunkAction = (user) => {
  return async (_dispatch) => {
    try {
      const petition = await axios({
        method: "post",
        url: `/api/auth/sign-in`,
        auth: {
          username: user.email,
          password: user.password,
        },
      });
      document.cookie = `email=${petition.data.user.email}`;
      document.cookie = `id=${petition.data.user.id}`;
      document.cookie = `token=${petition.data.token}`;

      window.location.href = "/admin";
    } catch (error) {
      console.log(error);
      alert("Unauthorized");
    }
  };
};
