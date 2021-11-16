import express, { json } from 'express';
import morgan from 'morgan';

import routes from './routes';

//initialize app
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/v1', routes);

export default app;
