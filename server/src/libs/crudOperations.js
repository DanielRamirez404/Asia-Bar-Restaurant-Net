import handleQueryExecution from './handleQueryExecution.js';

export async function sendAllRegistersFrom(res, tableName, isFoodTable = false) {
    handleQueryExecution(res, async (db) => {

        let query = `SELECT * FROM ${tableName}`;

        if (isFoodTable)
            query += `, Foods WHERE ${tableName}.FoodName = Foods.Name`;

        const [results, fields] = await db.execute(query);

        res.status(200).json(results);
    });
}

export async function sendFromId(req, res, tableName, idName, isFoodTable) {
    handleQueryExecution(res, async (db) => {
        
        let query = (isFoodTable)
            ? `SELECT * FROM ${tableName}, Foods WHERE ${tableName}.FoodName = Foods.name AND Foods.Name = ?`
            : `SELECT * FROM ${tableName} WHERE ${idName} = ?`;

        const [results, fields] = await db.execute(query, [req.params.id]);

        (results.length < 1)
            ? res.status(404).send("Not found")
            : res.status(200).json(results[0]);
    });
}
