import React, { useState, useEffect, useRef } from "react";
import { Info, Pencil, Search, Trash } from "lucide-react";
import "./tablePage.css";
import DashboardPage from "./dashboard-page";
import { getTableData } from "../../on-fetch-endpoints/table-fetching.js"
import { serverAddress } from '../../constants/constants.js'; 

function ActionButtons() {
    return (
        <div className="action-buttons-container">
            <button className="action-button">
                <Info size={20} />
            </button>
            <button className="action-button">
                <Pencil size={20} />
            </button>
            <button className="action-button">
                <Trash size={20} />
            </button>
        </div>
    );
}

function TablePageSearch({dataSetter, tableName}) {
    const [searchQuery, setsearchQuery] = useState("");

    const onClick = () => {
        const searchData = async function(serverAddress, tableName, searchQuery) {

            const query = (searchQuery == "") ? `${serverAddress}/${tableName}` : `${serverAddress}/${tableName}/search/${searchQuery}`; 

            const data = await getTableData(query);
            dataSetter(data);
        }

        searchData(serverAddress, tableName, searchQuery);
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
            <button onClick={onClick} className="search-button">Buscar</button>
        </div>
    );
}

function TablePageHeader({title, newButtonText = "", onNewButtonClick = () => {}, tableName, dataSetter}) {
    return (
        <div className="table-page-header">
            <h1>{ title }</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                {newButtonText && onNewButtonClick && (
                    <button 
                        onClick={onNewButtonClick} 
                        className="new-button"
                    >
                        {newButtonText}
                    </button>
                )}
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

function TablePage({ title, fields, tableName = null, newButtonText, onNewButtonClick, data = []}) {
    let columnNames = fields;
    
    if (!columnNames.includes("Acciones"))
        columnNames.push("Acciones");

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTableData(`${serverAddress}/${tableName}`);
            setTableData(data);
        };

        fetchData();
    }, [];

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
                
                newButtonText={ newButtonText }
                onNewButtonClick={ onNewButtonClick }
            />
            { content }
        </>
    } />;
}

export default TablePage;
