import React from "react";
import { AllRoles } from "../session/roles";
import { RestrictedPage } from "../session/permissions";
import { DashboardPageOrder, PagePaths } from "./paths";

import Home from "../pages/home";
import Login from '../pages/login';
import InformacionVenta from "../pages/InformacionDeVenta/informacionDeVenta";
import Pedido from "../pages/PatallaPedido/Pedido";
import ConfirmacionVenta from "../pages/ConfirmacionDeVenta/confirmacionVenta";
import Request from "../pages/request";
import Users from "../pages/users";
import Clients from "../pages/clients";
import TablaVentas from '../pages/tabla-ventas';


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
    new Page(PagePaths['InformacionVenta'], <InformacionVenta/>,"informacion venta"),
    new Page(PagePaths['Pedido'], <Pedido/>,"ventanaPedido"),
    new Page(PagePaths['ConfirmacionVenta'],<ConfirmacionVenta/>,"Confirmacion Venta"),
    new Page(PagePaths['SignUp'], <Request title="Nuevo Ingreso" />, "Nuevo Ingreso"),
    new Page(PagePaths['PasswordChange'], <Request title="Nueva Contraseña" />, "Cambio de Contraseña"),
    new Page(PagePaths['AddUser'], <Users title="Agregar Usuario"/>, "Agregar Usuario"),
    new Page(PagePaths['EditUser'], <Users title="Modificar Usuario"/>, "Modificar Usuario"),
    new Page(PagePaths['AddClient'], <Clients title="Añadir Cliente" />, "Añadir Cliente"),
    new Page(PagePaths['EditClient'], <Clients title="Modificar Cliente" />, "Modificar Cliente"),
    new Page(PagePaths['TablaVentas'], <TablaVentas title="Tabla de Ventas" />, "Tabla de Ventas")
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