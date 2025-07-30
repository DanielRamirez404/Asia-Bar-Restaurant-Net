import React, { useState, useContext } from 'react';
import Dashboard from "../reusables/dashboard-page";
import './confirmacionVenta.css'
import '../../styles/ticketPrint.css'
import { TarjetaProductoInformacionVenta, TarjetaNota, TarjetaDelivery } from './widgetsConfirmacionVenta';
import { useNavigate } from 'react-router-dom';
import { generarTicket } from '../../utils/ticketImpresion';
import Popup from '../reusables/Pop-up';
import { useOrder } from "../../hooks/order.js";
import OrderContext from '../../context/order';

function ContenidoConfirmacionVenta() {
    // Estado para controlar el popup de confirmación
    const [mostrarPopupConfirmacion, setMostrarPopupConfirmacion] = useState(false);

    // 1. Obtenemos los datos del estado global, no de location.state
    const order = useOrder();
    const { clearOrder } = useContext(OrderContext);
    const navegar = useNavigate();

    // Usamos los datos del contexto global
    const products = order.products || [];
    const note = order.note || '';
    const saleType = order.saleType || 'Para llevar';

    // Calculamos los totales basados en los datos del contexto
    const subtotal = products.reduce((sum, product) => sum + product[3] * product[1], 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    // Función para imprimir el ticket
    const imprimirTicket = () => {
        const fechaActual = new Date();
        const fecha = fechaActual.toLocaleDateString('es-ES');
        const hora = fechaActual.toLocaleTimeString('es-ES');

        const datosTicket = {
            empresa: 'ASIA BAR RESTAURANT',
            fecha: fecha,
            hora: hora,
            numeroTicket: Math.floor(1000 + Math.random() * 9000).toString(), // Número aleatorio para el ticket
            tipoVenta: saleType,
            items: products.map(item => ({
                nombre: item[0],
                cantidad: item[3],
                precio: item[1] * item[3],
                precioUnitario: item[1]
            })),
            subtotal: subtotal,
            iva: iva,
            total: total,
            mensaje: note || '¡Gracias por su preferencia!'
        };

        // Generar el ticket
        const ticket = generarTicket(datosTicket);
        
        // Crear un elemento temporal para la impresión
        const printContent = `
            <div id="ticket-print-content">
                <div class="ticket-container">
                    <pre>${ticket}</pre>
                </div>
            </div>
        `;
        
        // Agregar el contenido al documento
        document.body.insertAdjacentHTML('beforeend', printContent);
        
        // Variable para rastrear si realmente se imprimió
        let reallyPrinted = false;
        let dialogClosed = false;
        
        // Función para limpiar elementos
        const cleanup = () => {
            const printElement = document.getElementById('ticket-print-content');
            if (printElement) printElement.remove();
            window.removeEventListener('afterprint', afterPrint);
        };

        // Detectar impresión usando matchMedia
        const printMediaQuery = window.matchMedia('print');
        
        const handlePrintChange = (mql) => {
            if (mql.matches) {
                // Se está imprimiendo realmente
                console.log('Impresión real iniciada');
                reallyPrinted = true;
            } else if (reallyPrinted) {
                // Terminó la impresión real
                cleanup();
                printMediaQuery.removeEventListener('change', handlePrintChange);
                // NO navegar automáticamente
            }
        };
        
        // Detectar cuando se cierra el diálogo sin imprimir
        const afterPrint = () => {
            console.log('Diálogo de impresión cerrado');
            dialogClosed = true;
            
            // Mostrar popup de confirmación después de cerrar el diálogo de impresión
            setMostrarPopupConfirmacion(true);

            // Limpiar listeners y elementos
            cleanup();
            printMediaQuery.removeEventListener('change', handlePrintChange);
            window.removeEventListener('afterprint', afterPrint);
        };

        // Agregar event listeners
        printMediaQuery.addEventListener('change', handlePrintChange);
        window.addEventListener('afterprint', afterPrint);
        
        // Timeout de seguridad para limpiar después de 30 segundos
        const timeoutId = setTimeout(() => {
            if (!reallyPrinted) {
                console.log('Timeout: Limpiando sin imprimir');
                cleanup();
                printMediaQuery.removeEventListener('change', handlePrintChange);
                window.removeEventListener('afterprint', afterPrint);
            }
        }, 30000);
        
        // Imprimir
        try {
            window.print();
        } catch (error) {
            console.error('Error al imprimir:', error);
            cleanup();
            clearTimeout(timeoutId);
        }
    };

    const handleConfirmVenta = () => {
        setMostrarPopupConfirmacion(false);
        clearOrder(); // Limpiamos el pedido
        navegar("/Inicio");
    };

    const handleRegresar = () => {
        console.log('Fase 3: Enviando señal de edición...', { state: { edit: true } });
        navegar("/Pedido", { state: { edit: true } });
    };

    return (
    
    <div className='mainConfirmacionVenta'>
        
        {/* Popup de confirmación de venta */}
        <Popup 
            isOpen={mostrarPopupConfirmacion}
            onClose={() => setMostrarPopupConfirmacion(false)}
            message="¿Se ha completado la venta?"
        >
            <div className="popup-buttons">
        <button 
            className="popup-button popup-confirm-button " 
            onClick={handleConfirmVenta}
        >
            Sí
        </button>
        <button 
            className="popup-button popup-cancel-button"
            onClick={() => setMostrarPopupConfirmacion(false)}
        >
            No
        </button>
    </div>
</Popup>
        
        <h1 className='tituloConfirmacionVenta'>Confirmacion Venta</h1>
        
        <div className='contenedorResumenVenta'>

        <div className='frameResumenCliente' id='resumenCliente'>

            <div className='infromacionCliente'>
                    <span className='nombreApeliido'>Nombre Apellido</span>
                    <span className='datoCliente' id='ci'>CI: 23949235 </span>

                    {saleType === 'Delivery' && (
                        <span className='datoCliente' id='informacionDireccion'>direccion: Calle XXXX casa nro XX</span>
                    )}

                    {saleType === 'Para comer aqui' && (
                    <span className='datoCliente' id='informacionMesa'>Mesa: 7</span>
                    )}

                    
                        <span className='datoCliente' id='tipoDeVenta'>Tipo de venta: <span id='tipoTexto'>{saleType}</span></span>
                   
                </div>

                {saleType === 'Delivery' && (

                <div className='informacionRepartidor'>
                    <span className='repartidor'>Repartidor</span>
                    <span className='nombreRepartidor'>Nombre Apellido</span>
                </div>
                )}

        </div>



        <div className='frameResumenVenta' id='resumenVenta'>

            <div className='scrollResumenProductos'>

                {products.map((producto, index) => (
                    <TarjetaProductoInformacionVenta 
                        key={`${producto[0]}-${index}`}
                        nombre={producto[0]}
                        cantidad={producto[3]}
                        precio={producto[1] * producto[3]}
                    />
                ))}
                
                {saleType === 'Delivery' && <TarjetaDelivery />}
                
                {note && (
                    <TarjetaNota nota={note} />
                )}


            </div>

            <div className='totalVenta'>

                <span className='totalTexto'>Total: ${total.toFixed(2)}</span>

            </div>



        </div>



        </div>


        <div className="frameBotones">

                        
            <button id="btnCancelar" className="btnPedido" onClick={handleRegresar}>Regresar</button>
            <button 
                id="btnContinuar" 
                className="btnPedido" 
                onClick={() => {
                    imprimirTicket();
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