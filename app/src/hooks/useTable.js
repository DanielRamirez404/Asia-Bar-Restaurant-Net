import { useContext, useState, useEffect } from 'react';
import { tables } from "../config/tables.js";
import SessionContext from "../context/session.js"

export default function useTable() {
    const { session, setSession } = useContext(SessionContext);
    const [ table, setTable ] = useState(tables[0]);

    useEffect( () => {
        setTable(tables.find((found) => found.name === session.table));
    }, [session.table]);

    return table;
}
