import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

import response from '../../utils/setResponse';

dotenv.config();
const router = express.Router();

const { API_URL } = process.env;

router.get('/', async (req, res, next) => {
  try {
    let movies = await axios({
      method: 'get',
      url: `${API_URL}/movies`,
    });

    movies = movies.data;

    response.succes(req, res, movies.data);
  } catch (error) {
    response.error(req, res, error);
  }
});

router.post('/', async (req, res, next) => {
  const movie = req.body;
  try {
    let postedMovie = await axios({
      method: 'post',
      url: `${API_URL}/movies`,
      data: movie,
    });

    postedMovie = postedMovie.data;
    response.succes(req, res, postedMovie.message, 201);
  } catch (error) {
    response.error(req, res, error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const update = req.body;
  try {
    let updatedMovie = await axios({
      method: 'put',
      url: `${API_URL}/movies/${id}`,
      data: update,
    });

    updatedMovie = updatedMovie.data;

    response.succes(req, res, updatedMovie.message);
  } catch (error) {
    response.error(req, res, error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    let deletedMovie = await axios({
      method: 'delete',
      url: `${API_URL}/movies/${id}`,
    });

    deletedMovie = deletedMovie.data;

    response.succes(req, res, deletedMovie.message);
  } catch (error) {
    response.error(req, res, error);
  }
});

export default router;
