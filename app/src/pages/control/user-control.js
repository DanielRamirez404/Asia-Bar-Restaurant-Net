import TablePage from "../reusables/tablePage";

const fields = [ "Usuario", "Tipo", "Contraseña" ];

const UserControl = () => {
    return(
        <TablePage title="Control de Usuarios" fields={ fields } tableName="users" />
    );
}

export default UserControl;
