const express = require('express');
require('dotenv').config();

const routes = require('./network/routes');
const errorHandler = require('./utils/middlewares/errorHandler');
const connect = require('./db');

const router = express.Router();
connect();

router.use(errorHandler);

routes(router);

export default router;
