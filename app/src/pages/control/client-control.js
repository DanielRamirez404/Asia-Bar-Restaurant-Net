import TablePage from "../reusables/tablePage";

const fields = ["Identificación", "Nombre", "Dirección", "Teléfono" ];

const ClientControl = () => {
    return(
        <TablePage title="Control de Clientes" fields={ fields } tableName="clients"/>
    );
}

export default ClientControl;
