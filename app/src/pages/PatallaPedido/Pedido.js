import React, { useEffect, useState } from "react";
import './Pedido.css'

import { Producto } from "./Widgets";
import { Pedido as WidgethPedido } from "./Widgets" ;
import { WidgetNota } from "./Widgets";
import Dashboard from "../reusables/dashboard-page";

import { useNavigate } from "react-router-dom";
import { categories, useCategory, useDishes, useProducts } from "../../hooks/order.js";

const CategoryTitles = ["Menú", "Contornos", "Productos", "Todos"];

function ContenidoPedido() {

    const [category, changeCategory] = useCategory();
    const dishes = useDishes(category);

    const [products, addFirst, increase, decrease] = useProducts();

    const navegar = useNavigate()
    const [pedido, setPedido] = useState([]);
    const [nota, setNota] = useState(false);
    const [textoNota, setTextoNota] = useState('');

    const toggleMostrarProductor = () =>{
        setIsVisible(!isVisible);
    };

    const cerrar = () => {

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

    const [isVisible, setIsVisible] = useState(false);

    const toggleNota = () => {
        setNota(!nota)
    }

    const calcularTotal = () => {
        return pedido.reduce((total, producto) => {
            return total + (producto.precio * (producto.cantidad || 1));
        }, 0);
    };

    const navegarAConfirmacion = () => {
        if (pedido.length === 0) return;
        
        navegar('/confirmacion-venta', { 
            state: { 
                pedido: pedido,
                total: calcularTotal(),
                nota: textoNota
            } 
        });
    };

    return (
            
        <div className="mainPedido">

            

            <h1 id="tituloPedido">Pedido</h1>

            <div className = "contenedorFramesPedido">

                <div className="overlayPedidos"  
                    style={{display: isVisible ? "block":"none"}} 
                    onClick={cerrar}>
                    </div>
                    
                

                <div className={`framePedido ${isVisible ? "visible" : ""}`}  id="framePlatos">
                    
                        

                    <h3 className="tituloPedido"></h3>

                    <div className="scrollFrame" id="scrollFrame">
                        {
                            dishes.map((dish) => (
                            <Producto 
                                key={ dish[0] }
                                onAgregar={ () => addFirst(dish) }
                                nombre={dish[0]}
                                precio={dish[1]}
                            />
                        ))}
                    </div>

                    <div className="frameSegmentedButtonsPedidos">
                        <div className="segmentedButtonsContainer">
                            { CategoryTitles.map( (title, i) => (
                                <button 
                                    className={`segmentedButtonPedidos ${category === categories[i] ? 'active' : ''}`}
                                    onClick={ () => { changeCategory(i) } }
                                >
                                { title }
                                </button> 
                            ))}
                        </div>
                    </div>

                        
                    
                </div>

            

                <div className="framePedido" id="frameOrden">


                    

                    <h3 className="tituloPedido">Pedido</h3>

                    <div className="scrollFrame" id="scrollFramePedido">

                        {products.map((product) => (
                            <WidgethPedido 
                                key={product[0]}
                                nombre={product[0]}
                                precio={product[1]}
                                cantidad={product[3]}
                                onIncrease={ () => increase(product[0]) }
                                onDecrease={ () => decrease(product[0]) }
                            />
                        ))}
                    </div>

                    {!nota && (

                        <button id="nota" onClick={()=> setNota(true)}>+ | Agregar Nota</button>

                    )}
                    
                    {nota && (      
                        
                        <div className="modalAgregarNota">

                            <button className="cerrarModalAgregarNota" onClick={()=> setNota(false)}>-</button>
                            <textarea 
                                className="inputNota" 
                                placeholder="..."
                                value={textoNota}
                                onChange={(e) => setTextoNota(e.target.value)}
                            ></textarea>
                            <button 
                                className="aceptarModalAgregarNota"
                                onClick={()=> setNota(false)}
                            >
                                Agregar
                            </button>
                    
                         </div>

                    )}
                    
                    
                        
            

                </div>

            </div>

            <div className="frameBotones">

               
                <button id="btnCancelar" className="btnPedido" onClick={() => navegar("/informacion-de-venta")}>Regresar</button>
                <button 
                    id="btnContinuar" 
                    className="btnPedido" 
                    onClick={navegarAConfirmacion}
                    disabled={pedido.length === 0}
                >
                    Continuar
                </button>


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
