import React, { useState, useEffect } from 'react';
import Dashboard from "../reusables/dashboard-page";
import './confirmacionVenta.css'
import { TarjetaProductoInformacionVenta, TarjetaNota, TarjetaDelivery } from './widgetsConfirmacionVenta';
import { useNavigate, useLocation } from 'react-router-dom';
import { generarTicket } from '../../utils/ticketImpresion';

import { useOrder, useOrderClearer } from "../../hooks/order.js";

function ContenidoConfirmacionVenta() {


    const order = useOrder();
    const orderClearer = useOrderClearer();

    const products = order.products;

        
    const subtotal = products.reduce((sum, product) => sum + product[3] * product[1], 0);
    const iva = subtotal * 0.16; // 16% de IVA
    const total = subtotal + iva; 
   

    const imprimirTicket = () => {
        const ahora = new Date();
        const fecha = ahora.toLocaleDateString('es-MX');
        const hora = ahora.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
        
        const datosTicket = {
            empresa: 'RESTAURANTE ASIA',
            direccion: 'Av. Principal #123',
            telefono: '555-123-4567',
            fecha: fecha,
            hora: hora,
            numeroTicket: Math.floor(1000 + Math.random() * 9000).toString(), // Número aleatorio para el ticket
            tipoVenta: order.type,
            items: products.map(product => ({
                nombre: product[0], 
                cantidad: product[3],
                precio: product[1] * product[3],
                precioUnitario: product[1] 
            })),
            subtotal: subtotal,
            iva: iva,
            total: subtotal + iva,
            mensaje: order.note || '¡Gracias por su preferencia!'
        };

        // Generar el ticket
        const ticket = generarTicket(datosTicket);
        
        // Imprimir en una nueva ventana
        const ventana = window.open('', '_blank');
        ventana.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Ticket de Venta</title>
                <style>
                    @media print {
                        body { font-family: monospace; font-size: 12px; }
                        @page { margin: 0; size: 58mm 297mm; }
                        button { display: none; }
                    }
                    pre { white-space: pre-wrap; word-wrap: break-word; }
                </style>
            </head>
            <body>
                <pre>${ticket}</pre>
                <button onclick="window.print()">Imprimir</button>
                <button onclick="window.close()">Cerrar</button>
            </body>
            </html>
        `);
        ventana.document.close();
    };

    const navegar = useNavigate()
    const location = useLocation();
    
    return (
    
    <div className='mainConfirmacionVenta'>
        
        <h1 className='tituloConfirmacionVenta'>Confirmacion Venta</h1>
        
        <div className='contenedorResumenVenta'>

        { 
            (order.type !== "Delivery") ? null :
                (<div className='frameResumenCliente' id='resumenCliente'>

                    <div className='infromacionCliente'>
                            <span className='nombreApeliido'>{ order.clientName }</span>
                            <span className='datoCliente' id='ci'>{ order.clientID }</span>

                            <span className='datoCliente' id='informacionDireccion'>{ order.address }</span>
                           
                    </div>

                </div>)
        }

        <div className='frameResumenVenta' id='resumenVenta'>

            <div className='scrollResumenProductos'>

                
                { console.log(order) }
                { products.map((product, index) => (
                    <TarjetaProductoInformacionVenta 
                        key={`producto-${index}`}
                        nombre={product[0]}
                        cantidad={product[3]}
                        precio={product[1]}
                    />
                ))}
                
                {order.note && (
                    <TarjetaNota nota={ order.note } />
                )}


            </div>

            <div className='totalVenta'>

                <span className='totalTexto'>Total: ${total.toFixed(2)}</span>

            </div>

        </div>


        </div>


        <div className="frameBotones">

                        
            <button id="btnCancelar" className="btnPedido" onClick={() => navegar("/Pedido")}>Regresar</button>
            <button 
                id="btnContinuar" 
                className="btnPedido" 
                onClick={() => {
                    orderClearer();
                    imprimirTicket();
                    navegar("/Inicio");
                }}
            >
                Completar venta
            </button>


        </div>


    </div>
    
)

}


function ConfirmacionVenta(){
    return (<Dashboard content={ <ContenidoConfirmacionVenta/> } />)
}

export default ConfirmacionVenta
