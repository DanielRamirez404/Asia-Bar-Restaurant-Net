import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getTableData, getRegisterData, onDelete } from '../utils/api.js';

import { successAlert, productsAlert } from '../utils/alerts.js';

import { routes } from '../config/routes.js';

export function useData() {
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const fetched = await getTableData('sales');
        setData(fetched);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [data, setData];
}

export function useHeaderButtons(setData) {
    const navigate = useNavigate();
    
    const onNew = (id) => navigate(routes['Informacion de Venta']);

    const onSearch = async (id) => {
        const fetched = await getTableData(`search/sales/${id}`);
        setData(fetched);
    };

    return [onNew, onSearch];
}

export function useActionButtons() {
    const onInfo = (id) => {
        
        const loadAndshowAlert = async () => {
            const fetched = await getRegisterData('sales/details', id); 
            const products = fetched[4];

            const productsArray = [];

            products.map((product) => productsArray.push([
                product.Name, 
                Number.parseFloat(product.Price).toFixed(2),
                product.Quantity
            ]));

            productsAlert(productsArray);
        };

        loadAndshowAlert();
    }; 

    const onDeleteClick = (id, hideRow) => {
        onDelete('sales', () => id, () => {
            successAlert("Completado", "Registro exitosamente eliminado");
            hideRow();
        });
    };

    return [onDeleteClick, onInfo];
}
