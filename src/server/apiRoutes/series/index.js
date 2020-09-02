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

export default router;