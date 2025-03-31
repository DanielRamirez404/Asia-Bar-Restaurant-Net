import React, { useState } from "react";
import TablePage from "../reusables/tablePage";

const fields = [ "Usuario", "Tipo", "Contraseña" ];

const data = [ 
    ["David", "Cocinero", "david123"],
    ["MartinezJ", "Cajero", "jesusD4Silva"],
    ["Rodrigo", "Admin", "1234567890"]
];

// Componente principal para el control de usuarios
export const UserControl = () => {
    const [isFormOpen, setIsFormOpen] = useState(false); // Estado para controlar la visibilidad del formulario

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen); // Alterna la visibilidad del formulario
    };

    return (
        <>
            {/* Renderiza el formulario si está abierto */}
            {isFormOpen && <FormularioUsuario onClose={toggleForm} />}
            
            {/* Tabla con el botón "Nuevo Usuario" */}
            <TablePage
                title="Control de Usuarios"
                fields={userFields}
                data={userData}
                newButtonText="Nuevo Usuario"
                onNewButtonClick={toggleForm}
            />
        </>
    );
};

export default UserControl;