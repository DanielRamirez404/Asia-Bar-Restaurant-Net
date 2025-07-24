import { useState } from "react";
import { createContext } from "react";
import Session from "../utils/session.js"; 

const SessionContext = createContext(new Session());

export const ContextWrapper = ({ children }) => {
    const [session, setSession] = useState(new Session());

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionContext;
