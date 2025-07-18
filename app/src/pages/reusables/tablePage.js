import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import "./tablePage.css";
import DashboardPage from "./dashboard-page";
import { apiAddress } from '../../config/api.js'; 
import { routes } from '../../config/routes.js';
import { useModifyIDChanger } from "../../hooks/session.js";
import { PrimaryButton } from "../../components/ui/buttons.js";
import Table from '../../components/features/table.js';
import { getTableData } from '../../utils/api.js';

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

function Header({title, tableName, dataSetter}) {
    const navigate = useNavigate();
    const actionChanger = useModifyIDChanger();
    
    const onClick = () => {
        actionChanger(null); 
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

export default function TablePage({ title, table, data, setData, onEdit, onDelete }) {
    const content = (data.length === 0) 
        ? <h1>No hay entradas</h1>
        : <Table fields={ getAllColumnNames(table) } data={ data } onEdit={onEdit} onDelete={onDelete} />;

    return( 
        <DashboardPage 
            content={
                <>
                    <Header title={ title } dataSetter={setData} tableName={ table.dbname } />
                    { content }
                </>
            } 
        />
    );
}
