import React from "react";
import { AllRoles } from "../session/roles";
import { RestrictedPage } from "../session/permissions";
import { DashboardPageOrder, PagePaths } from "./paths";

import Home from "../pages/home";
import Login from '../pages/login'
import Pedido from "../pages/PatallaPedido/Pedido";
import Request from "../pages/request";

class Page {
    constructor(path, component, title = null, roles = AllRoles) {
        this.path = path;
        this.component = <RestrictedPage page={component} permissions={roles} />;
        this.title = title;
        this.roles = roles;
    }
}

export const PageList = [
    new Page(PagePaths['Home'], <Home />, "Menú default"),
    new Page(PagePaths['Login'], <Login/>,"Login"), 
    new Page(PagePaths['Pedido'], <Pedido/>,"ventanaPedido"),
    new Page(PagePaths['SignUp'], <Request title="Nuevo Ingreso" />, "Nuevo Ingreso"),
    new Page(PagePaths['PasswordChange'], <Request title="Nueva Contraseña" />, "Cambio de Contraseña"),
];

export const DashboardPageList = PageList
    .filter( page => { 
        return DashboardPageOrder.includes(page.path); 
    })
    .sort((firstPage, nextPage) => {
        return DashboardPageOrder.indexOf(firstPage.path) - DashboardPageOrder.indexOf(nextPage.path);
    });

export function GetPathTitle(path) {
    return DashboardPageList.find(page => page.path === path).title;
}