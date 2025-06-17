export const FormPages = {
    'product-form': 'formulario-producto',
    'sales-form': '/formulario-venta',  
    'users-form': '/formulario-usuario',
    'side-dish-form': '/formulario-contorno',
    'main-dish-form': '/formulario-menu',
    'deliverymen-form': '/formulario-delivery',
    'clients-form': '/formulario-cliente', 
}

export let PagePaths = {
    'Home': '/inicio',
    'Example': '/link-de-ejemplo',
    'Login': '/login',
    'InformacionVenta': '/informacion_venta',
    'Pedido': '/Pedido',
    'ConfirmacionVenta': '/confirmacion_venta',
    'SignUp': '/solicitud-de-cuenta',
    'PasswordChange': '/cambio-de-contraseña',
    'AddUser': '/agregar-usuario',
    'EditUser': '/modificar-usuario',
    'AddClient': '/agregar-cliente',
    'EditClient': '/modificar-cliente', 
    'TablaVentas': '/tabla-ventas',  
    'UserControl': '/control-de-usuarios',
    'ClientControl': '/control-de-clientes',
    'ProductControl': '/control-de-productos',
    'SideDishControl': '/control-de-contornos',
    'MainDishControl': '/control-de-platos',
    'DeliverymenControl': '/control-de-repartidores',
};

Object.assign(PagePaths, FormPages);

export const DashboardMenuItems = [
    {
        title: "Control de Ventas",
        subItems: [ PagePaths['InformacionVenta'], PagePaths['TablaVentas'] ],
    },
    {
        title: "Control de Servicios",
        subItems: [ PagePaths['MainDishControl'], PagePaths['SideDishControl'], PagePaths['ProductControl'], PagePaths['DeliverymenControl'] ]
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
