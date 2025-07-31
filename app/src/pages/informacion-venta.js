import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useOrderInfo, useOrderInfoChanger } from "../hooks/order.js";
import { useFilledFormFields } from "../hooks/form.js";

import DashboardPage from "./reusables/dashboard-page.js";
import Form from "../components/layout/form.js";

import { SubmitButton } from '../components/ui/buttons.js';
import { RequiredInputBox, RequiredSelector } from '../components/ui/form.js';

import { routes } from '../config/routes.js';

function onSubmitInfo(e, navigate, infoChanger) {
    e.preventDefault();

    infoChanger();

    navigate(routes['Pedido']);
}

export default function InformacionVenta({}) {
    const getInfo = useOrderInfo(); 
    const [values, setters] = useFilledFormFields(4, getInfo);

    const saleTypes = ["Comer aquí", "Para llevar", "Delivery"];

    const infoChanger = useOrderInfoChanger(values[0], values[1], values[2], values[3]);
    const navigate = useNavigate();
    
    return (
        <DashboardPage 
            content={
                <Form onSubmit={ (e) => onSubmitInfo(e, navigate, infoChanger) } title={ "Información de Venta" } >
                    <>
                        <RequiredInputBox title={ "Documento de Identidad del Cliente" } textSetter={ setters[0] } value={ values[0] } />
                        <RequiredInputBox title={ "Nombre del Cliente" } textSetter={ setters[1] } value={ values[1] } />
                        <RequiredSelector title={ "Tipo de Venta" } options={ saleTypes } textSetter={ setters[2] } value={ values[2] } />  
                        
                        {   
                            (values[2] === saleTypes[2]) 
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
