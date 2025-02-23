import mysql2 from 'mysql2/promise';
import handleQueryExecution from './handleQueryExecution.js';

export const signup = async (req, res) => {
    const { username, type, password } = req.body;
        
    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(
            'INSERT INTO Users VALUES (?, ?, ?)', 
            [username, type, password]
        )

        res.status(200).send('Signed up successfully');
    });
};

export const login = (req, res) => {
    const { username, password } = req.body;

    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(
            'SELECT * FROM Users WHERE username = ? AND password = ?', 
            [username, password]
        )

        if (results.length < 1)
            res.status(400).send('Username or password not valid');
        else
            res.status(200).send('Logged in successfully')
    });
}

