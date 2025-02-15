import pool from "../variables/variables.js";

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