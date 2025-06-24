import Page from "../utils/page.js";

import Home from "../pages/Inicio/Inicio";
import Login from "../pages/login";

import Pedido from "../pages/PatallaPedido/Pedido";

import InformacionVenta from "../pages/InformacionDeVenta/informacionDeVenta";
import ConfirmacionVenta from "../pages/ConfirmacionDeVenta/confirmacionVenta";
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
import FormularioCliente from "../pages/Formularios/Formulario_cliente";
import FormularioVenta from "../pages/Formularios/Formulario_venta";

import { names } from "./routes.js"

const components = [
    Home,
    Login,
    Pedido,
    TablaVentas,
    InformacionVenta,
    ConfirmacionVenta,
    FormularioUsuario,
    FormularioContorno,
    FormularioMenu,
    FormularioProducto,
    FormularioDelivery,
    FormularioCliente,
    FormularioVenta,
    UserControl,
    ClientControl,
    MainDishControl,
    SideDishControl,
    ProductControl,
    DeliverymenControl,
]

export const pages = components.map((Component, index) => 
  new Page(names[index], <Component />)
);

console.log(pages);

export function getPageFromPath(path) {
    return pages.find((page) => page.path == path);
}
