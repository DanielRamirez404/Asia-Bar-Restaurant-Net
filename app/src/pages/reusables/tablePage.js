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

function ActionButtons({ id, tableName, onDeleteRegister }) { 
     
    const actionChanger = useModifyIDChanger(id);
    const navigate = useNavigate();

    const onEditClick = () => {
        actionChanger();
        navigate(routes['Formulario de Control']);
    };

    const onDeleteSubmit = (e) => {
        onDelete(e, tableName, () => id, () => { 
            alert("registro exitosamente eliminado")
            onDeleteRegister();
        });
    }

    return (
        <form onSubmit={onDeleteSubmit} className="action-buttons-container">
            <button className="action-button">
                <Pencil size={20} onClick={onEditClick} />
            </button>
            <button className="action-button" type="submit">
                <Trash size={20} />
            </button>
        </form>
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

function Header({ fields }) {
    return(
        <thead>
            <tr>{ fields.map((field, index) => (<th key={index}>{field}</th>)) }</tr>
        </thead>
    );
}

function Body({ data, tableName }) {

    const hideRegister = (id) => {
       document.getElementById(id).style.display = "none"; 
    };

    return (
        <tbody>
            {data.map((row, index) => (
                <tr id={`register-${index}`}  key={ index } >
                    { row.map((field, i) => ( <td key={i}>{ field }</td> )) }
                    <td> 
                        <ActionButtons id = { row[0] } tableName={ tableName } onDeleteRegister={ () => hideRegister(`register-${index}`) } /> 
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

function Table({ fields, data, tableName, fetchData }) {
    return(
        <table className="control-table">
            <Header fields={ fields } />
            <Body data={ data } tableName={ tableName } fetchData={ fetchData } />
        </table>
    );
}

function TablePage({ title, fields, tableName, data = []}) {
    let columnNames = [...fields];
    
    if (!columnNames.includes("Acciones"))
        columnNames.push("Acciones");

    const [tableData, setTableData] = useState([]);
    
    const fetchData = async () => {
        const data = await getTableData(tableName);
        setTableData(data);
    };

    useEffect(() => {
        fetchData();
    }, [tableName]);

    const content = (tableData.length === 0) ? 
        <h1>No hay entradas</h1> 
        :(
            <div className="table-container">
                <Table fields={ columnNames } data={ tableData } tableName={ tableName } />
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
