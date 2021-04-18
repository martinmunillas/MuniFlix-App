import model from "./schema";

const getMovies = async () => {
  return await model.find();
};

const postMovie = async (movie: any) => {
  return await new model(movie).save();
};

const updateMovie = async (id: string, movie: any) => {
  return await model.updateOne({ _id: id }, movie);
};

const deleteMovie = async (id: string) => {
  return await model.deleteOne({ _id: id });
};

export default {
  getMovies,
  postMovie,
  updateMovie,
  deleteMovie,
};
