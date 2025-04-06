import { useState } from "react";
import TablePage from "../reusables/tablePage";
import FormularioCliente from "../Formularios/Formulario_cliente";

const fields = ["Identificación", "Nombre", "Dirección", "Teléfono"];

const ClientControl = () => {
    const [showForm, setShowForm] = useState(false);

    const handleNewClientClick = () => {
        setShowForm(true); // Muestra el formulario de cliente
    };

    const handleCloseForm = () => {
        setShowForm(false); // Oculta el formulario
    };

    return (
        <>
            {showForm ? (
                <FormularioCliente onClose={handleCloseForm} />
            ) : (
                <TablePage
                    title="Control de Clientes"
                    fields={fields}
                    tableName="clients"
                    newButtonText="Nuevo Cliente"
                    onNewButtonClick={handleNewClientClick}
                />
            )}
        </>
    );
};

export default ClientControl;