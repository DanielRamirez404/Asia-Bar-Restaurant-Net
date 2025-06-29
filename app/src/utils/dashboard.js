import { routes } from "../config/routes.js"

export class DashboardSubItem {
    constructor(route, table) {
        this.route = routes[route];
        this.table = table;
    }
}
