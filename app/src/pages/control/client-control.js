import TablePage from "../reusables/tablePage";

const fields = [ "Nombre", "Identificación", "Dirección", "Teléfono" ];

const data = [ 
    ["David Rodriguez", "V-27.121.122", "Barcelona", "0414-1112222"],
    ["Luisa Jiménez", "V-11.121.122", "PLC", "0424-1112222"],
    ["Panificadora El Gallo", "J-14386741-213", "Lechería", "0412-1234567"],
];

const ClientControl = () => {
    return(
        <TablePage title={ "Control de Clientes" } fields={ fields } data={ data }/>
    );
}

export default ClientControl;