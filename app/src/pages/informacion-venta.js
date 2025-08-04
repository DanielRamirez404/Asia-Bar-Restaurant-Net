import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useOrderInfoChanger, useOrderClearer } from "../hooks/order.js";
import { useFormFields } from "../hooks/form.js";

import DashboardPage from "./reusables/dashboard-page.js";
import Form from "../components/layout/form.js";

import { SubmitButton } from '../components/ui/buttons.js';
import { RequiredInputBox, RequiredSelector } from '../components/ui/form.js';

import { routes } from '../config/routes.js';
import { saleOptions } from '../config/tables.js';

function onSubmitInfo(e, navigate, infoChanger, clearer) {
    e.preventDefault();

    clearer();
    infoChanger();

    navigate(routes['Pedido']);
}

export default function InformacionVenta() {
    
    const clearer = useOrderClearer();    

    const [values, setters] = useFormFields(4);

    const infoChanger = useOrderInfoChanger(values[0], values[1], values[2], values[3]);
    const navigate = useNavigate();
    
    return (
        <DashboardPage 
            content={
                <Form onSubmit={ (e) => onSubmitInfo(e, navigate, infoChanger, clearer) } title={ "Información de Venta" } >
                    <>
                        <RequiredInputBox title={ "Documento de Identidad del Cliente" } textSetter={ setters[0] } />
                        <RequiredInputBox title={ "Nombre del Cliente" } textSetter={ setters[1] } />
                        <RequiredSelector title={ "Tipo de Venta" } options={ saleOptions } textSetter={ setters[2] } />  
                        
                        {   
                            (values[2] === saleOptions[2]) 
                                ? <RequiredInputBox title={ "Dirección" } textSetter={ setters[3] } value={ values[3] } />
                                : null
                        } 

                        <SubmitButton text="Continuar" />
                    </>
                </Form>
            } 
        />
    );
}
