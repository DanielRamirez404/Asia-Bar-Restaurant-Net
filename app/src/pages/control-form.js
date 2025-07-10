import useTable from "../hooks/useTable.js";
import useFormFields from "../hooks/useFormFields.js";

import { tables } from "../config/tables.js";

import ControlForm from '../components/layout/control-form.js';
import { RequiredInputBox } from '../components/ui/form.js';
import { routes } from '../config/routes.js';

function ControlFormPage() {

    const table = useTable();
    const [fields, setters] = useFormFields(7);

    const foundTitles = tables.find((found) => found.name === table.name).fields;
    const titles = foundTitles.slice(0, -1);

    return (
        <ControlForm onSubmit={ (e) => alert(fields[0]) } title={ table.name } goBackPath={ routes['Control'] } 
            content = {(
                <>
                    { titles.map( (title, i) => (<RequiredInputBox title={title} textSetter={ setters[i] } />) ) } 
                </>
            )} 
        />
    );
};

export default ControlFormPage;
