import { useContext, useMemo } from 'react';
import { tables } from "../config/tables.js";
import SessionContext from "../context/session.js"

function getTable(name) {
    return tables.find( (table) => table.name === name ); 
}

export default function useTable() {
    const { session } = useContext(SessionContext);
    
    return useMemo(() => getTable(session.table), [session.table]);
}
