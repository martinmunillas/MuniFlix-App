import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

import response from '../../utils/setResponse';

dotenv.config();
const router = express.Router();

const { API_URL } = process.env;

router.get('/', async (req, res, next) => {
  try {
    let series = await axios({
      method: 'get',
      url: `${API_URL}/series`,
    });

    series = series.data;

    response.succes(req, res, series.data);
  } catch (error) {
    response.error(req, res, error);
  }
});

router.post('/', async (req, res, next) => {
  const data = req.body;
  try {
    await axios({
      method: 'post',
      url: `${API_URL}/series`,
      data,
    });

    response.succes(req, res, 'Serie posted succesfully');
  } catch (error) {
    response.error(req, res, error);
  }
});

router.put('/:id', async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  try {
    await axios({
      method: 'put',
      url: `${API_URL}/series/${id}`,
      data,
    });

    response.succes(req, res, 'Serie updated succesfully');
  } catch (error) {
    response.error(req, res, error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await axios({
      method: 'delete',
      url: `${API_URL}/series/${id}`,
    });

    response.succes(req, res, 'Serie deleted succesfully');
  } catch (error) {
    response.error(req, res, error);
  }
});

router.post('/:id/seasons', async (req, res, next) => {
  const { id } = req.params;
  try {
    const series = await axios({
      method: 'get',
      url: `${API_URL}/series/`,
    });

    const serie = series.data.data.find((serie) => id == serie._id);

    const number = serie.seasons.length + 1;

    const data = {
      number,
      serie: id,
    };

    await axios({
      method: 'post',
      url: `${API_URL}/series/season`,
      data,
    });

    response.succes(req, res, 'Serie posted succesfully');
  } catch (error) {
    response.error(req, res, error);
  }
});

router.delete('/:serie/seasons/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await axios({
      method: 'delete',
      url: `${API_URL}/series/season/${id}`,
    });

    response.succes(req, res, 'Season deleted succesfully');
  } catch (error) {
    response.error(req, res, error);
  }
});

router.post('/episodes', async (req, res, next) => {
  const data = req.body;
  try {
    await axios({
      method: 'post',
      url: `${API_URL}/series/episode`,
      data,
    });

    response.succes(req, res, 'Episode posted succesfully');
  } catch (error) {
    response.error(req, res, error);
  }
});

router.put('/episodes/:episodeId', async (req, res, next) => {
  const { episodeId } = req.params;
  const data = req.body;
  try {
    await axios({
      method: 'put',
      url: `${API_URL}/series/episode/${episodeId}`,
      data,
    });

    response.succes(req, res, 'Episode updated succesfully');
  } catch (error) {
    response.error(req, res, error);
  }
});

router.delete('/episodes/:episodeId', async (req, res, next) => {
  const { episodeId } = req.params;
  try {
    await axios({
      method: 'delete',
      url: `${API_URL}/series/episode/${episodeId}`,
    });

    response.succes(req, res, 'Episode deleted succesfully');
  } catch (error) {
    response.error(req, res, error);
  }
});

export default router;
