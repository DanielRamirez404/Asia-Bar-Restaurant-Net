import { useContext } from 'react';
import Session from "../utils/session.js";
import SessionContext from "../context/session.js";

export function useTableChanger(table) {
    const { session, setSession } = useContext(SessionContext);
  
    return () => setSession(new Session(session.rol, session.username, table, session.controlAction));
}

export function useControlActionChanger(action) {
    const { session, setSession } = useContext(SessionContext);
  
    return () => setSession(new Session(session.rol, session.username, session.table, action));
}
