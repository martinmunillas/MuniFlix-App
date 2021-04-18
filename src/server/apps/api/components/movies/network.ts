import express from "express";
import passport from "passport";

import service from "./service";

const router = express.Router();

require("../../utils/auth/jwt");

router.get("/", async (_req, res) => {
  try {
    const movies = await service.getMovies();

    res.status(200).send({
      message: "Movies retrieved correctly",
      data: movies,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const movie = req.body;

      await service.postMovie(movie);

      res.status(200).send({
        message: `Movie posted correctly`,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;

      const movie = req.body;

      await service.updateMovie(id, movie);

      res.status(200).send({
        message: "Movie updated correctly",
      });
    } catch (error) {
      console.log(error.message);
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { id } = req.params;

      await service.deleteMovie(id);

      res.status(200).send({
        message: "Movie deleted correctly",
      });
    } catch (error) {
      console.log(error.message);
    }
  }
);

export default router;
