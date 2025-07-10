import { useNavigate } from "react-router-dom";
import useTable from "../hooks/useTable.js";
import useFormFields from "../hooks/useFormFields.js";

import { tables } from "../config/tables.js";

import ControlForm from '../components/layout/control-form.js';
import { RequiredInputBox } from '../components/ui/form.js';
import { routes } from '../config/routes.js';

import { onControlForm } from '../utils/api.js';

function ControlFormPage() {

    const table = useTable();
    const [fields, setters] = useFormFields(7);

    const titles = tables.find((found) => found.name === table.name).fields;
    
    const navigate = useNavigate();

    return (
        <ControlForm onSubmit={ (e) => onControlForm(e, table, fields, navigate) } title={ table.name } goBackPath={ routes['Control'] } 
            content = {(
                <>
                    { titles.map( (title, i) => (<RequiredInputBox title={title} textSetter={ setters[i] } />) ) } 
                </>
            )} 
        />
    );
};

export default ControlFormPage;
