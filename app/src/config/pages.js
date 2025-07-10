import Page from "../utils/page.js";

import Home from "../pages/Inicio/Inicio";
import Login from "../pages/login";

import Pedido from "../pages/PatallaPedido/Pedido";

import InformacionVenta from "../pages/InformacionDeVenta/informacionDeVenta";
import ConfirmacionVenta from "../pages/ConfirmacionDeVenta/confirmacionVenta";

import ControlPage from "../pages/control.js";

import FormularioProducto from "../pages/Formularios/formulario_producto";
import FormularioUsuario from "../pages/Formularios/Formulario_usuario";
import FormularioContorno from "../pages/Formularios/Formulario_contorno";
import FormularioMenu from "../pages/Formularios/Formulario_menu";
import FormularioDelivery from "../pages/Formularios/FormularioDelivery";
import FormularioCliente from "../pages/Formularios/Formulario_cliente";
import FormularioVenta from "../pages/Formularios/Formulario_venta";

import ControlFormPage from '../pages/control-form.js';

import { names } from "./routes.js"

const components = [
    Home,
    Login,
    Pedido,
    ControlPage,
    InformacionVenta,
    ConfirmacionVenta,
    FormularioUsuario,
    FormularioContorno,
    FormularioMenu,
    FormularioProducto,
    FormularioDelivery,
    FormularioCliente,
    FormularioVenta,
    ControlFormPage,
]

export const pages = components.map((Component, index) => 
  new Page(names[index], <Component />)
);

console.log(pages);

export function getPageFromPath(path) {
    return pages.find((page) => page.path == path);
}
