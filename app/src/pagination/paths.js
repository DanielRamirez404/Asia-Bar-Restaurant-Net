import TablaVentas from "../pages/tabla-ventas";

export const PagePaths = {
    'Home': '/menu',
    'Example': '/link-de-ejemplo',
    'Login': '/login',
    'InformacionVenta': '/informacion_venta',
    'Pedido': '/Pedido',
    'ConfirmacionVenta':'/confirmacion_venta',
    'SignUp': '/solicitud-de-cuenta',
    'PasswordChange': '/cambio-de-contraseña',
    'AddUser': '/agregar-usuario',
    'EditUser': '/modificar-usuario',
    'AddClient': '/agregar-cliente',
    'EditClient': '/modificar-cliente', 
    'TablaVentas' : '/tabla-ventas',
};

export const DashboardMenuItems = [
    {
        title: "Control de Ventas",
        subItems: [PagePaths['InformacionVenta'], PagePaths['TablaVentas']]
    },
];

export const DashboardPageOrder = [ PagePaths['Home'] ];