import React, { useState, useRef } from "react";
import { Info, Pencil, Search, Trash } from "lucide-react";
import "./tablePage.css";
import DashboardPage from "./dashboard-page";

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

function TablePageSearch() {
    const [searchQuery, setSearchQuery] = useState("");
    const inputRef = useRef(null);

    return(
        <div className="search-container">
            <Search className="search-icon" />
            <input
                type="text"
                className="entrada-busqueda"
                placeholder="Buscar"
                value={ searchQuery }
                onChange={ (e) => setSearchQuery(e.target.value) }
                ref={ inputRef }
            />
            <button onClick={ () => alert("Query: " + searchQuery) } className="search-button">Buscar</button>
        </div>
    );
}

function TablePageHeader({ title, newButtonText = "", onNewButtonClick = () => {} }) {
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
                <TablePageSearch />
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

function TablePage({ title, fields, data, newButtonText, onNewButtonClick }) {
    let columnNames = fields;
    
    if (!columnNames.includes("Acciones"))
        columnNames.push("Acciones");

    const [tableData, setTableData] = useState(data);
    
    return <DashboardPage content={
        <>
            <TablePageHeader 
                title={ title }
                newButtonText={newButtonText}
                onNewButtonClick={onNewButtonClick}
            />
            <div className="table-container">
                <Table fields={ columnNames } data={ tableData } />
            </div>
        </>
    } />;
}

export default TablePage;