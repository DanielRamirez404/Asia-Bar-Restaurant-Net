import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Info, Pencil, Search, Trash } from "lucide-react";
import "./tablePage.css";
import DashboardPage from "./dashboard-page";
import { getTableData, onDelete } from "../../utils/api.js"
import { apiAddress } from '../../config/api.js'; 
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes.js';
import { useModifyIDChanger } from "../../hooks/session.js";
import { PrimaryButton } from "../../components/ui/buttons.js";
import Table from '../../components/features/table.js';

function TablePageSearch({dataSetter, tableName}) {
    const [searchQuery, setsearchQuery] = useState("");

    const onClick = () => {
        const searchData = async function(apiAddress, tableName, searchQuery) {

            const query = (searchQuery == "") ? `${apiAddress}/${tableName}` : `${apiAddress}/${tableName}/search/${searchQuery}`; 

            const data = await getTableData(tableName, searchQuery);
            dataSetter(data);
        }

        searchData(apiAddress, tableName, searchQuery);
    };

    return(
        <div className="search-container">
            <Search className="search-icon" />
            <input
                type="text"
                className="entrada-busqueda"
                placeholder="Buscar"
                value={ searchQuery }
                onChange={ (e) => setsearchQuery(e.target.value) }
            />
            <PrimaryButton text="Buscar" onClick={onClick} />
        </div>
    );
}

function TablePageHeader({title, tableName, dataSetter}) {
    const navigate = useNavigate();
    const actionChanger = useModifyIDChanger(null);
    
    const onClick = () => {
        actionChanger(); 
        navigate(routes['Formulario de Control']);
    };

    return (
        <div className="table-page-header">
            <h1>{ title }</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <PrimaryButton text="Añadir" onClick={ onClick } />
                <TablePageSearch tableName={tableName} dataSetter={dataSetter}/>
            </div>
        </div>
    );
}

function getAllColumnNames(table) {
    const names = [...table.fields];
    names.push("Acciones");
    return names;
}

export default function TablePage({ title, table }) {
    
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const fetched = await getTableData(table.dbname);
        setData(fetched);
    };

    useEffect(() => {
        fetchData();
    }, [table.dbname]);

    const content = (data.length === 0) ? 
        <h1>No hay entradas</h1> 
        :(
            <Table fields={ getAllColumnNames(table) } data={ data } tableName={ table.dbname } />
        );

    return( 
        <DashboardPage 
            content={
                <>
                    <TablePageHeader title={ title } dataSetter={setData} tableName={ table.name } />
                    { content }
                </>
            } 
        />
    );
}
