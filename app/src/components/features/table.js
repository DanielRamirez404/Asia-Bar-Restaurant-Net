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

function BodyRow({ row, index, onEdit, onDelete }) {

    const rowId = `row-${index}`;

    const onDeleteClick = (id) => onDelete(id, () => 
        document.getElementById(rowId).style.display = "none"
    );

    return (
        <tr id={`row-${index}`}  key={ index } >
            { row.map((value, i) => {
                
                const isNumber = /^\d*\.?\d+$/.test(value);

                const isDecimal = isNumber && String(value).includes(".");

                return <td key={i}>{ isDecimal ? parseFloat(value).toFixed(2) : value }</td>  
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

function Body({ data, onEdit, onDelete }) {
    return (
        <tbody>
            {data.map((row, index) => <BodyRow row={row} index={index} onEdit={onEdit} onDelete={onDelete} /> )}
        </tbody>
    );
}

export default function Table({ fields, data, onEdit, onDelete }) {
    return(
        <div className="table-container">
            <table className="control-table">
                <Header fields={ fields } />
                <Body data={ data } onEdit={onEdit} onDelete={onDelete} />
            </table>
        </div>
    );
}
