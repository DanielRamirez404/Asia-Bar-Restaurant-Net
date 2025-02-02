import React, { useEffect, useState } from "react";
import "../reusables/constants.css"
import './Pedido.css'

import { Producto } from "./Widgets";
import { Pedido as WidgethPedido } from "./Widgets" ;
import { WidgetNota } from "./Widgets";
import Dashboard from "../reusables/dashboard-page";

function ContenidoPedido() {

    const [isVisible, setIsVisible] = useState(false);

    const  toggleMostrarProductor = () =>{
        setIsVisible(!isVisible);
    };

    const cerrarProductos = () => {

        setIsVisible(false);

    };

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

                <div className="overlay"  
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

                    <button id="nota">+ | Agregar Nota</button>
                    
                        
            

                </div>

            </div>

            <div className="frameBotones">

               
                <button id="btnCancelar" className="btnPedido">Cancelar</button>
                <button id="btnContinuar" className="btnPedido">Continuar</button>


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
