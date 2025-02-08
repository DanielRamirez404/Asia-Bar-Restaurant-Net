import TablaVentas from "../pages/tabla-ventas";
import FormularioProducto from "../pages/Formularios/formulario_prod";

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
    'FormularioProducto': 'formulario-producto', // Añadir la ruta para FormularioProducto
};

export const DashboardMenuItems = [
    {
        title: "Control de Ventas",
        subItems: [PagePaths['InformacionVenta'], PagePaths['TablaVentas'], PagePaths['FormularioProducto']] // Añadir FormularioProducto al menú
    },
];

export const DashboardPageOrder = [ PagePaths['Home'] ];