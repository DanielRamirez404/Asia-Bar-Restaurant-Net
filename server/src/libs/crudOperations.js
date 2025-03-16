import handleQueryExecution from './handleQueryExecution.js';

export async function sendAllRegistersFrom(res, tableName) { 
    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(`SELECT * FROM ${tableName}`);

        res.status(200).json(results);
    });
}

export async function sendAllFoodRegistersFrom(res, tableName) {
    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(`SELECT * FROM ${tableName}, Foods WHERE ${tableName}.FoodName = Foods.Name`);

        res.status(200).json(results);
    });
}

export async function sendFromId(req, res, tableName, idName) {
    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(
            `SELECT * FROM ${tableName} WHERE ${idName} = ?`, 
            [req.params.id]
        );

        res.status(200).json(results[0]);
    });
}

export async function sendFoodFromId(req, res, tableName) {
    handleQueryExecution(res, async (db) => {
        const [results, fields] = await db.execute(
            `SELECT * FROM ${tableName}, Foods WHERE ${tableName}.FoodName = Foods.name AND Foods.Name = ?`,
            [req.params.id]
        );

        res.status(200).json(results[0]);
    });
}
