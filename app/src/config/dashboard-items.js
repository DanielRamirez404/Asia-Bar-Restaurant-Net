import { DashboardSubItem } from "../utils/dashboard.js";

export const dashboardItems = [
    {
        title: "Control de Ventas",
        subItems: [ new DashboardSubItem('Informacion de Venta', 'clients') ], 
        subItems: [ new DashboardSubItem('Control de Ventas', 'clients') ] 
    },
    {
        title: "Control de Servicios",
        subItems: [ 
            new DashboardSubItem('Control de Menu', 'main-dish'), 
            new DashboardSubItem('Control de Contornos', 'side-dish'),
            new DashboardSubItem('Control de Productos', 'product'),
            new DashboardSubItem('Control de Repartidores', 'deliverymen'),
        ] 
    },
    {
        title: "Control de Clientes",
        subItems: [ new DashboardSubItem('Control de Clientes', 'clients') ] 
    },
    {
        title: "Control de Usuarios",
        subItems: [ new DashboardSubItem('Control de Usuarios', 'users') ] 
    },
];
