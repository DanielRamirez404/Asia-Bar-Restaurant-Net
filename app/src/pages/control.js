import { tables } from "../config/tables.js";
import TablePage from "./reusables/tablePage.js";

export const ControlPages = tables.map(table => 
    () => (<TablePage title={`Control de ${table.name}`} fields={table.fields} tableName={table.dbname} />)
);
