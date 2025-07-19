import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import DashboardPage from "./reusables/dashboard-page.js";
import Form from "../components/layout/form.js";

import { SubmitButton } from '../components/ui/buttons.js';
import { RequiredInputBox, RequiredSelector } from '../components/ui/form.js';

import { routes } from '../config/routes.js';

export default function InformacionVenta({}) {
    const saleTypes = ["Comer aquí", "Para llevar", "Delivery"];
    
    const [idCliente, setIdCliente] = useState("");
    const [type, setType] = useState(saleTypes[0]);

    const navigate = useNavigate();
    
    return (
        <DashboardPage 
            content={
                <Form onSubmit={ () => navigate(routes['Pedido']) } title={ "Información de Venta" } 
                    content= {(
                        <>
                            <RequiredInputBox title={ "Documento de Identidad del Cliente" } textSetter={ setIdCliente } />
                            <RequiredSelector title={ "Tipo de Venta" } options={ saleTypes } textSetter={ setType } />  
                            
                            <SubmitButton text="Continuar" />
                        </>
                    )} 
                />
            } 
        />
    );
}
