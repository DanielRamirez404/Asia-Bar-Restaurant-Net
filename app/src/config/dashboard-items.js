import { routes } from "./routes.js"

export const dashboardItems = [
    {
        title: "Control de Ventas",
        subItems: [ routes['Informacion de Venta'], routes['Tabla de Ventas'] ],
    },
    {
        title: "Control de Servicios",
        subItems: [ routes['Control de Menu'], routes['Control de Contornos'], routes['Control de Productos'], routes['Control de Repartidores'] ]
    },
    {
        title: "Control de Clientes",
        subItems: [ routes['Control de Clientes'] ]
    },
    {
        title: "Control de Usuarios",
        subItems: [ routes['Control de Usuarios'] ]
    },
];
