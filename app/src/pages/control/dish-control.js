import React, { useState } from "react";
import TablePage from "../reusables/tablePage";

const dishFields = ["Nombre", "Disponibilidad", "Precio", "Categoría", "Descripción"];

export const MainDishControl = () => {
    return (
        <>
            <TablePage title= "Control de Menú" fields={ dishFields } tableName="main-dish" />
        </>
    );
};

export const SideDishControl = () => {
    return (
        <>
            <TablePage title= "Control de Contornos" fields={ dishFields } tableName="side-dish" />
        </>
    );
};


const productFields = ["Nombre", "Disponibilidad", "Precio", "Categoría", "Descripción", "Proveedor", "Cantidad"];

export const ProductControl = () => {
    return (
        <>
            <TablePage title= "Control de Productos" fields={ productFields } tableName="product" />
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
    return (
        <>
            <TablePage 
                title="Control de Repartidores" 
                fields={deliveryFields} 
                data={deliveryData}
                newButtonText="Nuevo Repartidor"
            />
        </>
    );
};

