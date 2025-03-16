import handleQueryExecution from './handleQueryExecution.js';

export async function sendAllRegistersFrom(res, tableName) { 
    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(`SELECT * FROM ${tableName}`);

        res.status(200).json(results);
    });
}

