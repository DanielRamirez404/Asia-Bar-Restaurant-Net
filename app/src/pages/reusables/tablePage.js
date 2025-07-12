import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Info, Pencil, Search, Trash } from "lucide-react";
import "./tablePage.css";
import DashboardPage from "./dashboard-page";
import { getTableData } from "../../utils/api.js"
import { apiAddress } from '../../config/api.js'; 
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes.js';
import { useControlActionChanger } from "../../hooks/session.js";
import { PrimaryButton } from "../../components/ui/buttons.js";

function ActionButtons() {/*FUNCIONES DE LOS BOTONES DE LA TABLA */ 
    return (
        <div className="action-buttons-container">
            {/*<button className="action-button">
                <Info size={20} onClick={() => alert("Info")} />
            </button>*/}
            <button className="action-button">
                <Pencil size={20} onClick={() => alert("Editar")} />
            </button>
            <button className="action-button">
                <Trash size={20} onClick={() => alert("Eliminar")} />
            </button>
        </div>
    );
}

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
    const actionChanger = useControlActionChanger("POST");
    
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

function Header({ fields }) {
    return(
        <thead>
            <tr>{ fields.map((field, index) => (<th key={index}>{field}</th>)) }</tr>
        </thead>
    );
}

function Body({ data }) {
    return (
        <tbody>
            {data.map((row, index) => (
                <tr key={ index } >
                    { row.map((field, i) => ( <td key={i}>{ field }</td> )) }
                    <td> <ActionButtons /> </td>
                </tr>
            ))}
        </tbody>
    );
}

function Table({ fields, data }) {
    return(
        <table className="control-table">
            <Header fields={ fields } />
            <Body data={ data } />
        </table>
    );
}

function TablePage({ title, fields, tableName, data = []}) {
    let columnNames = [...fields];
    
    if (!columnNames.includes("Acciones"))
        columnNames.push("Acciones");

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTableData(tableName);
            setTableData(data);
        };

        fetchData();
    }, [tableName]);

    const content = (tableData.length === 0) ? 
        <h1>No hay entradas</h1> 
        :(
            <div className="table-container">
                <Table fields={ columnNames } data={ tableData } />
            </div>
        );

    return <DashboardPage content={
        <>
            <TablePageHeader 
                title={ title } dataSetter = { setTableData } tableName = { tableName }
            />
            { content }
        </>
    } />;
}

export default TablePage;
