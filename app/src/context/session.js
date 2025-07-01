import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { Roles } from "../config/roles.js";
import Session from "../utils/session.js"; 

const SessionContext = createContext(new Session());

export const ContextWrapper = ({ content }) => {
    const [session, setSession] = useState(new Session());

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {content}
        </SessionContext.Provider>
    );
};

export default SessionContext;
