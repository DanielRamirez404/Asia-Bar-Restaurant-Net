import { Pencil, Trash } from "lucide-react";
import './table.css';

function ButtonsBox({ id, onEdit, onDelete }) { 
    return (
        <td>
            <div className="action-buttons-container">
                <Pencil className="action-button" size={20} onClick={ () => onEdit(id) } />
                <Trash className="action-button" size={20} onClick={ () => onDelete(id) } />
            </div>
        </td>
    );
}

function BodyRow({ row, index, onEdit, onDelete, fields }) {

    const rowId = `row-${index}`;

    const onDeleteClick = (id) => onDelete(id, () => 
        document.getElementById(rowId).style.display = "none"
    );

    const isBool = (value) => typeof value === "object" && Object.hasOwn(value, "bool");

    const toBool = (value) => {
        console.log(value);
        return (value === 1) ? "Sí" : "No";
    }   
                
    return (
        <tr id={`row-${index}`}  key={ index } >
            { row.map((value, i) => {

                const isNumber = /^\d*\.?\d+$/.test(value);

                const isDecimal = isNumber && String(value).includes(".");

                return <td key={i}>{ isDecimal ? parseFloat(value).toFixed(2) : (fields && isBool(fields[i])) ? toBool(value) : value }</td>  
            })}
            <ButtonsBox id = { row[0] }  onEdit={ onEdit} onDelete={ onDeleteClick } /> 
        </tr>
    );
}

function Header({ fields }) {
    return(
        <thead>
            <tr>{ fields.map((field, index) => (<th key={index}>{field}</th>)) }</tr>
        </thead>
    );
}

function Body({ data, onEdit, onDelete, bodyFields }) {
    return (
        <tbody>
            {data.map((row, index) => <BodyRow row={row} index={index} onEdit={onEdit} onDelete={onDelete} fields={bodyFields}/> )}
        </tbody>
    );
}

export default function Table({ fields, data, onEdit, onDelete, bodyFields }) {
    return(
        <div className="table-container">
            <table className="control-table">
                <Header fields={ fields } />
                <Body data={ data } onEdit={onEdit} onDelete={onDelete} bodyFields={bodyFields}/>
            </table>
        </div>
    );
}
