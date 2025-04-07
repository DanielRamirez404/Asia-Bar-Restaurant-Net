import TablePage from "../reusables/tablePage";

const fields = ["Nombre del Repartidor", "Zona", "Disponibilidad", "Teléfono"];

const DeliverymenControl = () => {
    return (
        <TablePage title= "Control de Repartidores" fields={ fields } tableName="deliverymen" />
    );
};

export default DeliverymenControl;
