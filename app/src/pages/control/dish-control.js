import React, { useState } from "react";
import TablePage from "../reusables/tablePage";

const dishFields = ["Nombre", "Disponibilidad", "Precio", "Categoría", "Descripción"];
const productFields = ["Nombre", "Disponibilidad", "Precio", "Categoría", "Descripción", "Proveedor", "Cantidad"];

export const MainDishControl = () => {
    return (
        <TablePage title= "Control de Menú" fields={ dishFields } tableName="main-dish" />
    );
};

export const SideDishControl = () => {
    return (
        <TablePage title= "Control de Contornos" fields={ dishFields } tableName="side-dish" />
    );
};

export const ProductControl = () => {
    return (
        <TablePage title= "Control de Productos" fields={ productFields } tableName="product" />
    );
};

