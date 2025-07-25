import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useOrderInfoChanger } from "../hooks/order.js";

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
    const saleTypes = ["Comer aquí", "Para llevar", "Delivery"];
    
    const [clientID, setClientID] = useState("");
    const [type, setType] = useState(saleTypes[0]);

    const infoChanger = useOrderInfoChanger(clientID, type);
    const navigate = useNavigate();
    
    return (
        <DashboardPage 
            content={
                <Form onSubmit={ (e) => onSubmitInfo(e, navigate, infoChanger) } title={ "Información de Venta" } >
                    <>
                        <RequiredInputBox title={ "Documento de Identidad del Cliente" } textSetter={ setClientID } />
                        <RequiredSelector title={ "Tipo de Venta" } options={ saleTypes } textSetter={ setType } />  
                        
                        <SubmitButton text="Continuar" />
                    </>
                </Form>
            } 
        />
    );
}