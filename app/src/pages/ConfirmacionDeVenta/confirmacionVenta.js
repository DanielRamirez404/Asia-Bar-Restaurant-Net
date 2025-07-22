import React, { useState, useEffect } from 'react';
import Dashboard from "../reusables/dashboard-page";
import './confirmacionVenta.css'
import { TarjetaProductoInformacionVenta, TarjetaNota, TarjetaDelivery } from './widgetsConfirmacionVenta';
import { useNavigate, useLocation } from 'react-router-dom';
import { generarTicket } from '../../utils/ticketImpresion';


function ContenidoConfirmacionVenta() {
    // Función para imprimir el ticket
    const imprimirTicket = () => {
        // Obtener la fecha y hora actual
        const ahora = new Date();
        const fecha = ahora.toLocaleDateString('es-MX');
        const hora = ahora.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
        
        // Calcular subtotal e IVA
        const subtotal = pedido.reduce((sum, item) => sum + (item.precio * (item.cantidad || 1)), 0);
        const iva = subtotal * 0.16; // 16% de IVA
        
        // Crear datos para el ticket
        const datosTicket = {
            empresa: 'RESTAURANTE ASIA',
            direccion: 'Av. Principal #123',
            telefono: '555-123-4567',
            fecha: fecha,
            hora: hora,
            numeroTicket: Math.floor(1000 + Math.random() * 9000).toString(), // Número aleatorio para el ticket
            tipoVenta: tipoVenta,
            items: pedido.map(item => ({
                nombre: item.nombre,
                cantidad: item.cantidad || 1,
                precio: item.precio,
                precioUnitario: item.precio / (item.cantidad || 1)
            })),
            subtotal: subtotal,
            iva: iva,
            total: total,
            mensaje: nota || '¡Gracias por su preferencia!'
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
    
    // Obtener los datos del pedido de la ubicación
    const { pedido = [], total = 0, nota = '', tipoVenta: tipoVentaParam = 'Para llevar' } = location.state || {};
    const [tipoVenta, setTipoVenta] = useState(tipoVentaParam);

    return (
    
    <div className='mainConfirmacionVenta'>
        
        <h1 className='tituloConfirmacionVenta'>Confirmacion Venta</h1>
        
        <div className='contenedorResumenVenta'>

        <div className='frameResumenCliente' id='resumenCliente'>

            <div className='infromacionCliente'>
                    <span className='nombreApeliido'>Nombre Apellido</span>
                    <span className='datoCliente' id='ci'>CI: 23949235 </span>

                    {tipoVenta === 'Delivery' && (
                        <span className='datoCliente' id='informacionDireccion'>direccion: Calle XXXX casa nro XX</span>
                    )}

                    {tipoVenta === 'Para comer aqui' && (
                    <span className='datoCliente' id='informacionMesa'>Mesa: 7</span>
                    )}

                    
                        <span className='datoCliente' id='tipoDeVenta'>Tipo de venta: <span id='tipoTexto'>{tipoVenta}</span></span>
                   
                </div>

                {tipoVenta === 'Delivery' && (

                <div className='informacionRepartidor'>
                    <span className='repartidor'>Repartidor</span>
                    <span className='nombreRepartidor'>Nombre Apellido</span>
                </div>
                )}

        </div>



        <div className='frameResumenVenta' id='resumenVenta'>

            <div className='scrollResumenProductos'>

                {pedido.map((producto, index) => (
                    <TarjetaProductoInformacionVenta 
                        key={`${producto.id}-${index}`}
                        nombre={producto.nombre}
                        cantidad={producto.cantidad || 1}
                        precio={producto.precio}
                    />
                ))}
                
                {tipoVenta === 'Delivery' && <TarjetaDelivery />}
                
                {nota && (
                    <TarjetaNota nota={nota} />
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