import React, { Suspense } from "react";
import { AllRoles } from "../session/roles";
import { RestrictedPage } from "../session/permissions";
import { PagePaths } from "./paths";

import Home from "../pages/Inicio/Inicio";
import Login from "../pages/login";
import InformacionVenta from "../pages/InformacionDeVenta/informacionDeVenta";
import Pedido from "../pages/PatallaPedido/Pedido";
import ConfirmacionVenta from "../pages/ConfirmacionDeVenta/confirmacionVenta";
import Request from "../pages/request";
import Users from "../pages/users";
import Clients from "../pages/clients";
import TablaVentas from "../pages/tabla-ventas";
import FormularioProducto from "../pages/Formularios/formulario_producto";
import UserControl from "../pages/control/user-control";
import ClientControl from "../pages/control/client-control";
import DeliverymenControl from "../pages/control/deliverymen-control.js";
import { MainDishControl, ProductControl, SideDishControl } from "../pages/control/dish-control";
import FormularioUsuario from "../pages/Formularios/Formulario_usuario";
import FormularioContorno from "../pages/Formularios/Formulario_contorno";
import FormularioMenu from "../pages/Formularios/Formulario_menu";
import FormularioDelivery from "../pages/Formularios/FormularioDelivery";
import FormularioCliente from "../pages/Formularios/Formulario_cliente"; // Importa el formulario

// Cargamos el formulario de venta de forma lazy después de todas las importaciones estáticas:
const LazyFormularioVenta = React.lazy(() =>
    import("../pages/Formularios/Formulario_venta")
);

class Page {
    constructor(path, component, title = null, roles = AllRoles) {
        this.path = path;
        this.component = (
            <RestrictedPage page={component} permissions={roles} />
        );
        this.title = title;
        this.roles = roles;
    }
}


export const PageList = [
    new Page(PagePaths['Home'], <Home />, "Menú default"),
    new Page(PagePaths['Login'], <Login />, "Login"),
    new Page(PagePaths['InformacionVenta'], <InformacionVenta />, "informacion venta"),
    new Page(PagePaths['Pedido'], <Pedido />, "ventanaPedido"),
    new Page(PagePaths['ConfirmacionVenta'], <ConfirmacionVenta />, "Confirmacion Venta"),
    new Page(PagePaths['SignUp'], <Request title="Nuevo Ingreso" />, "Nuevo Ingreso"),
    new Page(PagePaths['PasswordChange'], <Request title="Nueva Contraseña" />, "Cambio de Contraseña"),
    new Page(PagePaths['AddUser'], <Users title="Agregar Usuario" />, "Agregar Usuario"),
    new Page(PagePaths['EditUser'], <Users title="Modificar Usuario" />, "Modificar Usuario"),
    new Page(PagePaths['AddClient'], <Clients title="Añadir Cliente" />, "Añadir Cliente"),
    new Page(PagePaths['EditClient'], <Clients title="Modificar Cliente" />, "Modificar Cliente"),
    new Page(PagePaths['TablaVentas'], <TablaVentas />, "Tabla de Ventas"),
    new Page(PagePaths['users-form'], <FormularioUsuario />, "Formulario de Usuario"),
    new Page(PagePaths['side-dish-form'], <FormularioContorno />, "Formulario de Contorno"),
    new Page(PagePaths['main-dish-form'], <FormularioMenu />, "Formulario de Menú"),
    new Page(PagePaths['product-form'], <FormularioProducto />, "Formulario de Producto"),
    new Page(PagePaths['deliverymen-form'], <FormularioDelivery />, "Formulario de Repartidor"),
    new Page(PagePaths['clients-form'], <FormularioCliente />, "Formulario de Cliente"),
    new Page(
        PagePaths['sales-form'],
        <Suspense fallback={<div>Cargando...</div>}>
            <LazyFormularioVenta isOpen={true} onClose={() => {}} onSubmit={() => {}} />
        </Suspense>,
        "Formulario de Venta"
    ),
    new Page(PagePaths['UserControl'], <UserControl />, "Tabla de Usuarios"),
    new Page(PagePaths['ClientControl'], <ClientControl />, "Tabla de Clientes"),
    new Page(PagePaths['MainDishControl'], <MainDishControl />, "Tabla de Menú"),
    new Page(PagePaths['SideDishControl'], <SideDishControl />, "Tabla de Contornos"),
    new Page(PagePaths['ProductControl'], <ProductControl />, "Tabla de Productos"),
    new Page(PagePaths['DeliverymenControl'], <DeliverymenControl />, "Tabla de Repartidores"),
];

export function GetPageFromPath(path) {
    return PageList.find(page => page.path === path);
}
