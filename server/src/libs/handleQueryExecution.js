import getDatabasePool from '../db.js';

async function handleQueryExecution(res, queryFunction) { 
    let db = null;
    
    try {
        db = await getDatabasePool();
    } catch (e) {
        res.status(503).json({message: "Can\'t connect to database"});
        return;
    }

    try {
        await queryFunction(db); //must be a function that takes the database pool as its only argument
    } catch (e) {
        res.status(500).json({message: "Something went wrong executing the database's query..."});
    }
}

export default handleQueryExecution; 
