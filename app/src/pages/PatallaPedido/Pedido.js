import React, { useEffect, useState } from "react";
import './Pedido.css'

import { Producto } from "./Widgets";
import { Pedido as WidgethPedido } from "./Widgets" ;
import { WidgetNota } from "./Widgets";
import Dashboard from "../reusables/dashboard-page";

import { useNavigate } from "react-router-dom";
import { categories, useCategory, useDishes } from "../../hooks/order.js";

const CategoryTitles = ["Menú", "Contornos", "Productos", "Todos"];

function ContenidoPedido() {

    const [category, changeCategory] = useCategory();
    const dishes = useDishes(category);

    const navegar = useNavigate()
    const [pedido, setPedido] = useState([]);
    const [nota, setNota] = useState(false)
    const [textoNota, setTextoNota] = useState('');

    const agregarProducto = (producto) => {
        // Verificar si el producto ya está en el pedido
        const productoExistente = pedido.find(p => p.id === producto.id);
        
        if (productoExistente) {
            // Si existe, incrementar la cantidad
            setPedido(pedido.map(p => 
                p.id === producto.id 
                    ? { ...p, cantidad: (p.cantidad || 1) + 1 }
                    : p
            ));
        } else {
            // Si no existe, agregar con cantidad 1
            setPedido([...pedido, { ...producto, cantidad: 1 }]);
        }
    };

    const actualizarCantidadProducto = (nuevaCantidad, id) => {
        if (nuevaCantidad < 1) {
            eliminarProducto(id);
            return;
        }
        setPedido(pedido.map(producto =>
            producto.id === id
                ? { ...producto, cantidad: nuevaCantidad }
                : producto
        ));
    };

    const eliminarProducto = (id) => {
        setPedido(pedido.filter(producto => producto.id !== id));
    };

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

                        { console.log(dishes) } {
                            dishes.map((dish, index) => (
                            <Producto 
                                key={index}
                                onAgregar={
                                    () => agregarProducto({ 
                                        id: index, 
                                        nombre: dish[0], 
                                        precio: parseFloat(dish[1].toFixed(2)) 
                                    })
                                }
                                nombre={dish[0]}
                                precio={parseFloat(dish[1].toFixed(2))}
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

                        {pedido.map((producto) => (
                            <WidgethPedido 
                                key={producto.id}
                                id={producto.id}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                cantidad={producto.cantidad || 1}
                                onCantidadChange={(nuevaCantidad) => actualizarCantidadProducto(nuevaCantidad, producto.id)}
                                onEliminar={() => eliminarProducto(producto.id)}
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