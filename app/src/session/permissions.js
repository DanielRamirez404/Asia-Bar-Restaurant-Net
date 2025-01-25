import React from "react";
import { useContext } from "react";
import SessionContext from "session";
import { Roles } from "./roles";

export const RestrictedComponent = ({ component, permissions }) => {

    let session = useContext(SessionContext).session;

    return (permissions.includes(session.getAccountType())) ? component : null;
}

export const RestrictedPage = ({ page, permissions = Roles['cashier'] }) => {

    let session = useContext(SessionContext).session;

    return (permissions.includes(session.getAccountType())) ? page : (
        <div className="restricted-page-container">
            <h1 className="restricted-page-title">
                Usted No Tiene Permiso para Acceder a esta Página
            </h1>
        </div>
    );
}