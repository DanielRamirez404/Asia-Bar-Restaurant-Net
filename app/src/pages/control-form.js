import { useNavigate } from "react-router-dom";
import useTable from "../hooks/useTable.js";
import { useFormFields, useFormValues } from "../hooks/form.js";
import { useModifyID } from "../hooks/session.js";

import ControlForm from '../components/layout/control-form.js';
import { RequiredInputBox } from '../components/ui/form.js';

import { onControlForm } from '../utils/api.js';

function ControlFormPage() {

    const table = useTable();
    const modifyID = useModifyID();
    const titles = table.fields;
    
    const [fields, setters] = useFormFields(7);
    useFormValues(table.dbname, modifyID, setters);
    
    const navigate = useNavigate();

    return (
        <ControlForm 
            title={ table.name }
            onSubmit={ (e) => onControlForm(e, table, fields, navigate, modifyID) }   
            content={(
                <>
                    { titles.map( (title, i) => (<RequiredInputBox title={title} textSetter={ setters[i] } value={ fields[i] } />) ) } 
                </>
            )} 
        />
    );
};

export default ControlFormPage;
