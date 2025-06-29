import { routes } from "../config/routes.js"

export class DashboardSubItem {
    constructor(route, table, name = null) {
        this.route = routes[route];
        this.table = table;
        this.name = name ?? route;
    }
}
