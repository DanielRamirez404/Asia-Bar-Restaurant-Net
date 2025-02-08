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
import FormularioProducto from '../pages/Formularios/formulario_prod';
import UserControl from "../pages/control/user-control";
import ClientControl from "../pages/control/client-control";
import { MainDishControl, ProductControl, SideDishControl } from "../pages/control/dish-control";

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
    new Page(PagePaths['TablaVentas'], <TablaVentas />, "Tabla de Ventas"),
    new Page(PagePaths['FormularioProducto'], <FormularioProducto title="Formulario de Producto" />, "Formulario de Producto"),
    new Page(PagePaths['UserControl'], <UserControl />, "Tabla de Usuarios"),
    new Page(PagePaths['ClientControl'], <ClientControl />, "Tabla de Clientes"),
    new Page(PagePaths['MainDishControl'], <MainDishControl />, "Tabla de Menú"),
    new Page(PagePaths['SideDishControl'], <SideDishControl />, "Tabla de Contornos"),
    new Page(PagePaths['ProductControl'], <ProductControl />, "Tabla de Productos"),
];

export function GetPageFromPath(path) {
    return PageList.find(page => page.path === path);
}
