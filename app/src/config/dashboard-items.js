import { DashboardSubItem } from "../utils/dashboard.js";

export const dashboardItems = [
    {
        title: "Control de Ventas",
        subItems: [ 
            new DashboardSubItem('Informacion de Venta', 'Ventas'), 
            new DashboardSubItem('Control de Ventas', 'Ventas') 
        ] 
    },
    {
        title: "Control de Servicios",
        subItems: [ 
            new DashboardSubItem('Control de Menu', 'Menú'), 
            new DashboardSubItem('Control de Contornos', 'Contornos'),
            new DashboardSubItem('Control de Productos', 'Productos'),
            new DashboardSubItem('Control de Repartidores', 'Repartidores'),
        ] 
    },
    {
        title: "Control de Clientes",
        subItems: [ new DashboardSubItem('Control de Clientes', 'Clientes') ] 
    },
    {
        title: "Control de Usuarios",
        subItems: [ new DashboardSubItem('Control de Usuarios', 'Usuarios') ] 
    },
];
