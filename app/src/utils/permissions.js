import React from "react";
import { useContext } from "react";
import SessionContext from "../context/session.js";
import { Roles } from "../config/roles.js";

export const RestrictedComponent = ({ component, permissions }) => {
    const rol = useContext(SessionContext).session.rol;
    
    if (!permissions)
        return component;

    return (permissions.includes(rol)) ? component : null;
}

export const RestrictedPage = ({ page, permissions = [ Roles['user'] ] }) => {
    const rol = useContext(SessionContext).session.rol;

    return (!permissions || permissions.includes(rol)) ? page : (
        <div className="restricted-page-container">
            <h1 className="restricted-page-title">
                Usted No Tiene Permiso para Acceder a esta Página
            </h1>
        </div>
    );
}
