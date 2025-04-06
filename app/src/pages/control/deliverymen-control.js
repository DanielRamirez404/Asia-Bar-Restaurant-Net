import { useState } from "react";
import TablePage from "../reusables/tablePage";
import FormularioDelivery from "../Formularios/FormularioDelivery";

const fields = ["Nombre del Repartidor", "Zona", "Disponibilidad", "Teléfono"];

const DeliverymenControl = () => {
    const [showForm, setShowForm] = useState(false);

    const handleNewDeliverymanClick = () => {
        setShowForm(true); // Muestra el formulario de repartidor
    };

    const handleCloseForm = () => {
        setShowForm(false); // Oculta el formulario
    };

    return (
        <>
            {showForm ? (
                <FormularioDelivery onClose={handleCloseForm} />
            ) : (
                <TablePage
                    title="Control de Repartidores"
                    fields={fields}
                    tableName="deliverymen"
                    newButtonText="Nuevo Repartidor"
                    onNewButtonClick={handleNewDeliverymanClick}
                />
            )}
        </>
    );
};

export default DeliverymenControl;