import express from 'express';
import Users from './users.js';

const app = express();
app.use(express.json());

const port = 9000;

app.get('/users/get', Users.getAll);

app.listen(port, () => {
  console.log(`Running server at http://localhost:${port}`);
});