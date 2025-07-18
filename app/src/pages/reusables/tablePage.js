import { useState } from "react";
import "./tablePage.css";
import DashboardPage from "./dashboard-page";
import { PrimaryButton } from "../../components/ui/buttons.js";
import Table from '../../components/features/table.js';
import { SearchInputBox } from '../../components/ui/form.js'

function SearchBox({ onSearch }) {
    const [query, setQuery] = useState("");

    return(
        <div className="search-container">
            <SearchInputBox value={ query } textSetter={ setQuery } />
            <PrimaryButton text="Buscar" onClick={ () => onSearch(query) } />
        </div>
    );
}

function Header({ title, onNew, onSearch }) {
    return (
        <div className="table-page-header">
            <h1>{ title }</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <PrimaryButton text="Añadir" onClick={ onNew } />
                <SearchBox onSearch={ onSearch } />
            </div>
        </div>
    );
}

function getAllColumnNames(fields) {
    const names = [...fields];
    names.push("Acciones");
    return names;
}

export default function TablePage({ title, fields, data, setData, onEdit, onDelete, onNew, onSearch }) {

    const content = (data.length === 0) 
        ? <h1>No hay entradas</h1>
        : <Table fields={ getAllColumnNames(fields) } data={ data } onEdit={onEdit} onDelete={onDelete} />;

    return( 
        <DashboardPage 
            content={
                <>
                    <Header title={ title } onNew={ onNew } onSearch={ onSearch } />
                    { content }
                </>
            } 
        />
    );
}
