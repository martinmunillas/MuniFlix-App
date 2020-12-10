import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import routes from './apps';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

const { PORT, ENV, URL } = process.env;

if (ENV === 'production') {
  app.use(helmet({ contentSecurityPolicy: false }));
  app.disable('x-powered-by');
}

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
