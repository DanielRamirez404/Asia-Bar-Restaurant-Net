import { Roles } from "../config/roles.js";
import { tables } from "../config/tables.js";

export default class Session {
    constructor(rol = Roles["cashier"], username = null, table = tables[0].name, controlAction = "POST") {
        this.rol = rol;
        this.username = username;
        this.table = table;
        this.controlAction = controlAction;
    }
}
