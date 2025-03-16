import express from 'express';
import morgan from 'morgan';
import CookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import crudRouter from './routes/crud.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(CookieParser());

app.use('/api', authRouter);
app.use('/api', crudRouter);

export default app;
