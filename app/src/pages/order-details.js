import { useState, useEffect } from 'react';
import { useOnDetailsSubmit, useDetailsGetter } from "../hooks/order.js";
import { useFormFields } from "../hooks/form.js";

import DashboardPage from "../components/layout/dashboard-page.js";
import Form from "../components/layout/form.js";

import { ClientInfo } from "../components/features/order/details.js";

import { SubmitButton } from '../components/ui/buttons.js';
import { RequiredIdInput, RequiredInputBox, RequiredSelector, DisabledInputBox } from '../components/ui/form.js';

import { routes } from '../config/routes.js';
import { saleOptions } from '../config/tables.js';

export default function OrderDetails() {
    
    const onSubmit = useOnDetailsSubmit();

    const [clientId, setClientId] = useState("");
    const [isNewClient, setNewClientStatus] = useState(true);
    
    const [newClientValues, newClientSetters] = useFormFields(3);
    const [typeValues, typeSetters] = useFormFields(2);

    const foundName = "Sample Text";

    const detailsGetter = useDetailsGetter(clientId, isNewClient, newClientValues[0], foundName, typeValues[0], typeValues[1]);
    
    return (
        <DashboardPage> 
            <Form onSubmit={ (e) => onSubmit(e, detailsGetter, routes['Pedido']) } title={ "Información de Venta" } >
                <>
                    <RequiredIdInput title={ "Documento de Identidad del Cliente" } onChange={ setClientId } value={ clientId } />
                  
                    <ClientInfo isNewClient={isNewClient} foundName={foundName} values={newClientValues} setters={newClientSetters} />

                    <RequiredSelector title={ "Tipo de Venta" } options={ saleOptions } onChange={ typeSetters[0] } value={ typeValues[0] } />  
                    
                    {   
                        (typeValues[0] === saleOptions[2]) ? 
                            <RequiredInputBox title={ "Dirección" } onChange={ typeSetters[1] } /> : null
                    } 

                    <SubmitButton text="Continuar" />
                </>
            </Form>
        </DashboardPage>
    );
}
