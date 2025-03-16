import handleQueryExecution from '../libs/handleQueryExecution.js';
import { handleTokenCreation, handleEmptyTokenCreation } from '../libs/jwt.js';

export const signup = async (req, res) => {
    const { username, type, password } = req.body;
        
    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(
            'INSERT INTO Users VALUES (?, ?, ?)', 
            [username, type, password]
        )

        await handleTokenCreation(username, type, res);
    });
};

export const login = (req, res) => {
    const { username, password } = req.body;

    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(
            'SELECT * FROM Users WHERE username = ? AND password = ?', 
            [username, password]
        );

        if (results.length < 1)
            res.status(400).send('Username or password not valid');
        else
            await handleTokenCreation(username, results[0]["Type"], res);
    });
}

export const logout = (req, res) => {
    handleEmptyTokenCreation(res); 
}
