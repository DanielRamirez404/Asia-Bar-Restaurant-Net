import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModifyIDChanger } from "./session.js";

import { routes } from '../config/routes.js';

import { getTableData, onDelete } from '../utils/api.js';

export function useTableData(table) {
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const fetched = await getTableData(table.dbname);
        setData(fetched);
    };

    useEffect(() => {
        fetchData();
    }, [table.dbname]);

    return [data, setData];
}

export function useActionButtons(table) {
    const changeModifyId = useModifyIDChanger();
    const navigate = useNavigate();
    
    const onEditClick = (id) => {
        changeModifyId(id);
        navigate(routes['Formulario de Control']);
    };

    const onDeleteClick = (id, hideRow) => {
        onDelete(table.dbname, () => id, () => {
            alert("registro exitosamente eliminado");
            hideRow();
        });
    };

    return [onEditClick, onDeleteClick];
}

export function useHeaderButtons(table) {

}
