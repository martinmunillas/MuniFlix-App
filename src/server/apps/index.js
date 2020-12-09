import express from 'express';

const router = express.Router();

import ssr from './ssr';
import api from './api';

router.use('/api', api);
router.use('/', ssr);

export default router;
