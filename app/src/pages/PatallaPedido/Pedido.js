import React, { useEffect, useState } from "react";
import './Pedido.css'
import { Rellenar } from "./prueba";
import { Producto } from "./Widgets";

function Pedido() {

    const [isVisible, setIsVisible] = useState(false);

    const  toggleMostrarProductor = () =>{
        setIsVisible(!isVisible);
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
            
        <div className="main">
            <h1>Pedido</h1>

            <div className = "contenedorFramesPedido">

                <div className="overlay"  
                    style={{display: isVisible ? "block":"none"}} 
                    onclick={toggleMostrarProductor}>
                    </div>
                    
                <button className={`btnEsconder ${isVisible ? "active" : ""}`}
                        id="btnEsconder"
                        onClick={toggleMostrarProductor}>
                            
                            {isVisible ? "v":"∧"}

                        </button>

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

                    </div>

                        
                    
                </div>

            

                <div className="framePedido" id="frameOrden">


                    

                    <h3 className="tituloPedido">Pedido</h3>

                    <div className="scrollFrame" id="scrollFramePedido">

                        <Rellenar/>


                    </div>

                    <button className="nota">+ | Agregar Nota</button>
                    
                        
            

                </div>

            </div>

            <div className="frameBotones">

               
                <button id="btnCancelar" className="btnPedido">Cancelar</button>
                <button id="btnContinuar" className="btnPedido">Continuar</button>


            </div>



        </div>




    );
}

export default Pedido;
