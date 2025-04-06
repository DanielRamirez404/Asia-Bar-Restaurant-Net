import { useState } from "react";
import TablePage from "../reusables/tablePage";
import FormularioUsuario from "../Formularios/Formulario_usuario"; // Importa el formulario
import "../reusables/tablePage.css";

const fields = ["Usuario", "Tipo", "Contraseña"];

const UserControl = () => {
    const [showForm, setShowForm] = useState(false);

    const handleNewUserClick = () => {
        setShowForm(true); // Muestra el formulario de usuario
    };

    const handleCloseForm = () => {
        setShowForm(false); // Oculta el formulario
    };

    return (
        <>
            {showForm ? (
                <FormularioUsuario onClose={handleCloseForm} />
            ) : (
                <TablePage
                    title="Control de Usuarios"
                    fields={fields}
                    tableName="users"
                    newButtonText="Nuevo Usuario"
                    onNewButtonClick={handleNewUserClick}
                />
            )}
        </>
    );
};

export default UserControl;