import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';

dotenv.config({ path: 'env/.env' });

let db = null;

async function getDatabasePool() {

    if (db)
        return db;

    try {
        
        db = await mysql2.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        });

        console.log('Connected to database successfully');

    } catch (e) {

        db = null;
        console.log(`Can't connect to database. Error: ${e.message}`);
        throw e;

    }
    
    return db;
}


export default getDatabasePool;
