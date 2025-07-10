import Page from "../utils/page.js";

import Home from "../pages/Inicio/Inicio";
import Login from "../pages/login";

import Pedido from "../pages/PatallaPedido/Pedido";

import InformacionVenta from "../pages/InformacionDeVenta/informacionDeVenta";
import ConfirmacionVenta from "../pages/ConfirmacionDeVenta/confirmacionVenta";

import ControlPage from "../pages/control.js";
import ControlFormPage from '../pages/control-form.js';

import { names } from "./routes.js"

const components = [
    Home,
    Login,
    Pedido,
    InformacionVenta,
    ConfirmacionVenta,
    ControlPage,
    ControlFormPage,
]

export const pages = components.map((Component, index) => 
  new Page(names[index], <Component />)
);

console.log(pages);

export function getPageFromPath(path) {
    return pages.find((page) => page.path == path);
}
