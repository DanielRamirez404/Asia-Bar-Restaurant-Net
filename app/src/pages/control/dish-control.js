import React, { useState } from "react";
import TablePage from "../reusables/tablePage";
import FormularioProducto from "../Formularios/formulario_producto";
import FormularioMenu from "../Formularios/Formulario_menu";
import FormularioContorno from "../Formularios/Formulario_contorno";
import FormularioDelivery from "../Formularios/FormularioDelivery"; 
import "../Formularios/formulario.css"; // Importación del CSS

const mainDishFields = ["Nombre del Plato", "Categoría", "Disponibilidad", "Precio"];
const mainDishData = [
    ["Paella Valenciana", "Arroz", "Disponible", 25.00],
    ["Hamburguesa con Queso", "Carnes", "No Disponible", 12.50],
    ["Ensalada César", "Ensaladas", "Disponible", 8.00],
    ["Tacos al Pastor", "Tacos", "Disponible", 15.00]
];

export const MainDishControl = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <>
            {isFormOpen && <FormularioMenu onClose={toggleForm} />}
            <TablePage 
                title="Control de Menú" 
                fields={mainDishFields} 
                data={mainDishData}
                newButtonText="Nuevo Plato"
                onNewButtonClick={toggleForm}
            />
        </>
    );
};

const sideDishFields = ["Nombre", "Categoría", "Disponibilidad", "Precio"];
const sideDishData = [
    ["Papas Fritas", "Guarnición", "Disponible", 3.50],
    ["Ensalada Mixta", "Guarnición", "Disponible", 5.00],
    ["Arroz Blanco", "Acompañamiento", "Disponible", 2.00],
    ["Puré de Papas", "Guarnición", "No Disponible", 4.00],
    ["Vegetales al Vapor", "Saludable", "Disponible", 6.00]
];

export const SideDishControl = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <>
            {isFormOpen && <FormularioContorno onClose={toggleForm} />}
            <TablePage 
                title="Control de Contornos" 
                fields={sideDishFields} 
                data={sideDishData}
                newButtonText="Nuevo Contorno"
                onNewButtonClick={toggleForm}
            />
        </>
    );
};

const productFields = [ "Nombre", "Categoría", "Cantidad", "Disponibilidad", "Precio" ];
const productData = [
    ["Refresco de Cola", "Bebida", 27, "Disponible", 2.50],
    ["Agua Mineral", "Bebida", 32, "Disponible", 1.50],
    ["Papas Fritas", "Snack", 45, "Disponible", 3.00],
    ["Galletas", "Snack", 0, "No Disponible", 2.00],
    ["Helado", "Postre", 12, "Disponible", 4.00],
    ["Jugo de Naranja", "Bebida", 14, "Disponible", 3.50]
];

export const ProductControl = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <>
            {isFormOpen && <FormularioProducto onClose={toggleForm} />}
            <TablePage 
                title="Control de Productos" 
                fields={productFields} 
                data={productData}
                newButtonText="Nuevo Producto"
                onNewButtonClick={toggleForm}
            />
        </>
    );
};

const deliveryFields = ["Nombre del Repartidor", "Zona", "Disponibilidad", "Teléfono"];
const deliveryData = [
    ["Juan Pérez", "Zona 1", "Disponible", "123-456-7890"],
    ["María López", "Zona 2", "No Disponible", "098-765-4321"],
    ["Carlos García", "Zona 3", "Disponible", "456-789-0123"],
    ["Ana Martínez", "Zona 4", "Disponible", "321-654-0987"]
];

export const Deliverywork = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
        <>
            {isFormOpen && <FormularioDelivery onClose={toggleForm} />}
            <TablePage 
                title="Control de Repartidores" 
                fields={deliveryFields} 
                data={deliveryData}
                newButtonText="Nuevo Repartidor"
                onNewButtonClick={toggleForm}
            />
        </>
    );
};

