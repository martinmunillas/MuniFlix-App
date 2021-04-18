import dotenv from "dotenv";
import express from "express";

dotenv.config();

import movies from "../components/movies/network";
import series from "../components/series/network";
import auth from "../components/auth/network";

const routes = (app: ReturnType<typeof express.Router>) => {
  app.use("/movies", movies);
  app.use("/series", series);
  app.use("/auth", auth);
};

export default routes;
