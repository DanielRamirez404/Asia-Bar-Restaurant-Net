import { useNavigate } from "react-router-dom";
import useTable from "../hooks/useTable.js";
import { useFormFields, useFormValues } from "../hooks/form.js";
import { useModifyID } from "../hooks/session.js";

import ControlForm from '../components/layout/control-form.js';

import { 
    RequiredInputBox, 
    RequiredNumberBox, 
    RequiredSelector, 
    RequiredBoolean,
    RequiredOptionalSelector
} from '../components/ui/form.js';

import { onControlForm } from '../utils/api.js';

import { fieldTypes } from '../config/tables.js';

function ControlFormPage() {

    const table = useTable();
    const modifyID = useModifyID();
    const titles = table.fields;
    
    const [fields, setters] = useFormFields(7);
    useFormValues(table.dbname, modifyID, setters);
    
    const navigate = useNavigate();

    return (
        <ControlForm title={ table.name } onSubmit={ (e) => onControlForm(e, table, fields, navigate, modifyID) } > 
            { titles.map( (title, i) => {
        
                const value = fields[i];
                
                const type = fieldTypes.find((type) => Object.hasOwn(title, type)) ?? "text";
                const inputTitle = type === "text" ? title : title[type];

                const mandatory = {
                    title: inputTitle,
                    textSetter: setters[i],
                    value: value
                };

                return( 
                    type === "text" ?
                        <RequiredInputBox key={ title } {...mandatory} /> :
                    type === "number" ? 
                        <RequiredNumberBox key={ title[type] } isDecimal={ true } {...mandatory} /> :
                    type === "int" ? 
                        <RequiredNumberBox key={ title[type] } {...mandatory} /> :
                    type === "combo" ?
                        <RequiredSelector key={ title[type] } options={ title.options } value={ value } {...mandatory} /> :
                    type === "bool" ?
                        <RequiredBoolean key={ title } {...mandatory} /> :
                    type === "pseudocombo" ? 
                        <RequiredOptionalSelector key={ title } options={ title.options } {...mandatory} /> : null
                );
            })}
        </ControlForm>
    );
};

export default ControlFormPage;
