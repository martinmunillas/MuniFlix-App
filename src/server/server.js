import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';

import routes from './apps';

dotenv.config();
const app = express();

app.use(express.json());

const { PORT, ENV, URL } = process.env;

if (ENV === 'production') {
  app.use(helmet({ contentSecurityPolicy: false }));
  app.disable('x-powered-by');
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
