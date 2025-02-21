import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';

dotenv.config({ path: 'env/.env' });

async function getDatabasePool() {
    let db = null;

    try {
        
        db = mysql2.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        });

        await db.getConnection();
        console.log('Connected to database successfully');
        db.releaseConnection();

    } catch (error) {

        console.log(`Can't connect to database. Error: ${error}`);
        throw error;

    }

    return db;
} 


export default getDatabasePool;
