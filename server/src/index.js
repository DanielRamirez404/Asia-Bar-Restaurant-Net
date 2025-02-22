import app from './app.js';
import getDatabasePool from './db.js';

const port = 3000;

try {
    const db = getDatabasePool();
    console.log(db);
} catch (error) {
    console.log(error);
}


app.listen(port);
console.log(`listening on port ${port}...`);
