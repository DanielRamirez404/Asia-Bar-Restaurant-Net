import express from 'express';
import cors from 'cors';
import Users from './handlers/users.js';

const app = express();

app.use(express.json());
app.use(cors());

const port = 9000;

app.get('/users/get', Users.getAll);

app.listen(port, () => {
    console.log(`Running server at http://localhost:${port}`);
});