import { Roles } from "../config/roles.js";

export default class Session {
    constructor(rol = Roles["cashier"], username = null, table = "sales") {
        this.rol = rol;
        this.username = username;
        this.table = table;
    }
    
    setDifferentTable(setter, table) {
        setter(new Session(this.rol, this.username, table));
    }
}
