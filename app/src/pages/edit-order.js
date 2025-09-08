import { useNavigate } from "react-router-dom";
import { useFormFields } from "../hooks/form.js";

import ControlForm from '../components/layout/control-form.js';

import { RequiredInput } from '../components/ui/form.js';

import { saleOptions } from '../config/tables.js';

import { routes } from '../config/routes.js';

function ControlFormPage() {

    const [values, setters] = useFormFields(3);
    
    const navigate = useNavigate();

    return (
        <ControlForm title={ "Venta #number" } onSubmit={ (e) => navigate(routes['Control de Ventas']) } > 
            <RequiredInput type="id" title="Identifiación del Cliente" onChange={setters[0]} value={values[0]} /> 
            <RequiredInput type="text" title="Nombre del Cliente" onChange={setters[1]} value={values[1]} /> 
            <RequiredInput type="combo" title="Tipo de Venta" onChange={setters[2]} value={values[2]} options={ saleOptions } /> 
        </ControlForm>
    );
};

export default ControlFormPage;
