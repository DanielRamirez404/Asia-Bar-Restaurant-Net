import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getTableData, onDelete } from '../utils/api.js';

import { successAlert } from '../utils/alerts.js';

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
    const onInfo = () => {

    }; 

    const onDeleteClick = (id, hideRow) => {
        onDelete('sales', () => id, () => {
            successAlert("Completado", "Registro exitosamente eliminado");
            hideRow();
        });
    };

    return [onDeleteClick, onInfo];
}
