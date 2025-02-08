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
    'ClientControl': '/control-de-clientes',
    'ProductControl': '/control-de-productos',
    'SideDishControl': '/control-de-contornos',
    'MainDishControl': '/control-de-platos',
};

export const DashboardMenuItems = [
    {
        title: "Control de Ventas",
        subItems: [ PagePaths['InformacionVenta'], PagePaths['TablaVentas'] ],
    },
    {
        title: "Control de Servicios",
        subItems: [ PagePaths['MainDishControl'], PagePaths['SideDishControl'], PagePaths['ProductControl'] ]
    },
    {
        title: "Control de Clientes",
        subItems: [ PagePaths['ClientControl'] ]
    },
    {
        title: "Control de Usuarios",
        subItems: [ PagePaths['UserControl'] ]
    },
];

export const DashboardPageOrder = [ PagePaths['Home'] ];
