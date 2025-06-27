import { AllRoles } from "../config/roles.js";
import { RestrictedPage } from "./permissions.js";

export function toPath(name) {
    return '/' + name.toLowerCase().replace(/\s+/g, '-');
}

export default class Page {
    constructor(name, component, roles = AllRoles) {
        this.component = ( <RestrictedPage page={component} permissions={roles} /> );
        this.name = name;
        this.roles = roles;
        this.path = toPath(name);
    }
}
