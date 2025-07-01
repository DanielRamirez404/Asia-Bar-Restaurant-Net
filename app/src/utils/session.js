import { Roles } from "../config/roles.js";
import { tables } from "../config/tables.js";

export default class Session {
    constructor(rol = Roles["cashier"], username = null, table = tables[0].name) {
        this.rol = rol;
        this.username = username;
        this.table = table;
    }
    
    setDifferentTable(setter, table) {
        setter(new Session(this.rol, this.username, table));
    }
}
