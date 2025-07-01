import { useContext, useState, useEffect } from 'react';
import { tables } from "../config/tables.js";
import TablePage from "./reusables/tablePage.js";
import SessionContext from "../context/session.js"

function ControlPage() {

    const { session, setSession } = useContext(SessionContext);
    const [ table, setTable ] = useState(tables[0]);

    useEffect( () => {
        setTable(tables.find((found) => found.name === session.table));
    }, [session.table]);

    return (<TablePage key={table.dbname} title={`Control de ${table.name}`} fields={table.fields} tableName={table.dbname} />);
};

export default ControlPage;
