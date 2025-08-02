import { useNavigate } from "react-router-dom";
import useTable from "../hooks/useTable.js";
import { useFormFields, useFormValues } from "../hooks/form.js";
import { useModifyID } from "../hooks/session.js";

import ControlForm from '../components/layout/control-form.js';
import { RequiredInputBox } from '../components/ui/form.js';

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

                const inputTitle = (type === "text") ? title : (type == "number") ? title.number : "";

                return <RequiredInputBox key={title} type={ type } title={ inputTitle } textSetter={ setters[i] } value={ value } /> 
            })}
        </ControlForm>
    );
};

export default ControlFormPage;
