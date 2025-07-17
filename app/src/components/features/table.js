import { useNavigate } from "react-router-dom";
import { useModifyIDChanger } from "../../hooks/session.js";

import { onDelete } from "../../utils/api.js"

import { routes } from '../../config/routes.js';

import { Pencil, Trash } from "lucide-react";
import './table.css';

function ActionButtons({ id, tableName, onDeleteRegister }) { 
     
    const actionChanger = useModifyIDChanger(id);
    const navigate = useNavigate();

    const onEditClick = () => {
        actionChanger();
        navigate(routes['Formulario de Control']);
    };

    const onDeleteClick = () => {
        onDelete(tableName, () => id, () => {
            alert("registro exitosamente eliminado")
            onDeleteRegister();
        });
    }

    return (
        <div className="action-buttons-container">
            <Pencil className="action-button" size={20} onClick={onEditClick} />
            <Trash className="action-button" size={20} onClick={onDeleteClick} />
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

export default function Table({ fields, data, tableName, fetchData }) {
    return(
        <div className="table-container">
            <table className="control-table">
                <Header fields={ fields } />
                <Body data={ data } tableName={ tableName } fetchData={ fetchData } />
            </table>
        </div>
    );
}
