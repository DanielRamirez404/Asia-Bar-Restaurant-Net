import React, { useState } from "react";
import TablePage from "../reusables/tablePage";
import FormularioMenu from "../Formularios/Formulario_menu";
import FormularioContorno from "../Formularios/Formulario_contorno";
import FormularioProducto from "../Formularios/formulario_producto";
import "../reusables/tablePage.css";

const dishFields = ["Nombre", "Disponibilidad", "Precio", "Categoría", "Descripción"];
const productFields = ["Nombre", "Disponibilidad", "Precio", "Categoría", "Descripción", "Proveedor", "Cantidad"];

export const MainDishControl = () => {
    const [showForm, setShowForm] = useState(false);

    const handleNewDishClick = () => {
        setShowForm(true); // Muestra el formulario de menú
    };

    const handleCloseForm = () => {
        setShowForm(false); // Oculta el formulario
    };

    return (
        <>
            {showForm ? (
                <FormularioMenu onClose={handleCloseForm} />
            ) : (
                <TablePage
                    title="Control de Menú"
                    fields={dishFields}
                    tableName="main-dish"
                    newButtonText="Nuevo Plato Principal"
                    onNewButtonClick={handleNewDishClick}
                />
            )}
        </>
    );
};

export const SideDishControl = () => {
    const [showForm, setShowForm] = useState(false);

    const handleNewSideDishClick = () => {
        setShowForm(true); // Muestra el formulario de contorno
    };

    const handleCloseForm = () => {
        setShowForm(false); // Oculta el formulario
    };

    return (
        <>
            {showForm ? (
                <FormularioContorno onClose={handleCloseForm} />
            ) : (
                <TablePage
                    title="Control de Contornos"
                    fields={dishFields}
                    tableName="side-dish"
                    newButtonText="Nuevo Contorno"
                    onNewButtonClick={handleNewSideDishClick}
                />
            )}
        </>
    );
};

export const ProductControl = () => {
    const [showForm, setShowForm] = useState(false);

    const handleNewProductClick = () => {
        setShowForm(true); // Muestra el formulario de producto
    };

    const handleCloseForm = () => {
        setShowForm(false); // Oculta el formulario
    };

    return (
        <>
            {showForm ? (
                <FormularioProducto onClose={handleCloseForm} />
            ) : (
                <TablePage
                    title="Control de Productos"
                    fields={productFields}
                    tableName="product"
                    newButtonText="Nuevo Producto"
                    onNewButtonClick={handleNewProductClick}
                />
            )}
        </>
    );
};