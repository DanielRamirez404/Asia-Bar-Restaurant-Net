import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { Roles } from "./roles";

export class Session {

    constructor(accountType = Roles['cashier'], token = null, username = "") {
        this.accountType = accountType;
        this.token = token;
        this.username = username;
    }

    getAccountType() {
        return this.accountType;
    }

    getToken() {
        return this.token;
    }

    getUsername() {
        return this.username;
    }

}

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