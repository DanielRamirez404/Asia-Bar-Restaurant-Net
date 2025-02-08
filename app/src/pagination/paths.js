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
    'FormularioProducto': 'formulario-producto',
    'UserControl': '/control-de-usuarios',
};

export const DashboardMenuItems = [
    {
        title: "Control de Ventas",
        subItems: [ PagePaths['InformacionVenta'], PagePaths['TablaVentas'] ],
    },
    {
        title: "Usuarios",
        subItems: [ PagePaths['UserControl'] ]
    }
];

export const DashboardPageOrder = [ PagePaths['Home'] ];
