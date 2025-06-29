import { useContext } from 'react';
import { tables } from "../config/tables.js";
import TablePage from "./reusables/tablePage.js";
import SessionContext from "../context/session.js"

export const ControlPages = tables.map(table => 
    () => (<TablePage title={`Control de ${table.name}`} fields={table.fields} tableName={table.dbname} />)
);

function ControlPage() {

    const { session, setSession } = useContext(SessionContext);

    const table = tables.find((found) => found.name == session.table); 

    return (<TablePage title={`Control de ${table.name}`} fields={table.fields} tableName={table.dbname} />);
};

export default ControlPage;
