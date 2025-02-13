import TablePage from "../reusables/tablePage";

const fields = [ "Usuario", "Tipo", "Contraseña" ];

const data = [ 
    ["David", "Cocinero", "david123"],
    ["MartinezJ", "Cajero", "jesusD4Silva"],
    ["Rodrigo", "Admin", "1234567890"]
];

const UserControl = () => {
    return(
        <TablePage title={ "Control de Usuarios" } fields={ fields } data={ data } getAllEndpointPath={"/users/get"} />
    );
}

export default UserControl;