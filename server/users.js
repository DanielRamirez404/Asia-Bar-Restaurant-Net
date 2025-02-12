import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';

dotenv.config();

const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

const Users = {
    getAll: async (req, res) => {
        try {
            const [row, columns] = await pool.execute("SELECT * FROM Users");
            res.status(200).send(row);
        } catch(exception) {
            res.status(500).send(exception.message);
        }
    }
};

export default Users;