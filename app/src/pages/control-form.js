import useTable from "../hooks/useTable.js";
import useFormFields from "../hooks/useFormFields.js";

import ControlForm from '../components/layout/control-form.js';
import { RequiredInputBox } from '../components/ui/form.js';
import { routes } from '../config/routes.js';

function ControlFormPage() {

    const table = useTable();
    const [fields, setters] = useFormFields(2);

    return (
        <ControlForm onSubmit={ (e) => alert(fields[0]) } title={ table.name } goBackPath={ routes['Control'] } 
            content= { table.name === "Usuarios" ? 
                (<>
                    <RequiredInputBox title={"Usuario"} textSetter={ setters[0] } />
                    <RequiredInputBox title={"Contraseña"} textSetter={ setters[1] } />
                </>) : null} 
        />
    );
};

export default ControlFormPage;
