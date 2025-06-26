import React, { useEffect, useState } from "react";
import './Pedido.css'

import { Producto } from "./Widgets";
import { Pedido as WidgethPedido } from "./Widgets" ;
import { WidgetNota } from "./Widgets";
import Dashboard from "../reusables/dashboard-page";

import { useNavigate } from "react-router-dom";

function ContenidoPedido() {

    const navegar = useNavigate()

    const [isVisible, setIsVisible] = useState(false);

    const  toggleMostrarProductor = () =>{
        setIsVisible(!isVisible);
    };

    const cerrarProductos = () => {

        setIsVisible(false);

    };

    const [nota, setNota] = useState(false)

    const toggleNota = () =>{
        setNota(!nota)
    }

    useEffect(()=>{

        const cambioDeTamanno = () => {

            if (window.innerWidth > 768){
                setIsVisible(false);
            }

        };

        window.addEventListener('resize',cambioDeTamanno);

        return () => {
            window.removeEventListener('resize',cambioDeTamanno);
        };


    }, []);



    return (
            
        <div className="mainPedido">

            

            <h1 id="tituloPedido">Pedido</h1>

            <div className = "contenedorFramesPedido">

                <div className="overlayPedidos"  
                    style={{display: isVisible ? "block":"none"}} 
                    onClick={cerrarProductos}>
                    </div>
                    
                

                <div className={`framePedido ${isVisible ? "visible" : ""}`}  id="framePlatos">
                    
                        

                    <h3 className="tituloPedido">Productos</h3>

                    <div className="scrollFrame" id="scrollFrameProductos">

                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>

                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        <Producto/>
                        
                        

                    </div>

                    <div className="frameSegmentedButtonsPedidos">

                        <button className="segmentedButtonPedidos">Combos</button>
                        <button className="segmentedButtonPedidos">Bebidas</button>
                        <button className="segmentedButtonPedidos">Platillos</button>
                        <button className="segmentedButtonPedidos">Postres</button>
                        <button className="segmentedButtonPedidos">Extras</button>

                    </div>

                        
                    
                </div>

            

                <div className="framePedido" id="frameOrden">


                    

                    <h3 className="tituloPedido">Pedido</h3>

                    <div className="scrollFrame" id="scrollFramePedido">

                        <WidgethPedido/>
                        <WidgethPedido/>
                        <WidgetNota/>
                        <WidgethPedido/>
                        <WidgethPedido/>
                        <WidgethPedido/>
                        <WidgethPedido/>

                    </div>

                    {!nota && (

                        <button id="nota" onClick={()=> setNota(true)}>+ | Agregar Nota</button>

                    )}
                    
                    {nota && (      
                        
                        <div className="modalAgregarNota">

                            <button className="cerrarModalAgregarNota" onClick={()=> setNota(false)}>-</button>
                            <textarea className="inputNota" placeholder="..." ></textarea>
                            <button className="aceptarModalAgregarNota">Agregar</button>
                    
                         </div>

                    )}
                    
                    
                        
            

                </div>

            </div>

            <div className="frameBotones">

               
                <button id="btnCancelar" className="btnPedido" onClick={() => navegar("/informacion_venta")}>Regresar</button>
                <button id="btnContinuar" className="btnPedido" onClick={() => navegar("/Confirmacion_Venta")}>Continuar</button>


            </div>

            <button className={`btnEsconder ${isVisible ? "active" : ""}`}
                        id="btnEsconder"
                        onClick={toggleMostrarProductor}>
                            
                            {isVisible ? "▼":"▲"}

            </button>



        </div>




    );
}



const Pedido = () => {
    return (
        <Dashboard content={ <ContenidoPedido/> } />
    );
}

export default Pedido;


//Nota
